import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { VideoModal } from "@/components/VideoModal.tsx";
import { ImageModal } from "@/components/ImageModal.tsx";

const AllWorks = () => {
  const [activeFilter, setActiveFilter] = useState("Show all");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videoTitles, setVideoTitles] = useState({});

  const galleryImages = [
    "https://prashannabajracharya.com/gallery_images/1.jpg",
    "https://prashannabajracharya.com/gallery_images/2.jpg",
    "https://prashannabajracharya.com/gallery_images/3.jpg",
    "https://prashannabajracharya.com/gallery_images/4.jpg",
    "https://prashannabajracharya.com/gallery_images/5.jpg",
    "https://prashannabajracharya.com/gallery_images/6.jpg",
    "https://prashannabajracharya.com/gallery_images/7.jpg",
    "https://prashannabajracharya.com/gallery_images/8.jpg",
    "https://prashannabajracharya.com/gallery_images/9.jpg",
    "https://prashannabajracharya.com/gallery_images/10.jpg",
    "https://prashannabajracharya.com/gallery_images/11.jpg",
    "https://prashannabajracharya.com/gallery_images/12.jpg",
    "https://prashannabajracharya.com/gallery_images/13.jpg",
    "https://prashannabajracharya.com/gallery_images/14.jpg",]


  const projects = [
    {
      id: "doc_1",
      category: "Documentaries",
      url: "https://www.youtube.com/watch?v=y7BtAkW5LKA",
    },
    {
      id: "doc_2",
      category: "Documentaries",
      url: "https://www.youtube.com/watch?v=kexCWZSRx7Q",
    },
    {
      id: "doc_3",
      category: "Documentaries",
      url: "https://www.youtube.com/watch?v=Nylgt4CtsKo",
    },
    {
      id: "doc_4",
      category: "Documentaries",
      url: "https://youtu.be/IUigcSW0lfo?si=fNmP7fUCsIFwYH4M",
    },
    {
      id: "doc_5",
      category: "Documentaries",
      url: "https://youtu.be/D5PdEPD6O14?si=7qT9yJw4dPJtdr61",
    },
    {
      id: "doc_6",
      category: "Documentaries",
      url: "https://youtu.be/NOqkE2YJtkY?si=z3ZbqE7y_sQ-l5e8",
    },
    {
      id: "comm_1",
      category: "Commercials",
      url: "https://www.youtube.com/watch?v=1zX82HUC3MQ",
    },
    {
      id: "comm_2",
      category: "Commercials",
      url: "https://www.youtube.com/watch?v=S7DRJNuYrhs",
    },
    {
      id: "comm_3",
      category: "Commercials",
      url: "https://youtu.be/pjCOsZZPB3c",
    },
    {
      id: "comm_4",
      category: "Commercials",
      url: "https://youtu.be/ZmxUV8x5Bt4",
    },
    {
      id: "comm_5",
      category: "Commercials",
      url: "https://youtu.be/tI--w9k7P0g",
    },
    {
      id: "comm_6",
      category: "Commercials",
      url: "https://youtu.be/AlRhi6xPrHc",
    },
    {
      id: "comm_7",
      category: "Commercials",
      url: "https://youtu.be/uzTDHZ4qpeY",
    },
    {
      id: "comm_8",
      category: "Commercials",
      url: "https://www.youtube.com/watch?v=0xxofHCllXU",
    },
    {
      id: "comm_9",
      category: "Commercials",
      url: "https://www.youtube.com/watch?v=81D9H2Z3Vcw",
    },
    {
      id: "music_1",
      category: "Music Videos",
      url: "https://youtu.be/81DnLf00zqQ?si=Tb4iJ5mfa3m_nQoq",
    },
    {
      id: "music_2",
      category: "Music Videos",
      url: "https://youtu.be/hoH7zG0oLLE?si=9paoNyplyZWdY-4O",
    },
    {
      id: "music_3",
      category: "Music Videos",
      url: "https://youtu.be/t-3QiJuBshA?si=yJ8Yy4tJ7H-NJhzo",
    },
    {
      id: "music_4",
      category: "Music Videos",
      url: "https://youtu.be/wnXwSoNfs6k?si=hKiG9EraJmqGN7Ga",
    },
    {
      id: "music_5",
      category: "Music Videos",
      url: "https://youtu.be/0-he4Uc9zE8?si=uLr2RgwZoht_SjCq",
    },
    {
      id: "music_6",
      category: "Music Videos",
      url: "https://youtu.be/lvWnomkTiVY?si=QwnVf5NrZiXNhIJb",
    },
    {
      id: "music_7",
      category: "Music Videos",
      url: "https://youtu.be/ttpO7wNqFv8?si=RkUXV2hwH7hj8zil",
    },
    {
      id: "music_8",
      category: "Music Videos",
      url: "https://youtu.be/E2lK1VsaMFQ?si=Khiy_a-b8InySJj6",
    },
    {
      id: "music_9",
      category: "Music Videos",
      url: "https://youtu.be/0TgIVnPb7_g?si=7aijuxQOvPaUtrJ4",
    },
    {
      id: "music_10",
      category: "Music Videos",
      url: "https://youtu.be/Z4noW1s4Ekk?si=R-bmQim-HmjUs8Ny",
    },
    {
      id: "music_11",
      category: "Music Videos",
      url: "https://youtu.be/RtIuL9Y4BR0?si=RnJdEAfPLaCrjPKF",
    },
    {
      id: "music_12",
      category: "Music Videos",
      url: "https://youtu.be/ybYVD_IkVdE?si=sc5NEE24egWeZtct",
    },
    {
      id: "after_1",
      category: "After Movies",
      url: "https://youtu.be/LXQGcVf3lr8",
    },
    {
      id: "after_2",
      category: "After Movies",
      url: "https://youtu.be/mWnv5-lHahE",
    },
    {
      id: "after_3",
      category: "After Movies",
      url: "https://www.youtube.com/watch?v=ufDpfhmHYOU",
    },
    {
      id: "after_4",
      category: "After Movies",
      url: "https://youtu.be/lGPeTb37_LQ?si=0JQYkxk6kcT69kL2",
    },
    {
      id: "after_5",
      category: "After Movies",
      url: "https://www.youtube.com/watch?v=3ds0YWrpWg4",
    },
  ];

  useEffect(() => {
    const fetchTitles = async () => {
      const titles = {};
      for (const project of projects) {
        const videoId = extractVideoId(project.url);
        if (videoId) {
          const title = await fetchYouTubeTitle(videoId);
          titles[project.id] = title; // Use project ID instead of index
        }
      }
      setVideoTitles(titles);
    };

    fetchTitles();
  }, []);

  const filters = [
    "Show all",
    "Documentaries",
    "Music Videos",
    "Commercials",
    "After Movies",
    "Photography",
  ];

  const extractVideoId = (url) => {
    const patterns = [
      /(?:youtube\.com\/watch\?v=)([^&\n?#]+)/,
      /(?:youtu\.be\/)([^&\n?#]+)/,
      /(?:youtube\.com\/embed\/)([^&\n?#]+)/,
    ];

    for (const pattern of patterns) {
      const match = url.match(pattern);
      if (match) {
        return match[1].split("?")[0];
      }
    }
    return null;
  };

  const fetchYouTubeTitle = async (videoId) => {
    try {
      const response = await fetch(
        `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${videoId}&format=json`,
      );
      const data = await response.json();
      return data.title;
    } catch (error) {
      console.error("Error fetching video title:", error);
      return "Video Title";
    }
  };


  const filteredProjects =
    activeFilter === "Show all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const openModal = (project) => {
    const videoId = extractVideoId(project.url);
    setSelectedVideo({
      id: videoId,
      title: videoTitles[project.id] || "Video Title",
      platform: "youtube",
      url: project.url,
    });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedVideo(null);
  };
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState({ src: "", alt: "" });

  const openImageModel = (imageData) => {
    setCurrentImage({ src: imageData.src, alt: imageData.alt });
    setIsOpen(true);
  };

  const closeImageModel = () => {
    setIsOpen(false);
    setCurrentImage({ src: "", alt: "" });
  };


  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Header Section */}
      <div className="px-6 md:px-12 lg:px-20 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12">
            {/* Left side - Title */}
            <motion.div
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1
                className="text-[120px] md:text-[180px] lg:text-[220px] font-bold leading-none text-black"
                style={{ fontFamily: "Staatliches" }}
              >
                Projects
              </h1>
            </motion.div>

            {/* Right side - Description */}
            <motion.div
              className="lg:w-1/2 lg:pt-00"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/*<p className="text-lg md:text-xl text-gray-700 leading-relaxed">*/}
              {/*  For me, creativity isn't a skill — it's a way of feeling. Every*/}
              {/*  shot, every cut, every frame is a chance to connect with*/}
              {/*  something real. I don't just film projects; I help people tell*/}
              {/*  stories that deserve to be remembered.*/}
              {/*</p>*/}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <div className="px-6 md:px-12 lg:px-20 pb-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-lg font-medium mb-4 text-black">filter</h3>
            <div className="flex flex-wrap gap-3">
              {filters.map((filter, index) => (
                <motion.button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 rounded-full border transition-all duration-200 text-sm ${
                    activeFilter === filter
                      ? "bg-black text-white border-black"
                      : "bg-white text-gray-700 border-gray-300 hover:border-gray-500"
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {filter}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="px-6 md:px-12 lg:px-20 pb-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            key={activeFilter}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {activeFilter === "Photography"
              ? galleryImages.map((image, index) => (
                <motion.div
                  key={`image_${index}`}
                  className="group cursor-pointer relative"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  onClick={() =>
                    openImageModel({
                      src: image,
                      alt: `Gallery image ${index + 1}`,
                      isImage: true,
                    })
                  }
                >
                  <div className="relative overflow-hidden rounded-lg shadow-lg bg-gray-200 aspect-[16/9]">
                    <img
                      src={image}
                      alt={`Gallery image ${index + 1}`}
                      loading='lazy'
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        e.target.src = "/placeholder.jpg"; // Fallback local image
                      }}
                    />
                    {/* Hover Overlay */}
                    {/*<div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-75 transition-all duration-300 flex flex-col justify-end p-4">*/}
                    {/*  <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">*/}
                    {/*    <h3*/}
                    {/*      className="text-white text-lg font-semibold mb-2"*/}
                    {/*      style={{ fontFamily: "Staatliches" }}*/}
                    {/*    >*/}
                    {/*      Photography {index + 1}*/}
                    {/*    </h3>*/}
                    {/*  </div>*/}
                    {/*</div>*/}
                  </div>
                </motion.div>
              ))
              : filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="group cursor-pointer relative"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  onClick={() =>
                    openModal({
                      src: `https://img.youtube.com/vi/${extractVideoId(project.url)}/maxresdefault.jpg`,
                      alt: videoTitles[project.id] || "Video thumbnail",
                      isImage: true,
                    })
                  }
                >
                  <div className="relative overflow-hidden rounded-lg shadow-lg bg-gray-200 aspect-[16/9]">
                    <img
                      src={`https://img.youtube.com/vi/${extractVideoId(project.url)}/maxresdefault.jpg`}
                      alt={videoTitles[project.id] || "Video thumbnail"}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        const videoId = extractVideoId(project.url);
                        const src = e.target.src;

                        if (src.includes("maxresdefault.jpg")) {
                          e.target.src = `https://img.youtube.com/vi/${videoId}/sddefault.jpg`;
                        } else if (src.includes("sddefault.jpg")) {
                          e.target.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
                        } else if (src.includes("hqdefault.jpg")) {
                          e.target.src = `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;
                        } else {
                          e.target.src = "/placeholder.jpg"; // Fallback local image
                        }
                      }}
                    />
                    {/* Hover Overlay with Title and Tags */}
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-75 transition-all duration-300 flex flex-col justify-end p-4">
                      <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                        <h3
                          className="text-white text-lg font-semibold mb-2"
                          style={{ fontFamily: "Staatliches" }}
                        >
                          {videoTitles[project.id] || "Loading..."}
                        </h3>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
          </motion.div>

          {/* Empty state */}
          {activeFilter !== "Photography" && filteredProjects.length === 0 && (
            <motion.div
              className="text-center py-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-gray-500 text-lg">
                No projects found for this filter.
              </p>
            </motion.div>
          )}
        </div>

        {/* Image Modal */}
        <ImageModal
          isOpen={isOpen}
          onClose={closeImageModel}
          src={currentImage.src}
          alt={currentImage.alt}
        />
      </div>

      {/* Video Modal */}
      <VideoModal
        isOpen={isModalOpen}
        video={selectedVideo}
        onClose={closeModal}
      />
    </div>
  );
};

export default AllWorks;
