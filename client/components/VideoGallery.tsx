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

  const displayedVideos = videos.slice(
    thumbnailStartIndex,
    thumbnailStartIndex + thumbnailsPerPage
  );

  return (
    <>
      <section id={sectionId} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <motion.h2
            className="text-4xl lg:text-6xl mb-10 text-center"
            style={{
              fontFamily: "Staatliches",
              fontSize: "clamp(58px, 12vw, 76px)",
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
            className={`mb-8 gap-4 
            scrollbar-hide
            flex overflow-x-auto md:overflow-visible 
            md:grid md:grid-cols-2 lg:grid-cols-4 
            ${videos.length >= 4 ? "md:grid-rows-2" : ""}
            snap-x snap-mandatory`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {displayedVideos.map((video, index) => (
              <motion.div
                key={`${video.id}-${index}`}
                className="relative md:w-auto flex-shrink-0 bg-gray-200 overflow-hidden cursor-pointer group rounded-lg shadow-lg snap-start"
                onClick={() => openModal(video)}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={getThumbnail(video)}
                  alt={getDisplayTitle(video)}
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `https://img.youtube.com/vi/${video.id}/mqdefault.jpg`;
                  }}
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-75 transition-all duration-300 flex flex-col justify-end p-4">
                  <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                    <h3
                      className="text-white text-lg font-semibold mb-2"
                      style={{ fontFamily: "Staatliches" }}
                    >
                      {getDisplayTitle(video).toUpperCase()}
                    </h3>

                  </div>
                </div>


              </motion.div>
            ))}
          </motion.div>

          {/* Navigation */}
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
                  className="text-2xl lg:text-3xl hover:text-portfolio-dark-green transition-colors duration-300 flex items-center gap-2"
                  style={{ fontFamily: "Staatliches" }}
                  onClick={handlePrevious}
                >
                  ← Previous
                </button>
              ) : (
                <div />
              )}
              <button
                className="text-2xl lg:text-3xl hover:text-portfolio-dark-green transition-colors duration-300 flex items-center gap-2"
                style={{ fontFamily: "Staatliches" }}
                onClick={handleNext}
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
