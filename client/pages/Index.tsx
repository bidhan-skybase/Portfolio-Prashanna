import { AnimatePresence, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React, { useCallback, useEffect, useState } from "react";
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
  "https://prashannabajracharya.com/gallery_images/15.webp",
  "https://prashannabajracharya.com/gallery_images/16.webp",
  "https://prashannabajracharya.com/gallery_images/17.webp",
  "https://prashannabajracharya.com/gallery_images/18.webp",
  "https://prashannabajracharya.com/gallery_images/19.webp",
  "https://prashannabajracharya.com/gallery_images/20.webp",
  "https://prashannabajracharya.com/gallery_images/21.webp",
  "https://prashannabajracharya.com/gallery_images/22.webp",
  "https://prashannabajracharya.com/gallery_images/23.webp",
  "https://prashannabajracharya.com/gallery_images/24.webp",
  "https://prashannabajracharya.com/gallery_images/25.webp",
  "https://prashannabajracharya.com/gallery_images/26.webp",
  "https://prashannabajracharya.com/gallery_images/27.webp",
  "https://prashannabajracharya.com/gallery_images/28.webp",
  "https://prashannabajracharya.com/gallery_images/29.webp",
  "https://prashannabajracharya.com/gallery_images/30.webp",
];



const HeroSection = () => {
  const navigate = useNavigate();
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const handleMoreWorksClick = () => {
    navigate("/works");
  };

  const videoId = "400OvNpY0FY";

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* 1. Static Placeholder - Shows immediately */}
      <div
        className={`absolute inset-0 z-0 bg-cover bg-center transition-opacity duration-1000 ${isVideoLoaded ? 'opacity-0' : 'opacity-100'
          }`}
        style={{
          backgroundImage: `url('https://img.youtube.com/vi/${videoId}/maxresdefault.jpg')`
        }}
      />

      {/* 2. YouTube Video Background */}
      <div className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${isVideoLoaded ? 'opacity-100' : 'opacity-0'
        }`}>
        <iframe
          className="absolute top-1/2 left-1/2 w-[177.78vh] min-w-full h-[56.25vw] min-h-full -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&enablejsapi=1`}
          allow="autoplay; fullscreen"
          onLoad={() => setIsVideoLoaded(true)}
        />
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* 3. Hero Content */}
      <div className="relative z-10 mt-[34rem]">
        <button
          onClick={handleMoreWorksClick}
          className="px-6 py-3 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-black transition duration-300"
          style={{ fontFamily: "Helvetica Neue" }}
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
                className="text-portfolio-dark-green font-medium text-3xl sm:text-4xl lg:text-6xl mb-4"
                style={{
                  fontFamily: "Staatliches",
                  fontSize: "clamp(58px, 8vw, 96px)",
                  wordSpacing: "0.3em",
                  lineHeight: 1, // 👈 tighter line height
                }}
              >
                PRASHANNA BAJRACHARYA
              </h3>
              <h1
                className="text-portfolio-brown-red font-medium mb-4 mt-0"
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
                  Prashanna Bajracharya is a self-taught photographer,
                  filmmaker, and creative entrepreneur from Kathmandu. He has
                  worked with 150+ brands on campaigns, documentaries,
                  editorials, and events blending artistry with impact. Beyond
                  commercial work, he is deeply immersed in music festival
                  photography and videography, capturing the raw energy of live
                  performances and turning moments into lasting visual
                  experiences.
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
                  , a collective of visual storytellers redefining Nepal’s media
                  landscape. Built on collaboration and innovation, they craft
                  visuals that inspire, resonate, and elevate brands beyond
                  labels.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-16">
                <CounterAnimation end={6} label="Years Experience" />
                <CounterAnimation end={100} label="Projects" />
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
      src: "https://prashannabajracharya.com/trusted/image_11_ltvxgb.webp",
      alt: "Pepsi Green",
    },
    {
      src: "https://prashannabajracharya.com/trusted/image_12_tqzwry.webp",
      alt: "Skoda Green",
    },
    {
      src: "https://prashannabajracharya.com/logos/tedx-green.png",
      alt: "TEDx Green",
    },
    {
      src: "https://prashannabajracharya.com/trusted/image_14_a6saxg.webp",
      alt: "Tuborg Green",
    },
    {
      src: "https://prashannabajracharya.com/trusted/image_15_lcfn07.webp",
      alt: "Adidas Green",
    },
    {
      src: "https://prashannabajracharya.com/trusted/image_16_g2eqd8.webp",
      alt: "Unilever Green",
    },
    {
      src: "https://prashannabajracharya.com/trusted/image_17_zcenzx.webp",
      alt: "Champions League Green",
    },
    {
      src: "https://prashannabajracharya.com/trusted/image_18_acxlef.webp",
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
          TRUSTED BY GLOBAL BRANDS
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

const PhotoGallery = ({
  openModal,
}: {
  openModal: (imageArray: string[], index: number) => void;
}) => {
  // Helper function to handle modal opening
  const handleOpenModal = (src: string, alt: string) => {
    const imageIndex = galleryImages.findIndex((img) => img === src);
    openModal(galleryImages, imageIndex);
  };

  return (
    <section className="pt-0 bg-white overflow-hidden">
      {/* Keep max-width only for the title */}

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
        PHOTOS / BRANDS VISUALS
      </motion.h2>

      {/* Full-width scroll containers */}
      <div className="w-full px-4 sm:px-8 lg:px-[5rem]">
        {/* Mobile: Show only one row */}
        <div className="block sm:hidden">
          <InfiniteScrollRow
            images={galleryImages}
            direction="ltr"
            openModal={handleOpenModal}
            isMobile={true}
          />
        </div>

        {/* Desktop: Show both rows */}
        <div className="hidden sm:block">
          <InfiniteScrollRow
            images={galleryImages.slice(0, Math.ceil(galleryImages.length / 2))}
            direction="ltr"
            openModal={handleOpenModal}
            isMobile={false}
          />
          <InfiniteScrollRow
            images={galleryImages.slice(Math.ceil(galleryImages.length / 2))}
            direction="rtl"
            openModal={handleOpenModal}
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
        src: "https://prashannabajracharya.com/logos/pepsi bw.webp",
        hoverSrc: "https://prashannabajracharya.com/logos/pepsi c.webp",
        alt: "Pepsi",
        customSize: "w-16 h-16", // Reduced size
      },
      {
        src: "https://prashannabajracharya.com/logos/coke bnw.webp",
        hoverSrc: "https://prashannabajracharya.com/logos/coko color.webp",
        alt: "Coca Cola",
      },
      {
        src: "https://prashannabajracharya.com/logos/adidas bw.webp",
        hoverSrc: "https://prashannabajracharya.com/logos/adidas c.webp",
        alt: "Adidas",
        customSize: "w-18 h-20", // Reduced size
      },
      {
        src: "https://prashannabajracharya.com/logos/Ueaf bnw.webp",
        hoverSrc: "https://prashannabajracharya.com/logos/uefa-c.webp",
        alt: "Champions League",
        customSize: "w-20 h-20", // Reduced size
      },
      {
        src: "https://prashannabajracharya.com/logos/tedx bw.webp",
        hoverSrc: "https://prashannabajracharya.com/logos/tedx c.webp",
        alt: "TEDx",
      },

      {
        src: "https://prashannabajracharya.com/logos/expo bw.webp",
        hoverSrc: "https://prashannabajracharya.com/logos/expo c.webp",
        alt: "Expo City Dubai",
      },
      {
        src: "https://prashannabajracharya.com/logos/yale bw.webp",
        hoverSrc: "https://prashannabajracharya.com/logos/yale c.webp",
        alt: "Yale University",
        customSize: "w-30 h-32", // Increased size
      },
    ],
    [
      {
        src: "https://prashannabajracharya.com/logos/Unilever bw.webp",
        hoverSrc: "https://prashannabajracharya.com/logos/Unilever c.webp",
        alt: "Unilever",
      },
      {
        src: "https://prashannabajracharya.com/logos/samsung bw.webp",
        hoverSrc: "https://prashannabajracharya.com/logos/samsung c.webp",
        alt: "Samsung",
      },

      {
        src: "https://prashannabajracharya.com/logos/tuborg bnw.webp",
        hoverSrc: "https://prashannabajracharya.com/logos/tuborg c.webp",
        alt: "Tuborg",
      },
      {
        src: "https://prashannabajracharya.com/logos/coke_bw.png",
        hoverSrc: "https://prashannabajracharya.com/logos/coke.png",
        alt: "Coke Studio",
        customSize: "w-16 h-16",
      },
      {
        src: "https://prashannabajracharya.com/logos/Lolla bw.webp",
        hoverSrc: "https://prashannabajracharya.com/logos/lolla c.webp",
        alt: "Lollapaloza",
        customSize: "w-28 h-32", // Increased size
      },
      {
        src: "https://prashannabajracharya.com/logos/titan bw.webp",
        hoverSrc: "https://prashannabajracharya.com/logos/titan c.webp",
        alt: "Titan",
      },

      {
        src: "https://prashannabajracharya.com/logos/sios bw.webp",
        hoverSrc: "https://prashannabajracharya.com/logos/sios c.webp",
        alt: "SOS",
      },
    ],
    // Row 2
    [

      {
        src: "https://prashannabajracharya.com/logos/skoda bnw.webp",
        hoverSrc: "https://prashannabajracharya.com/logos/skoda color.webp",
        alt: "Skoda",
      },
      {
        src: "https://prashannabajracharya.com/logos/yamaha bw.webp",
        hoverSrc: "https://prashannabajracharya.com/logos/yamaha c.webp",
        alt: "Yamaha",
      },
      {
        src: "https://prashannabajracharya.com/logos/Changan bnw.webp",
        hoverSrc: "https://prashannabajracharya.com/logos/Changan c.webp",
        customSize: "w-32 h-32",
        alt: "Changan",
      },
      {
        src: "https://prashannabajracharya.com/logos/foton bw.webp",
        hoverSrc: "https://prashannabajracharya.com/logos/foton c.webp",
        alt: "Foton",
      },
      {
        src: "https://prashannabajracharya.com/logos/Seres bw.webp",
        hoverSrc: "https://prashannabajracharya.com/logos/seres c.webp",
        alt: "Seres",
        customSize: "w-16 h-16", // Reduced size
      },
      {
        src: "https://prashannabajracharya.com/logos/niu bw.webp",
        hoverSrc: "https://prashannabajracharya.com/logos/niu color.webp",
        alt: "Niu",
      },
      {
        src: "https://prashannabajracharya.com/logos/believe bnw.webp",
        hoverSrc: "https://prashannabajracharya.com/logos/believe c.webp",
        alt: "Believe",
      },

    ],
    // Row 3
    [
      {
        src: "https://prashannabajracharya.com/logos/ntb bw.webp",
        hoverSrc: "https://prashannabajracharya.com/logos/ntb c.webp",
        alt: "Nepal Tourism Board",
      },
      {
        src: "https://prashannabajracharya.com/logos/kmg bw.webp",
        hoverSrc: "https://prashannabajracharya.com/logos/kmg c.webp",
        alt: "KMG",
        customSize: "w-16 h-16", // Reduced size
      },
      {
        src: "https://prashannabajracharya.com/logos/MLN bw.webp",
        hoverSrc: "https://prashannabajracharya.com/logos/mln.webp",
        alt: "Mountain Lodge of Nepal",
      },
      {
        src: "https://prashannabajracharya.com/logos/GB bnw.webp",
        hoverSrc: "https://prashannabajracharya.com/logos/gb c.webp",
        alt: "Gorkha Brewery",
        customSize: "w-32 h-32", // Increased size
      },

      {
        src: "https://prashannabajracharya.com/logos/Ruslan bw.webp",
        hoverSrc: "https://prashannabajracharya.com/logos/Ruslan c.webp",
        alt: "Ruslan",
      },
      {
        src: "https://prashannabajracharya.com/logos/m4n bw.webp",
        hoverSrc: "https://prashannabajracharya.com/logos/m4n c.webp",
        alt: "Metal for Nepal",
      },
      {
        src: "https://prashannabajracharya.com/logos/khalti bw.webp",
        hoverSrc: "https://prashannabajracharya.com/logos/khalti bw c.webp",
        alt: "Khalti",
      },
    ],
    [
      {
        src: "https://prashannabajracharya.com/logos/michelin_bw.png",
        hoverSrc: "https://prashannabajracharya.com/logos/michelin.png",
        alt: "Michelin",
      },

      {
        src: "https://prashannabajracharya.com/logos/dav bnw.webp",
        hoverSrc: "https://prashannabajracharya.com/logos/dav c.webp",
        alt: "DAV",
      },

      {
        src: "https://prashannabajracharya.com/logos/cf bw.webp",
        hoverSrc: "https://prashannabajracharya.com/logos/cf c.webp",
        alt: "Crossfire",
        customSize: "w-32 h-32", // Increased size
      },
      {
        src: "https://prashannabajracharya.com/logos/yatri bw.webp",
        hoverSrc: "https://prashannabajracharya.com/logos/yatri c.webp",
        alt: "Yatri",
      },
      {
        src: "https://prashannabajracharya.com/logos/jb_bw.png",
        hoverSrc: "https://prashannabajracharya.com/logos/jb.png",
        alt: "Janakpur Bolts",
      },
    ],
  ];

  // Flatten all logos into a single array for mobile display
  const allLogos = logoData.flat();

  // Function to chunk logos into groups of 3 for mobile
  const chunkLogosForMobile = (logos, chunkSize = 3) => {
    const chunks = [];
    for (let i = 0; i < logos.length; i += chunkSize) {
      chunks.push(logos.slice(i, i + chunkSize));
    }
    return chunks;
  };

  const mobileLogoRows = chunkLogosForMobile(allLogos, 3);

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const logoVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const LogoComponent = ({ logo, index }) => (
    <motion.div
      key={`${logo.alt}-${index}`}
      className="flex items-center justify-center relative overflow-hidden group cursor-pointer"
      variants={logoVariants}
      transition={{ duration: 0.3, delay: 0.1 + (index % 3) * 0.1 }}
      whileHover={{ scale: 1.1 }}
    >
      {/* Main image */}
      <img
        src={logo.src}
        alt={logo.alt}
        className={`object-contain transition-all duration-300 
          ${logo.hoverSrc ? "group-hover:opacity-0" : ""}
          filter grayscale group-hover:grayscale-0
          ${logo.customSize ?
            // Custom sizes for desktop - scale them down for better fit
            logo.customSize.includes('w-30') || logo.customSize.includes('w-32') ?
              'w-16 h-16 sm:w-20 sm:h-20 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28' :
              logo.customSize.includes('w-28') ?
                'w-14 h-14 sm:w-18 sm:h-18 md:w-18 md:h-18 lg:w-22 lg:h-22 xl:w-24 xl:h-24' :
                logo.customSize.includes('w-20') ?
                  'w-12 h-12 sm:w-16 sm:h-16 md:w-16 md:h-16 lg:w-18 lg:h-18 xl:w-20 xl:h-20' :
                  logo.customSize.includes('w-18') ?
                    'w-12 h-12 sm:w-14 sm:h-14 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-18 xl:h-18' :
                    logo.customSize.includes('w-16') ?
                      'w-10 h-10 sm:w-12 sm:h-12 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16' :
                      'w-12 h-12 sm:w-16 sm:h-16 md:w-16 md:h-16 lg:w-18 lg:h-18 xl:w-20 xl:h-20'
            : 'w-12 h-12 sm:w-16 sm:h-16 md:w-16 md:h-16 lg:w-18 lg:h-18 xl:w-20 xl:h-20'
          }
        `}
        loading="lazy"
      />

      {/* Hover image (if provided) */}
      {logo.hoverSrc && (
        <img
          src={logo.hoverSrc}
          alt={`${logo.alt} hover`}
          className={`object-contain absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300
            ${logo.customSize ?
              // Custom sizes for desktop - scale them down for better fit
              logo.customSize.includes('w-30') || logo.customSize.includes('w-32') ?
                'w-16 h-16 sm:w-20 sm:h-20 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28' :
                logo.customSize.includes('w-28') ?
                  'w-14 h-14 sm:w-18 sm:h-18 md:w-18 md:h-18 lg:w-22 lg:h-22 xl:w-24 xl:h-24' :
                  logo.customSize.includes('w-20') ?
                    'w-12 h-12 sm:w-16 sm:h-16 md:w-16 md:h-16 lg:w-18 lg:h-18 xl:w-20 xl:h-20' :
                    logo.customSize.includes('w-18') ?
                      'w-12 h-12 sm:w-14 sm:h-14 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-18 xl:h-18' :
                      logo.customSize.includes('w-16') ?
                        'w-10 h-10 sm:w-12 sm:h-12 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16' :
                        'w-12 h-12 sm:w-16 sm:h-16 md:w-16 md:h-16 lg:w-18 lg:h-18 xl:w-20 xl:h-20'
              : 'w-12 h-12 sm:w-16 sm:h-16 md:w-16 md:h-16 lg:w-18 lg:h-18 xl:w-20 xl:h-20'
            }
          `}
          loading="lazy"
        />
      )}
    </motion.div>
  );

  // Desktop layout component
  const DesktopLogoGrid = ({ logos, rowIndex, isLastRow }) => (
    <motion.div
      className={`hidden md:flex justify-center items-center gap-6 lg:gap-12 xl:gap-20 flex-wrap ${isLastRow ? "" : "mb-8 lg:mb-12"
        }`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.8, delay: 0.4 + rowIndex * 0.2 }}
      viewport={{ once: true }}
    >
      {logos.map((logo, index) => (
        <LogoComponent key={`desktop-${logo.alt}-${index}`} logo={logo} index={index} />
      ))}
    </motion.div>
  );

  // Mobile layout component (3 items per row)
  const MobileLogoGrid = ({ logoRows }) => (
    <div className="md:hidden">
      {logoRows.map((row, rowIndex) => (
        <motion.div
          key={`mobile-row-${rowIndex}`}
          className={`grid grid-cols-3 gap-4 place-items-center ${rowIndex < logoRows.length - 1 ? "mb-6" : ""
            }`}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8, delay: 0.4 + rowIndex * 0.2 }}
          viewport={{ once: true }}
        >
          {row.map((logo, index) => (
            <LogoComponent key={`mobile-${logo.alt}-${index}`} logo={logo} index={index} />
          ))}
        </motion.div>
      ))}
    </div>
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
          className="text-3xl sm:text-4xl lg:text-6xl mb-8 sm:mb-12 lg:mb-16 text-center px-4"
          style={{
            fontFamily: "Staatliches",
            fontSize: "clamp(32px, 8vw, 76px)",
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
        <div className="bg-black px-4 sm:px-6 md:px-8 lg:px-20 py-12 sm:py-16 lg:py-20">
          <div className="max-w-6xl mx-auto">
            {/* Desktop Layout */}
            {logoData.map((row, rowIndex) => (
              <DesktopLogoGrid
                key={`desktop-${rowIndex}`}
                logos={row}
                rowIndex={rowIndex}
                isLastRow={rowIndex === logoData.length - 1}
              />
            ))}

            {/* Mobile Layout */}
            <MobileLogoGrid logoRows={mobileLogoRows} />
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
      { name: "Underside", color: "text-black" },
      { name: "Yabesh Thapa", color: "text-gray-500" },
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
  const {
    isOpen,
    images,
    currentIndex,
    openModal,
    closeModal,
    navigateToImage,
  } = useImageModal();

  return (
    <div className="bg-white">
      <HeroSection />

      <TrustedBySection />
      <VideoGallery
        title="Commercials"
        videos={COMMERCIAL_VIDEOS}
        sectionId="commercials"
      />
      <PhotoGallery openModal={openModal} />
      <VideoGallery
        title="AFTER MOVIES"
        videos={AFTER_MOVIE_VIDEOS}
        sectionId="after-movies"
      />
      <BrandsAndArtistsSection />
      <ArtistNamesSection />
      <AboutSection />
      {/*<Footer />*/}

      <ImageModal
        isOpen={isOpen}
        onClose={closeModal}
        images={images}
        currentIndex={currentIndex}
        onNavigate={navigateToImage}
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
        {[...images, ...images, ...images].map((img, i) => (
          <img
            key={i}
            src={`${img}?q=55`} // Lower quality for the default image
            srcSet={`${img}?w=320&q=75 320w, ${img}?w=640&q=75 640w, ${img}?w=1280&q=75 1280w`}
            sizes="(max-width: 640px) 320px, (max-width: 1024px) 640px, 1280px"
            loading="lazy"
            alt={`Photo ${i % images.length}`}
            className={`${getImageSize(i)} ${orientations[i % images.length] === "portrait" ? "object-contain" : "object-cover"} mr-2 cursor-pointer flex-shrink-0 rounded-sm bg-black`}
            onClick={() => openModal(img, `Photo ${i % images.length}`)}
          />
        ))}
      </div>
    </div>
  );
};
