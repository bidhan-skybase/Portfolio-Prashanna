import { AnimatePresence, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useCallback, useEffect, useState } from "react";
import CountUp from "react-countup";
import { ImageModal, useImageModal } from "../components/ImageModal";
import { VideoGallery } from "../components/VideoGallery";
import { COMMERCIAL_VIDEOS, AFTER_MOVIE_VIDEOS } from "../constants/videoData";
import { useNavigate } from "react-router-dom";


const galleryImages = [
  "https://prashannabajracharya.com/gallery_images/1.webp",
  "https://prashannabajracharya.com/gallery_images/2.webp",
  "https://prashannabajracharya.com/gallery_images/3.webp",
  "https://prashannabajracharya.com/gallery_images/4.webp",
  "https://prashannabajracharya.com/gallery_images/5.webp",
  "https://prashannabajracharya.com/gallery_images/6.webp",
  "https://prashannabajracharya.com/gallery_images/7.webp",
  "https://prashannabajracharya.com/gallery_images/8.webp",
  "https://prashannabajracharya.com/gallery_images/9.webp",
  "https://prashannabajracharya.com/gallery_images/10.webp",
  "https://prashannabajracharya.com/gallery_images/11.webp",
  "https://prashannabajracharya.com/gallery_images/12.webp",
  "https://prashannabajracharya.com/gallery_images/13.webp",
  "https://prashannabajracharya.com/gallery_images/14.webp",
];


const HeroSection = () => {
  const navigate = useNavigate();

  const handleMoreWorksClick = () => {
    navigate('/works'); // Navigate to the Works page
  };
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source
            src="https://ik.imagekit.io/ahxkv7awkb/Showreel%20final%20(2).mp4?updatedAt=1755358952285"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        {/* Optional overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>


      {/* More Works Button */}
      <div className="relative z-10 mt-[34rem]">
        <button
          onClick={handleMoreWorksClick}
          className="px-6 py-3 border-2 border-white text-white font-semibold rounded-full hover:border-white-200 hover:text-gray-200 transition duration-300"
          style={{ fontFamily: 'Helvetica Neue' }}
        >
          MORE WORKS
        </button>
      </div>
    </section>
  );
};

const CounterAnimation = ({ end, label }: { end: number; label: string }) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      className="text-center"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
    >
      <div
        className="text-portfolio-dark-green font-regular text-6xl lg:text-8xl mb-2"
        style={{ fontFamily: "Staatliches" }}
      >
        {inView && <CountUp start={0} end={end} duration={2} />}+
      </div>
      <div
        className="text-gray-500 text-xl lg:text-2xl"
        style={{ fontFamily: "Staatliches" }}
      >
        {label}
      </div>
    </motion.div>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="bg-white relative overflow-hidden">
      {/* Content with padding */}
      <div className="pt-12">
        <div className="max-w-8xl mx-auto px-4 sm:px-8 md:px-16 lg:px-31">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-15 items-start">
            {/* Left column - Text content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="py-12 pl-4 sm:pl-8 md:pl-20 lg:pl-30"
            >
              <h3
                className="text-portfolio-dark-green font-medium text-3xl sm:text-4xl lg:text-6xl mb-8"
                style={{
                  fontFamily: "Staatliches",
                  fontSize: "clamp(58px, 8vw, 96px)",
                  wordSpacing: "0.3em",
                  lineHeight: 1.1, // 👈 tighter line height
                }}
              >
                PRASHANNA BAJRACHARYA
              </h3>
              <h1
                className="text-portfolio-brown-red font-medium mb-8 mt-2"
                style={{
                  fontSize: "1.3rem",
                  fontFamily: '"Helvetica Neue", Arial, sans-serif',
                }}
              >
                PRODUCER | DIRECTOR | PHOTOGRAPHER | EDITOR
              </h1>
              <div
                style={{ display: "flex", flexDirection: "column", gap: 12 }}
                className="pb-6"
              >
                <p
                  className="text-gray-800 leading-relaxed tracking-wider"
                  style={{
                    fontSize: "clamp(21px, 1.2vw, 34px)",
                    fontFamily: '"Helvetica Neue", Arial, sans-serif',
                    letterSpacing: "0.05em",
                  }}
                >
                  Prashanna Bajracharya is a dynamic visual storyteller and
                  creative entrepreneur based in Kathmandu, Nepal.
                </p>

                <p
                  className="text-gray-800 leading-relaxed tracking-wide"
                  style={{
                    fontSize: "clamp(21px, 1.2vw, 30px)",
                    fontFamily: '"Helvetica Neue", Arial, sans-serif',
                  }}
                >
                  A self-taught photographer and filmmaker, he has collaborated
                  with over 30 diverse brands, bringing narratives to life
                  through brand campaigns, documentaries, editorial projects,
                  and event coverage. With a keen eye for detail and a deep
                  passion for storytelling, his work seamlessly blends artistry
                  and impact.
                </p>

                <p
                  className="text-gray-800 leading-relaxed tracking-wide"
                  style={{
                    fontSize: "clamp(21px, 1.2vw, 30px)",
                    fontFamily: '"Helvetica Neue", Arial, sans-serif',
                  }}
                >
                  In 2021, he co-founded{" "}
                  <a
                    href="https://www.instagram.com/untitled.np?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text hover:underline font-bold"
                  >
                    untitled.np
                  </a>
                  , an emerging production and storytelling company dedicated to
                  reshaping visual narratives in Nepal. Built on collaboration
                  and innovation,{" "}
                  <a
                    href="https://www.instagram.com/untitled.np?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text hover:underline font-bold"
                  >
                    untitled.np
                  </a>{" "}
                  aims to push creative boundaries and transform the country's
                  media landscape.
                </p>

                <p
                  className="text-gray-800 leading-relaxed tracking-wide"
                  style={{
                    fontSize: "clamp(21px, 1.2vw, 30px)",
                    fontFamily: '"Helvetica Neue", Arial, sans-serif',
                  }}
                >
                  <a
                    href="https://www.instagram.com/untitled.np?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text hover:underline font-bold"
                  >
                    untitled.np
                  </a>{" "}
                  is not just a company, they are a collective of filmaholic and
                  visual craftsmen dedicated to shaping brand narratives through
                  artistry and innovation. The name reflects their refusal to be
                  confined by labels; instead, we focus on engineering visuals
                  that resonate, inspire, and elevate. At their core lies a
                  collaborative ethos; Unite diverse creative minds to deliver
                  tailored solutions that align with a brand's heartbeat.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-16">
                <CounterAnimation end={6} label="Years Experience" />
                <CounterAnimation end={69} label="Happy Clients" />
              </div>
            </motion.div>

            {/* Right column - Image that extends to bottom */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative lg:h-full"
            >
              {/* Image container that extends beyond the padded area */}
              <div className="lg:absolute lg:inset-0 lg:flex lg:items-end">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/a1713fc3a7af5a183f21190184819cb26c784935?width=1739"
                  alt="Prashanna Bajracharya"
                  className="w-full h-auto lg:h-full lg:object-cover lg:object-top rounded-lg lg:rounded-none"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const TrustedBySection = () => {
  const greenLogos = [
    {
      src: "https://res.cloudinary.com/dzign6pg0/image/upload/v1753335646/image_11_ltvxgb.png",
      alt: "Pepsi Green",
    },
    {
      src: "https://res.cloudinary.com/dzign6pg0/image/upload/v1753335646/image_12_tqzwry.png",
      alt: "Skoda Green",
    },
    {
      src: "https://res.cloudinary.com/dzign6pg0/image/upload/v1753677717/tedx_pibuc5.png",
      alt: "TEDx Green",
    },
    {
      src: "https://res.cloudinary.com/dzign6pg0/image/upload/v1753335647/image_14_a6saxg.png",
      alt: "Tuborg Green",
    },
    {
      src: "https://res.cloudinary.com/dzign6pg0/image/upload/v1753335647/image_15_lcfn07.png",
      alt: "Adidas Green",
    },
    {
      src: "https://res.cloudinary.com/dzign6pg0/image/upload/v1753335648/image_16_g2eqd8.png",
      alt: "Unilever Green",
    },
    {
      src: "https://res.cloudinary.com/dzign6pg0/image/upload/v1753335649/image_17_zcenzx.png",
      alt: "Champions League Green",
    },
    {
      src: "https://res.cloudinary.com/dzign6pg0/image/upload/v1753335649/image_18_acxlef.png",
      alt: "Coke Logo Green",
    },
  ];

  // Create a duplicated array for seamless infinite scroll
  const duplicatedLogos = [...greenLogos, ...greenLogos];

  // Calculate the actual width needed for smooth infinite scroll
  const logoWidth = 160; // Approximate width including gaps (128px + 32px gap)
  const totalWidth = greenLogos.length * logoWidth;

  return (
    <section
      className="py-20  overflow-hidden"
      style={{ backgroundColor: "#F0F0F0" }}
    >
      <div className="max-w-7xl mx-auto px-8 text-center">
        <motion.h2
          style={{
            fontFamily: "Staatliches",
            fontSize: "clamp(58px, 8vw, 76px)",
          }}
          className="text-4xl lg:text-6xl mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          TRUSTED BY
        </motion.h2>

        <div className="relative">
          <div className="overflow-hidden">
            <motion.div
              className="flex items-center gap-8 md:gap-12 lg:gap-16 mt-4"
              animate={{
                x: [0, -totalWidth],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              }}
              style={{
                width: `${totalWidth * 2}px`,
              }}
            >
              {duplicatedLogos.map((logo, index) => (
                <motion.div
                  key={index}
                  className="flex items-center justify-center flex-shrink-0"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="w-32 h-32 md:w-28 md:h-28 lg:w-32 lg:h-32 object-contain"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Gradient overlays for smooth fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-lightGray to-transparent pointer-events-none z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-lightGray to-transparent pointer-events-none z-10"></div>
        </div>
      </div>
    </section>
  );
};
const CommercialSection = () => {
  const extractVideoId = (url) => {
    const patterns = [
      /(?:youtube\.com\/watch\?v=)([^&\n?#]+)/,
      /(?:youtu\.be\/)([^&\n?#]+)/,
      /(?:youtube\.com\/embed\/)([^&\n?#]+)/,
      /facebook\.com\/.*\/videos\/(\d+)/,
    ];

    for (const pattern of patterns) {
      const match = url.match(pattern);
      if (match) {
        return match[1].split("?")[0];
      }
    }
    return null;
  };

  const allCommercialVideos = [
    {
      url: "https://youtu.be/tI--w9k7P0g",
      id: extractVideoId("https://youtu.be/tI--w9k7P0g"),
      platform: "youtube",
    },
    {
      url: "https://youtu.be/AlRhi6xPrHc",
      id: extractVideoId("https://youtu.be/AlRhi6xPrHc"),
      platform: "youtube",
    },
    {
      url: "https://youtu.be/uzTDHZ4qpeY",
      id: extractVideoId("https://youtu.be/uzTDHZ4qpeY"),
      platform: "youtube",
    },
    {
      url: "https://www.youtube.com/watch?v=S7DRJNuYrhs",
      id: extractVideoId("https://www.youtube.com/watch?v=S7DRJNuYrhs"),
      platform: "youtube",
    },
    {
      url: "https://youtu.be/1zX82HUC3MQ?si=i09C23fcWMWN-m_Z",
      id: extractVideoId("https://youtu.be/1zX82HUC3MQ?si=i09C23fcWMWN-m_Z"),
      platform: "youtube",
    },

    {
      url: "https://youtu.be/pjCOsZZPB3c",
      id: extractVideoId("https://youtu.be/pjCOsZZPB3c"),
      platform: "youtube",
    },
    {
      url: "https://youtu.be/ZmxUV8x5Bt4",
      id: extractVideoId("https://youtu.be/ZmxUV8x5Bt4"),
      platform: "youtube",
    },
    {
      url: "https://www.youtube.com/watch?v=81D9H2Z3Vcw",
      id: extractVideoId("https://www.youtube.com/watch?v=81D9H2Z3Vcw"),
      platform: "youtube",
    },
    {
      url: "https://www.youtube.com/watch?v=y7BtAkW5LKA",
      id: extractVideoId("https://www.youtube.com/watch?v=y7BtAkW5LKA"),
      platform: "youtube",
    },
    {
      url: "https://www.youtube.com/watch?v=kexCWZSRx7Q",
      id: extractVideoId("https://www.youtube.com/watch?v=kexCWZSRx7Q"),
      platform: "youtube",
    },
    {
      url: "https://www.youtube.com/watch?v=Nylgt4CtsKo",
      id: extractVideoId("https://www.youtube.com/watch?v=Nylgt4CtsKo"),
      title: "Commercial 13",
      platform: "youtube",
    },
    {
      url: "https://www.youtube.com/watch?v=IUigcSW0lfo&list=PLN88_j1xLvkU6PyWd_CD7TZEFeIzJsS8T",
      id: extractVideoId(
        "https://www.youtube.com/watch?v=IUigcSW0lfo&list=PLN88_j1xLvkU6PyWd_CD7TZEFeIzJsS8T",
      ),
      platform: "youtube",
    },
    {
      url: "https://www.youtube.com/watch?v=D5PdEPD6O14",
      id: extractVideoId("https://www.youtube.com/watch?v=D5PdEPD6O14"),
      platform: "youtube",
    },
    {
      url: "https://youtu.be/NOqkE2YJtkY?si=DAz3MhArAbVKFZDb",
      id: extractVideoId("https://youtu.be/NOqkE2YJtkY?si=DAz3MhArAbVKFZDb"),
      platform: "youtube",
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [thumbnailStartIndex, setThumbnailStartIndex] = useState(0);
  const [hasNextBeenPressed, setHasNextBeenPressed] = useState(false);
  const [thumbnailsPerPage, setThumbnailsPerPage] = useState(
    getThumbnailsPerPage(window.innerWidth),
  );
  const [videoTitles, setVideoTitles] = useState({});

  // Function to fetch YouTube video title
  const fetchYouTubeTitle = async (videoId) => {
    try {
      const response = await fetch(
        `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${videoId}&format=json`,
      );
      const data = await response.json();
      return data.title;
    } catch (error) {
      console.error("Error fetching video title:", error);
      return null;
    }
  };

  // Fetch titles for all videos when component mounts
  useEffect(() => {
    const fetchAllTitles = async () => {
      const titles = {};
      for (const video of allCommercialVideos) {
        const title = await fetchYouTubeTitle(video.id);
        if (title) {
          titles[video.id] = title;
        }
      }
      setVideoTitles(titles);
    };

    fetchAllTitles();
  }, []);

  // In your JSX, use the fetched title or fallback to your custom title:
  const getDisplayTitle = (video) => {
    return videoTitles[video.id] || video.title;
  };

  function getThumbnailsPerPage(width) {
    return width < 768 ? 4 : 8;
  }

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setThumbnailsPerPage(getThumbnailsPerPage(width));
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNext = () => {
    setHasNextBeenPressed(true);
    setThumbnailStartIndex((prev) => {
      const nextIndex = prev + thumbnailsPerPage;
      // If nextIndex would go beyond the array, reset to 0
      // But only if there are actually more videos to show from the beginning
      if (nextIndex >= allCommercialVideos.length) {
        return 0;
      }
      return nextIndex;
    });
  };

  const handlePrevious = () => {
    setThumbnailStartIndex((prev) => {
      const prevIndex = prev - thumbnailsPerPage;
      if (prevIndex < 0) {
        // Go to the last possible starting index that shows remaining videos
        const lastPageStartIndex =
          Math.floor((allCommercialVideos.length - 1) / thumbnailsPerPage) *
          thumbnailsPerPage;
        return lastPageStartIndex;
      }
      return prevIndex;
    });
  };

  const openModal = (video) => {
    setSelectedVideo(video);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedVideo(null);
  };

  const getEmbedUrl = (video) => {
    if (video.platform === "youtube") {
      return `https://www.youtube.com/embed/${video.id}?autoplay=1&mute=0&controls=1&modestbranding=1&rel=0`;
    } else if (video.platform === "facebook") {
      return `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(video.url)}&show_text=false&width=560&height=315&autoplay=true`;
    }
    return "";
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") closeModal();
    };
    if (isModalOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  return (
    <>
      <section id="works" className="py-20 bg-white">
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
            Commercials
          </motion.h2>

          {/* Responsive Grid */}
          <motion.div
            className={`mb-8 gap-4 
            scrollbar-hide
    flex overflow-x-auto md:overflow-visible 
    md:grid md:grid-cols-2 lg:grid-cols-4 
    ${allCommercialVideos.length >= 4 ? "md:grid-rows-2" : ""}
    snap-x snap-mandatory
  `}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {allCommercialVideos
              .slice(
                thumbnailStartIndex,
                thumbnailStartIndex + thumbnailsPerPage,
              )
              .map((video, index) => (
                <motion.div
                  key={index}
                  className="relative h-48 lg:h-56 w-[100vw] md:w-auto flex-shrink-0 bg-gray-200 overflow-hidden cursor-pointer group rounded-lg shadow-lg snap-start"
                  onClick={() => openModal(video)}
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                    alt={getDisplayTitle(video)}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback to medium quality if high quality fails
                      e.target.src = `https://img.youtube.com/vi/${video.id}/mqdefault.jpg`;
                    }}
                  />

                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex flex-col items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-3 py-2 border-white rounded-sm backdrop-blur-sm">
                      <h3
                        className="text-white font-semibold text-center tracking-wide whitespace-normal break-words px-2"
                        style={{
                          fontFamily: "Staatliches",
                          fontSize: "22px",
                          color: "white",
                          maxWidth: "90%", // Optional: restrict width for wrapping
                        }}
                      >
                        {getDisplayTitle(video)}
                      </h3>

                    </div>
                  </div>
                </motion.div>
              ))}
          </motion.div>

          {/* Navigation */}
          {allCommercialVideos.length > thumbnailsPerPage && (
            <motion.div
              className="hidden md:flex justify-between items-center mb-0"
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

      {/* Modal */}
      {isModalOpen && selectedVideo && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <motion.div
            className="relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <button
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black bg-opacity-50 hover:bg-opacity-75 rounded-full flex items-center justify-center text-white transition-all duration-200"
              onClick={closeModal}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <iframe
              src={getEmbedUrl(selectedVideo)}
              title={selectedVideo.title}
              className="w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </motion.div>
        </div>
      )}
    </>
  );
};

const PhotoGallery = ({
  openModal,
}: {
  openModal: (src: string, alt: string) => void;
}) => {
  return (
    <section className="pt-0 bg-white overflow-hidden">
      {/* Keep max-width only for the title */}

      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <motion.h2
          className="text-portfolio-dark-green font-medium text-3xl sm:text-4xl lg:text-6xl mb-8 sm:mb-16 text-center"
          style={{
            fontFamily: "Staatliches",
            fontSize: "clamp(58px, 8vw, 76px)",
            lineHeight: 1.1, // 👈 tighter line height
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Photos / Brand Key Visuals
        </motion.h2>
      </div>

      {/* Full-width scroll containers */}
      <div className="w-full px-4 sm:px-8 lg:px-[5rem]">
        {/* Mobile: Show only one row */}
        <div className="block sm:hidden">
          <InfiniteScrollRow
            images={galleryImages}
            direction="ltr"
            openModal={openModal}
            isMobile={true}
          />
        </div>

        {/* Desktop: Show both rows */}
        <div className="hidden sm:block">
          <InfiniteScrollRow
            images={galleryImages.slice(0, Math.ceil(galleryImages.length / 2))}
            direction="ltr"
            openModal={openModal}
            isMobile={false}
          />
          <InfiniteScrollRow
            images={galleryImages.slice(Math.ceil(galleryImages.length / 2))}
            direction="rtl"
            openModal={openModal}
            isMobile={false}
          />
        </div>
      </div>
    </section>
  );
};


const BrandsAndArtistsSection = () => {
  // Consolidated logo data with special sizing rules
  const logoData = [
    // Row 1
    [
      {
        src: "https://prashannabajracharya.com/logos/Pepsi_mjk1q3.webp",
        alt: "Pepsi",
        customSize: "w-16 h-16", // Reduced size
      },
      {
        src: "https://prashannabajracharya.com/logos/Adidas_ihp4iy.webp",
        alt: "Adidas",
      },
      {
        src: "https://prashannabajracharya.com/logos/Chanpions_League_q1mnrh.webp",
        alt: "Champions League",
      },
      // {
      //   src: "https://res.cloudinary.com/dzign6pg0/image/upload/v1752211344/Unilever_xzfmm9.png",
      //   alt: "Unilever",
      // },
      {
        src: "https://prashannabajracharya.com/logos/Tedx_ljvgef.webp",
        alt: "TEDx",
      },
      {
        src: "https://prashannabajracharya.com/logos/Coca_Cola_l4ce9a.webp",
        alt: "Coca Cola",
      },
      {
        src: "https://prashannabajracharya.com/logos/Expo_City_Dubai_qptndz.webp",
        alt: "Expo City Dubai",
      },
      {
        src: "https://prashannabajracharya.com/logos/Yale_University_mgk88h.webp",
        alt: "Yale University",
        customSize: "w-30 h-32", // Increased size
      },
    ],
    [
      {
        src: "https://prashannabajracharya.com/logos/Lolla_India_sc2oxo.webp",
        alt: "Lollapaloza",
        customSize: "w-28 h-32", // Increased size
      },
      {
        src: "https://prashannabajracharya.com/logos/titan.webp",
        alt: "Titan",
      },

      {
        src: "https://prashannabajracharya.com/logos/Tuborg_iafgye.webp",
        alt: "Tuborg",
      },
      {
        src: "https://prashannabajracharya.com/logos/Samsung_qc4q9b.webp",
        alt: "Samsung",
      },
      {
        src: "https://prashannabajracharya.com/logos/SOS_uazsnq.webp",
        alt: "SOS",
      },
      {
        src: "https://prashannabajracharya.com/logos/Skoda_lgpmzg.webp",
        alt: "Skoda",
      },
    ],
    // Row 2
    [
      {
        src: "https://prashannabajracharya.com/logos/Yamaha_jovsop.webp",
        alt: "Yamaha",
      },
      {
        src: "https://prashannabajracharya.com/logos/Changan_wk0gzr.webp",
        alt: "Changan",
      },
      {
        src: "https://prashannabajracharya.com/logos/Foton_bbyiyb.webp",
        alt: "Foton",
      },
      {
        src: "https://prashannabajracharya.com/logos/Seres_odqyyp.webp",
        alt: "Seres",
      },
      {
        src: "https://prashannabajracharya.com/logos/Niu_ifpxku.webp",
        alt: "Niu",
      },
      {
        src: "https://prashannabajracharya.com/logos/believe.webp",
        alt: "Believe",
      },
    ],
    // Row 3
    [
      {
        src: "https://prashannabajracharya.com/logos/Nepal_Tourism_Board_sgefpx.webp",
        alt: "Nepal Tourism Board",
      },
      {
        src: "https://prashannabajracharya.com/logos/KMG_z5smgs.webp",
        alt: "KMG",
        customSize: "w-16 h-16", // Reduced size
      },
      {
        src: "https://res.cloudinary.com/dzign6pg0/image/upload/v1753592854/MOuntain_i1uokl.webp",
        alt: "Mountain Lodge of Nepal",
      },
      {
        src: "https://prashannabajracharya.com/logos/Gorkha_Brewery_a0xs61.webp",
        alt: "Gorkha Brewery",
        customSize: "w-32 h-32", // Increased size
      },

      {
        src: "https://prashannabajracharya.com/logos/Ruslan_sa4aoz.webp",
        alt: "Ruslan",
      },
      {
        src: "https://prashannabajracharya.com/logos/Metal_for_nepal_lxuugv.webp",
        alt: "Metal for Nepal",
      },
      {
        src: "https://prashannabajracharya.com/logos/Khalti_tquumc.webp",
        alt: "Khalti",
      },
    ],
    [
      {
        src: "https://prashannabajracharya.com/logos/DAV_fjxice.webp",
        alt: "DAV",
        customSize: "w-16 h-16", // Reduced size
      },

      {
        src: "https://prashannabajracharya.com/logos/Crossfire_ta6avf.webp",
        alt: "Crossfire",
        customSize: "w-32 h-32", // Increased size
      },
      {
        src: "https://prashannabajracharya.com/logos/Yatri_hfjq2j.webp",
        alt: "Yatri",
      },
      {
        src: "https://prashannabajracharya.com/logos/janakput.webp",
        alt: "Janakpur Bolts",
      },
    ],
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const logoVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const LogoGrid = ({ logos, rowIndex, isLastRow }) => (
    <motion.div
      className={`flex justify-center items-center gap-10 lg:gap-20 flex-wrap ${
        isLastRow ? "" : "mb-12"
      }`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.8, delay: 0.4 + rowIndex * 0.2 }}
      viewport={{ once: true }}
    >
      {logos.map((logo, index) => (
        <motion.div
          key={`${logo.alt}-${index}`}
          className="flex items-center justify-center"
          variants={logoVariants}
          transition={{ duration: 0.3, delay: 0.1 + index * 0.1 }}
          whileHover={{ scale: 1.2 }}
        >
          <img
            src={logo.src}
            alt={logo.alt}
            className={`${logo.customSize || "w-24 h-24"} object-contain`}
            loading="lazy"
          />
        </motion.div>
      ))}
    </motion.div>
  );

  return (
    <section
      className=""
      style={{
        background: "linear-gradient(to bottom, white 132px, black 132px)",
      }}
    >
      <div className="max-w-full">
        {/* Title */}
        <motion.h2
          className="text-4xl lg:text-6xl mb-16 text-center"
          style={{
            fontFamily: "Staatliches",
            fontSize: "clamp(58px, 8vw, 76px)",
          }}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          BRANDS & ARTISTS
        </motion.h2>

        {/* Black background section */}
        <div className="bg-black px-8 lg:px-20 py-20">
          <div className="max-w-6xl mx-auto">
            {logoData.map((row, rowIndex) => (
              <LogoGrid
                key={rowIndex}
                logos={row}
                rowIndex={rowIndex}
                isLastRow={rowIndex == logoData.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
const ArtistNamesSection = () => {
  // Organized artist names by rows with alternating colors
  const artistRows = [
    [
      { name: "Alok", color: "text-black" },
      { name: "Arijit\nSingh", color: "text-gray-500" },
      { name: "Aastha\nGill", color: "text-black" },

      { name: "Anuv\nJain", color: "text-gray-500" },

      { name: "Atif\nAslam", color: "text-black" },
      { name: "Clean\nBandit", color: "text-gray-500" },
    ],
    [
      { name: "Diplo", color: "text-black" },
      { name: "Diljit\nDosanjh", color: "text-gray-500" },
      { name: "Divine", color: "text-black" },
      { name: "Green\nDay", color: "text-gray-500" },
      { name: "King", color: "text-black" },
      { name: "Keep\n Hush", color: "text-gray-500" },
      { name: "Lollapalooza\nIndia", color: "text-black" },
      { name: "Louis\nTomlinson", color: "text-gray-500" },

      // { name: "Sajjan Raj Vaidya", color: "text-black" },
    ],
    [
      { name: "Manu\nChao", color: "text-gray-500" },
      { name: "Maroon\n5", color: "text-black" },
      { name: "Martin\nGarrix", color: "text-gray-500" },
      { name: "Prateek\nKuhad", color: "text-black" },
      { name: "Rishab Rikhiram\nSharma", color: "text-gray-500" },
      { name: "Shawn\nMendes", color: "text-black" },
      { name: "Neetesh\nJung Kunwar", color: "text-gray-500" },
    ],
    [
      { name: "Arthur\nGun", color: "text-black" },
      { name: "Sajjan Raj\n Vaidya", color: "text-gray-500" },
      { name: "Satish\n Ghalan", color: "text-black" },
      { name: "Sushant\nKC", color: "text-gray-500" },
      { name: "1974AD", color: "text-black" },
      { name: "555", color: "text-gray-500" },
      { name: "Yabesh Thapa", color: "text-black" },
    ],
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-8">
        <div className="space-y-9">
          {artistRows.map((row, rowIndex) => (
            <motion.div
              key={rowIndex}
              className="flex justify-center items-center gap-6 lg:gap-12 flex-wrap"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: rowIndex * 0.2 }}
              viewport={{ once: true }}
            >
              {row.map((artist, index) => (
                <motion.div
                  key={`${rowIndex}-${index}`}
                  className={`text-lg text-center whitespace-pre-line ${artist.color}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  style={{ fontFamily: "Staatliches", fontSize: "24px" }}
                  transition={{
                    duration: 0.6,
                    delay: rowIndex * 0.2 + index * 0.05,
                  }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  {artist.name}
                </motion.div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default function Index() {
  const { isOpen, currentImage, openModal, closeModal } = useImageModal();

  return (
    <div className="bg-white">
      <HeroSection />
      <AboutSection />
      <TrustedBySection />
      <VideoGallery title="Commercials" videos={COMMERCIAL_VIDEOS} sectionId="commercials" />
      <PhotoGallery openModal={openModal} />
      <VideoGallery title="AFTER MOVIES" videos={AFTER_MOVIE_VIDEOS} sectionId="after-movies" />
      <BrandsAndArtistsSection />
      <ArtistNamesSection />
      {/*<Footer />*/}

      <ImageModal
        isOpen={isOpen}
        onClose={closeModal}
        src={currentImage.src}
        alt={currentImage.alt}
      />
    </div>
  );
}
const InfiniteScrollRow = ({
  images,
  direction,
  openModal,
  isMobile = false,
}: {
  images: string[];
  direction: "ltr" | "rtl";
  openModal: (src: string, alt: string) => void;
  isMobile?: boolean;
}) => {
  const [orientations, setOrientations] = useState<{
    [key: number]: "portrait" | "landscape";
  }>({});

  useEffect(() => {
    images.forEach((img, index) => {
      const image = new Image();
      image.src = img;
      image.onload = () => {
        const orientation =
          image.naturalHeight > image.naturalWidth ? "portrait" : "landscape";
        setOrientations((prev) => ({ ...prev, [index]: orientation }));
      };
    });
  }, [images]);

  const animationClass =
    direction === "ltr" ? "animate-scrollLtr" : "animate-scrollRtl";

  // Function to get image size based on index pattern
  const getImageSize = (index: number) => {
    if (isMobile) {
      return "w-80 h-80 sm:w-40 sm:h-40";
    }

    // Desktop: existing pattern
    const pattern = index % 3;
    if (pattern === 0) {
      return "w-60 h-60 md:w-80 md:h-60 lg:w-[40rem] lg:h-80";
    } else {
      return "w-48 h-48 md:w-60 md:h-60 lg:w-60 lg:h-80";
    }
  };

  return (
    <div className="overflow-hidden mb-2 w-full">
      <div
        className={`flex ${animationClass} pause-on-hover`}
        style={{ width: "max-content" }}
      >
        {[...images, ...images, ...images, ...images, ...images].map(
          (img, i) => (
            <img
              key={i}
              src={img}
              loading={"lazy"}
              alt={`Photo ${i % images.length}`}
              className={`${getImageSize(i)} ${orientations[i % images.length] === "portrait" ? "object-contain" : "object-cover"} mr-2 cursor-pointer flex-shrink-0 rounded-sm bg-black`}
              onClick={() => openModal(img, `Photo ${i % images.length}`)}
            />
          ),
        )}
      </div>
    </div>
  );
};
