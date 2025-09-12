import { motion } from "framer-motion";
import { useVideoGallery, VideoData } from "../hooks/useVideoGallery";
import { VideoModal } from "./VideoModal";
import React from "react";

interface VideoGalleryProps {
  title: string;
  videos: VideoData[];
  sectionId?: string;
}

export const VideoGallery = ({ title, videos, sectionId = "works" }: VideoGalleryProps) => {
  const {
    isModalOpen,
    selectedVideo,
    thumbnailStartIndex,
    hasNextBeenPressed,
    thumbnailsPerPage,
    handleNext,
    handlePrevious,
    openModal,
    closeModal,
    getDisplayTitle,
    getThumbnail
  } = useVideoGallery(videos);

  // On mobile, show all videos; on desktop, use pagination
  const displayedVideos = window.innerWidth < 768 ? videos : videos.slice(
    thumbnailStartIndex,
    thumbnailStartIndex + thumbnailsPerPage
  );

  return (
    <>
      <section id={sectionId} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-6xl mb-6 sm:mb-8 lg:mb-10 text-center"
            style={{
              fontFamily: "Staatliches",
              fontSize: "clamp(28px, 8vw, 76px)",
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {title}
          </motion.h2>

          {/* Video Grid */}
          <motion.div
            className={`mb-6 sm:mb-8 gap-3 sm:gap-4 
            scrollbar-hide
            flex overflow-x-auto md:overflow-visible 
            md:grid md:grid-cols-2 lg:grid-cols-4 
            ${videos.length >= 4 ? "md:grid-rows-2" : ""}
            snap-x snap-mandatory md:snap-none
            pb-2 md:pb-0`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {displayedVideos.map((video, index) => (
              <motion.div
                key={`${video.id}-${index}`}
                className="relative w-72 flex-shrink-0 bg-gray-200 overflow-hidden cursor-pointer group rounded-lg shadow-lg snap-start"

                onClick={() => openModal(video)}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={getThumbnail(video)}
                  alt={getDisplayTitle(video)}
                  className="w-full h-full object-cover md:object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `https://img.youtube.com/vi/${video.id}/mqdefault.jpg`;
                  }}
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-75 transition-all duration-300 flex flex-col justify-end p-3 sm:p-4">
                  <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                    <h3
                      className="text-white text-sm sm:text-base lg:text-lg font-normal mb-2 line-clamp-2"
                      style={{ fontFamily: "Staatliches" }}
                    >
                      {getDisplayTitle(video).toUpperCase()}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>



          {/* Desktop Navigation */}
          {videos.length > thumbnailsPerPage && (
            <motion.div
              className="hidden md:flex justify-between items-center mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {hasNextBeenPressed ? (
                <button
                  className="text-xl sm:text-2xl lg:text-3xl hover:text-portfolio-dark-green transition-colors duration-300 flex items-center gap-2 disabled:opacity-50"
                  style={{ fontFamily: "Staatliches" }}
                  onClick={handlePrevious}
                  disabled={thumbnailStartIndex === 0}
                >
                  ← Previous
                </button>
              ) : (
                <div />
              )}
              <button
                className="text-xl sm:text-2xl lg:text-3xl hover:text-portfolio-dark-green transition-colors duration-300 flex items-center gap-2 disabled:opacity-50"
                style={{ fontFamily: "Staatliches" }}
                onClick={handleNext}
                disabled={thumbnailStartIndex + thumbnailsPerPage >= videos.length}
              >
                Next →
              </button>
            </motion.div>
          )}
        </div>
      </section>

      <VideoModal isOpen={isModalOpen} video={selectedVideo} onClose={closeModal} />
    </>
  );
};
