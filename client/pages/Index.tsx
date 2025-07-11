import { AnimatePresence, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import CountUp from "react-countup";
import useEmblaCarousel from "embla-carousel-react";
import { ImageModal, useImageModal } from "../components/ImageModal";

const heroImages = [
  "https://cdn.builder.io/api/v1/image/assets/TEMP/645db85c77fd0d9accfed3c884df671d108fe73a?width=3154",
  "https://cdn.builder.io/api/v1/image/assets/TEMP/d02c7c3fd5ef2e3678c8c7529d948623e15c8550?width=3943",
];

const commercialImages = [
  "https://cdn.builder.io/api/v1/image/assets/TEMP/22e3e86375e89ea7b1f6f71d85d350d176fb1add?width=3336",
  "https://cdn.builder.io/api/v1/image/assets/TEMP/9cb002352ff194efae175c568236c526a27ab935?width=716",
  "https://cdn.builder.io/api/v1/image/assets/TEMP/8cd272271ffe987fb08364155adec5ef167eed02?width=716",
];

const galleryImages = [
  "https://cdn.builder.io/api/v1/image/assets/TEMP/75d53e130505c6a48c6948b2e620ac6c1696971f?width=417",
  "https://cdn.builder.io/api/v1/image/assets/TEMP/11851de92e667b3a5d33bfe81be5f6305288f783?width=416",
  "https://cdn.builder.io/api/v1/image/assets/TEMP/a1baca21a02d40129b5a301604b04592aca7bed8?width=417",
  "https://cdn.builder.io/api/v1/image/assets/TEMP/2d624fd7cb4fe13a91b84591ebc339014f98db7c?width=933",
  "https://cdn.builder.io/api/v1/image/assets/TEMP/a30bc80037aa0286a3b3eb708f89c09857b84ce3?width=939",
  "https://cdn.builder.io/api/v1/image/assets/TEMP/f11023693025a6872ff02e0ed4fe6074f59620cc?width=933",
];

const artistNames = [
  { name: "Aastha Gill", color: "text-portfolio-darker-green" },
  { name: "Alok", color: "text-portfolio-brown-red" },
  { name: "Anuv Jain", color: "text-portfolio-darker-green" },
  { name: "Arijit Singh", color: "text-portfolio-brown-red" },
  { name: "Atif Aslam", color: "text-portfolio-darker-green" },
  { name: "Burak Yeter", color: "text-portfolio-brown-red" },
  { name: "Clean Bandit", color: "text-portfolio-darker-green" },
  { name: "Diplo", color: "text-portfolio-brown-red" },
  { name: "Diljit Dosanjh", color: "text-portfolio-darker-green" },
  { name: "Divine", color: "text-portfolio-brown-red" },
  { name: "Green Day", color: "text-portfolio-darker-green" },
  { name: "King", color: "text-portfolio-brown-red" },
  { name: "Lil Pump", color: "text-portfolio-darker-green" },
  { name: "Lollapalooza India", color: "text-portfolio-brown-red" },
  { name: "Louis Tomlinson", color: "text-portfolio-darker-green" },
  { name: "Manu Chao", color: "text-portfolio-brown-red" },
  { name: "Maroon 5", color: "text-portfolio-darker-green" },
  { name: "Martin Garrix", color: "text-portfolio-brown-red" },
  { name: "Prateek Kuhad", color: "text-portfolio-darker-green" },
  { name: "Rishab Rikhiram Sharma", color: "text-portfolio-brown-red" },
  { name: "Shawn Mendez", color: "text-portfolio-darker-green" },
  { name: "Neetesh Jung Kunwar", color: "text-portfolio-brown-red" },
  { name: "Arthur Gunn", color: "text-portfolio-darker-green" },
  { name: "Underside", color: "text-portfolio-brown-red" },
  { name: "1974 AD", color: "text-portfolio-darker-green" },
  { name: "5:55", color: "text-portfolio-brown-red" },
  { name: "Sushant KC", color: "text-portfolio-darker-green" },
];

const ScrollingBackground = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {heroImages.map((image, index) => (
        <motion.img
          key={index}
          src={image}
          alt=""
          className="absolute w-full h-full object-cover"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
            zIndex: index,
          }}
        />
      ))}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(12, 38, 25, 0.9)" }}
      />
    </div>
  );
};

const Navigation = () => {
  const navItems = ["HOME", "ABOUT", "WORKS", "CONTACT"];
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight * 0.8; // 80% of viewport height
      setScrolled(window.scrollY > heroHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 flex justify-center pt-8 pb-8 transition-all duration-300 ${
        scrolled
          ? "bg-portfolio-dark-green shadow-lg backdrop-blur-sm"
          : "bg-transparent"
      }`}
    >
      <div className="flex space-x-16">
        {navItems.map((item, index) => (
          <motion.a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-white font-oswald text-xl hover:text-portfolio-accent-gold transition-colors duration-300"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            {item}
          </motion.a>
        ))}
      </div>
    </motion.nav>
  );
};

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden rounded-b-3xl"
    >
      <ScrollingBackground />
      <Navigation />

      <motion.div
        className="relative z-10 text-center max-w-6xl mx-auto px-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <motion.h1
          className="text-portfolio-accent-gold font-bold text-6xl lg:text-9xl mb-4 tracking-wide"
          style={{ fontFamily: "CustomRegular" }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          PRODUCER / DIRECTOR / EDITOR
        </motion.h1>

        <motion.p
          className="text-white font-oswald text-lg lg:text-2xl max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          SCRIPT WRITER / PRODUCER / DIRECTOR / EDITOR / CAMERA OPERATOR / DRONE
          OPERATOR
        </motion.p>
      </motion.div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        <div className="w-3 h-1 bg-portfolio-accent-gold rounded-full"></div>
        <div className="w-1 h-1 bg-white rounded-full"></div>
        <div className="w-1 h-1 bg-white rounded-full"></div>
        <div className="w-1 h-1 bg-white rounded-full"></div>
        <div className="w-1 h-1 bg-white rounded-full"></div>
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
        style={{ fontFamily: "CustomRegular" }}
      >
        {inView && <CountUp start={0} end={end} duration={2} />}+
      </div>
      <div className="text-black font-oswald text-xl lg:text-2xl">{label}</div>
    </motion.div>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2
              className="text-portfolio-dark-green font-regular text-5xl lg:text-6xl mb-8 tracking-wider"
              style={{ fontFamily: "CustomRegular" }}
            >
              PRASHANNA BAJRACHARYA
            </h2>

            <p className="font-nunito text-lg lg:text-xl text-gray-800 mb-12 leading-relaxed">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose.
            </p>

            <div className="grid grid-cols-2 gap-16">
              <CounterAnimation end={8} label="Years Experience" />
              <CounterAnimation end={34} label="Clients Served" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a1713fc3a7af5a183f21190184819cb26c784935?width=1739"
              alt="Prashanna Bajracharya"
              className="w-full h-auto rounded-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const TrustedBySection = () => {
  const greenLogos = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/50114e2ce130e994f8ffcfc731638c0c04ccad11?width=258",
      alt: "Pepsi Green",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/b6dcdc9800d040aceb209f77096e060f3dde51c1?width=258",
      alt: "Skoda Green",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/48c66daddf4446a6e79c0a813b7117ec81879f46?width=258",
      alt: "TEDx Green",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/1c5af3980f2e3e7e207821edbf60fd331a615207?width=258",
      alt: "Tuborg Green",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/3ce998db40b1a2642a762189bcf3420b2f8718b8?width=258",
      alt: "Adidas Green",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/305437d501d5488fbf8819957f426e8ef6f25b1d?width=256",
      alt: "Unilever Green",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/2aa5b91936031749aa6616da44210f34ab6aa75c?width=258",
      alt: "Champions League Green",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/023f2cc31153a1f439046ebef70d95e2b4ae36c2?width=258",
      alt: "Coke Logo Green",
    },
  ];

  // Create a duplicated array for seamless infinite scroll
  const duplicatedLogos = [...greenLogos, ...greenLogos];

  // Calculate the actual width needed for smooth infinite scroll
  const logoWidth = 160; // Approximate width including gaps (128px + 32px gap)
  const totalWidth = greenLogos.length * logoWidth;

  return (
    <section className="py-20 bg-yellow-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 text-center">
        <motion.h2
          style={{
            fontFamily: "CustomRegular",
            color: "#254736",
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
              className="flex items-center gap-8 md:gap-12 lg:gap-16"
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
                    className="w-32 h-32 md:w-28 md:h-28 lg:w-32 lg:h-32 object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Gradient overlays for smooth fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-yellow-50 to-transparent pointer-events-none z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-yellow-50 to-transparent pointer-events-none z-10"></div>
        </div>
      </div>
    </section>
  );
};

const CommercialSection = () => {
  const allCommercialImages = [
    "https://cdn.builder.io/api/v1/image/assets/TEMP/445332e065ddd1aafdfc7098cfe414b4b689b8e3?width=2898",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/445332e065ddd1aafdfc7098cfe414b4b689b8e3?width=2898",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/445332e065ddd1aafdfc7098cfe414b4b689b8e3?width=2898",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/445332e065ddd1aafdfc7098cfe414b4b689b8e3?width=2898",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/6b4b42669bf3e8c757ebab63cb074e9d404baaed?width=684",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/6b4b42669bf3e8c757ebab63cb074e9d404baaed?width=684",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/6b4b42669bf3e8c757ebab63cb074e9d404baaed?width=684",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/6b4b42669bf3e8c757ebab63cb074e9d404baaed?width=684",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/6b4b42669bf3e8c757ebab63cb074e9d404baaed?width=684",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/6b4b42669bf3e8c757ebab63cb074e9d404baaed?width=684",

  ];
  const [hasNextBeenPressed, setHasNextBeenPressed] = useState(false);
  const [featuredImage, setFeaturedImage] = useState(allCommercialImages[0]);
  const [thumbnailStartIndex, setThumbnailStartIndex] = useState(1);
  const thumbnailsPerPage = 4;
  const maxIndex = allCommercialImages.length - thumbnailsPerPage;

  const handleNext = () => {
    setHasNextBeenPressed(true);
    setThumbnailStartIndex((prev) =>
      prev + thumbnailsPerPage > maxIndex ? 1 : prev + thumbnailsPerPage,
    );
  };

  const handlePrevious = () => {
    setThumbnailStartIndex((prev) =>
      prev - thumbnailsPerPage < 1 ? maxIndex : prev - thumbnailsPerPage,
    );
  };

  return (
    <section id="works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        {/* Title */}
        <motion.h2
          className="text-4xl lg:text-6xl mb-10 text-center"
          style={{ fontFamily: "CustomRegular", color: "#254736" }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          COMMERCIALS
        </motion.h2>

        {/* Featured Image */}
        <motion.div
          className="mb-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="relative w-full h-72 lg:h-[500px] bg-gray-200 overflow-hidden cursor-pointer">
            <img
              src={featuredImage}
              alt="Featured Commercial"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Thumbnail Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {allCommercialImages
            .slice(thumbnailStartIndex, thumbnailStartIndex + thumbnailsPerPage)
            .map((image, index) => (
              <motion.div
                key={index}
                className="relative h-48 lg:h-40 bg-gray-200 overflow-hidden cursor-pointer"
                onClick={() => setFeaturedImage(image)}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={image}
                  alt={`Commercial ${thumbnailStartIndex + index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-300" />
              </motion.div>
            ))}
        </motion.div>

        {/* Navigation Buttons */}
        <motion.div
          className="flex justify-between"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          {hasNextBeenPressed ? (
            <button
              className="text-2xl lg:text-3xl hover:text-portfolio-dark-green transition-colors duration-300"
              style={{ fontFamily: "CustomRegular" }}
              onClick={handlePrevious}
            >
              ← Previous
            </button>
          ) : (
            <div />
          )}

          <button
            className="text-2xl lg:text-3xl hover:text-portfolio-dark-green transition-colors duration-300"
            style={{ fontFamily: "CustomRegular" }}
            onClick={handleNext}
          >
            Next →
          </button>
        </motion.div>
      </div>
    </section>
  );
};
const PhotoGallery = ({
  openModal,
}: {
  openModal: (src: string, alt: string) => void;
}) => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      {/* Keep max-width only for the title */}
      <div className="max-w-7xl mx-auto px-8">
        <motion.h2
          className="text-portfolio-dark-green font-medium text-4xl lg:text-6xl mb-16 text-center"
          style={{ fontFamily: "CustomRegular" }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          PHOTOS / STILLS
        </motion.h2>
      </div>

      {/* Full-width scroll containers */}
      <div className="w-full">
        <InfiniteScrollRow
          images={galleryImages.slice(0, Math.ceil(galleryImages.length / 2))}
          direction="ltr"
          openModal={openModal}
        />
        <InfiniteScrollRow
          images={galleryImages.slice(Math.ceil(galleryImages.length / 2))}
          direction="rtl"
          openModal={openModal}
        />
      </div>
    </section>
  );
};

// Updated CommercialSection with peeking images
const AfterMoviesSection = ({ openModal }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    slidesToScroll: 1,
    containScroll: "trimSnaps",
    skipSnaps: false,
    startIndex: 0,
    dragFree: false,
    inViewThreshold: 0.3,
  });

  useEffect(() => {
    if (!emblaApi) return;

    const autoScroll = () => {
      if (emblaApi.canScrollNext()) {
        emblaApi.scrollNext();
      }
    };

    const intervalId = setInterval(autoScroll, 3000);

    return () => clearInterval(intervalId);
  }, [emblaApi]);

  return (
    <section id="works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <motion.h2
          className="text-portfolio-darker-green font-medium text-4xl lg:text-6xl mb-16 text-center"
          style={{ fontFamily: "CustomRegular" }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          AFTER MOVIES
        </motion.h2>
      </div>
      <div className="w-full overflow-hidden px-32">
        <motion.div
          className="embla"
          ref={emblaRef}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="embla__container flex">
            {commercialImages.map((image, index) => (
              <motion.div
                key={index}
                className="embla__slide flex-none w-[70vw] md:w-[60vw] lg:w-[50vw] px-4"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div
                  className="relative h-[22rem] md:h-[26rem] lg:h-[32rem] bg-gray-200 rounded-lg overflow-hidden cursor-pointer shadow-lg"
                  onClick={() => openModal(image, `Commercial ${index + 1}`)}
                >
                  <img
                    src={image}
                    alt={`Commercial ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <div className="text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <div className="w-16 h-16 border-2 border-white rounded-full flex items-center justify-center">
                        <div className="w-0 h-0 border-l-8 border-r-0 border-t-4 border-b-4 border-l-white border-t-transparent border-b-transparent ml-1"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const BrandsAndArtistsSection = () => {
  const brandLogos = [
    // Row 1
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/44f40adb92f7fbbe64edb530566ae14aa4e3cecb?width=180",
      alt: "Pepsi",
      size: "w-20 h-20",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/7fe819b198544cbc65d8d6de21cbcf5c97422666?width=240",
      alt: "Adidas",
      size: "w-28 h-28",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/7b5cfe83b1265c8e81e5e082e0fabcde5367e9ee?width=242",
      alt: "Champions League",
      size: "w-28 h-28",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/0341e5f33a40c139c90c0e1ce6f8c3eaca0fdd68?width=240",
      alt: "Unilever",
      size: "w-28 h-28",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/eb963fb811266ceeaa17a5d23e24983afc62c80a?width=242",
      alt: "TEDx",
      size: "w-28 h-28",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/a621c69c312cca5c65cc205d15e62184891fe1ab?width=240",
      alt: "Coca Cola",
      size: "w-28 h-28",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/69bdce7898caf7a3dbf52d6b2db22604e0d27d5b?width=242",
      alt: "Expo City Dubai",
      size: "w-28 h-28",
    },
    // Row 2
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/e5db6c33474a62b281fe6d829b6deb70e31c484a?width=240",
      alt: "Seres",
      size: "w-28 h-28",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/638305edd55ac6c6b936131f353d2d1d94664658?width=240",
      alt: "Skoda",
      size: "w-28 h-28",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/c270ac63c43c14f2061fb44f0337a7bfa3bdd3d2?width=242",
      alt: "Foton",
      size: "w-28 h-28",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/3c3ab22b023570c8af070ff45deb1c0bfce50e83?width=242",
      alt: "Yamaha",
      size: "w-28 h-28",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/e3e21b1c4b832c111a93a1725375e1a4f243dfb9?width=240",
      alt: "Changan",
      size: "w-28 h-28",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/3fa54c0cecd728b5b550c036e70521ab0040b60f?width=242",
      alt: "Niu",
      size: "w-28 h-28",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/868e2475b4f94faf0eba0f53097bd5be7de92a7c?width=240",
      alt: "Tuborg",
      size: "w-28 h-28",
    },
    // Row 3
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/6e232075aad47f9c2ab713d971e772ad881ef45f?width=242",
      alt: "Samsung",
      size: "w-28 h-28",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/df4608e0cf2f6e66b2d0abc051f2311a74d80b12?width=240",
      alt: "Ruslan",
      size: "w-28 h-28",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/599efa4bb19e6c74a3df99625a1bce33693c6b7a?width=398",
      alt: "Gorkha Brewery",
      size: "w-32 h-32",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/a3815f5fab7e929b8611adcc7b6c9547bbf298b6?width=242",
      alt: "Nepal Tourism Board",
      size: "w-28 h-28",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/5fbd5af2bcd26a3dc69366e169cac349e7d463d4?width=292",
      alt: "Crossfire",
      size: "w-28 h-28",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/e891ddad87f2387fca4d0bd0640aac0a61b0433f?width=222",
      alt: "Yatri",
      size: "w-28 h-28",
    },
    // Row 4
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/dc572a1d2133d0caabf2f08453b3833cce4f6138?width=242",
      alt: "KMG",
      size: "w-28 h-28",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/ea257574a8290e0d1045d54e2ff432d725d9ca86?width=242",
      alt: "Yale University",
      size: "w-28 h-28",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/40d72e39d6177fb704e7107bd5d9ee0999acb2cf?width=242",
      alt: "Khalti",
      size: "w-28 h-28",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/3d209037b240613b8c5969004fedb8d1e183db5a?width=240",
      alt: "Httpool",
      size: "w-28 h-28",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/485de442379249f2d486e809041dcd1944b87184?width=240",
      alt: "SOS",
      size: "w-28 h-28",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/b3f43ab92c3d09c07e65f075ebcfba596b95eaaf?width=242",
      alt: "DAV",
      size: "w-28 h-28",
    },
  ];

  return (
    <section className="py-20" style={{}}>
      <div className=" mx-auto">
        <motion.h2
          className="text-center text-4xl lg:text-6xl mb-16"
          style={{
            fontFamily: "CustomRegular",
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          BRANDS & ARTISTS
        </motion.h2>

        <motion.div
          className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-4 lg:gap-6 items-center justify-items-center px-40 py-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          style={{ backgroundColor: "#254736" }}
        >
          {brandLogos.map((logo, index) => (
            <motion.div
              key={index}
              className="flex items-center justify-center p-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1 }}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className={`${logo.size} object-contain filter brightness-0 invert`}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const ArtistNamesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-8">
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-6 gap-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {artistNames.map((artist, index) => (
            <motion.div
              key={artist.name}
              className={`font-nunito font-bold text-lg lg:text-xl ${artist.color} text-justify`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1 }}
            >
              {artist.name}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  const socialIcons = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/5d7233e91a7ad3aa21da77027e2d10192eba739a?width=100",
      alt: "Twitter",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/c97ad2209f10b353eb66e4603f111ec06780f9fb?width=106",
      alt: "Facebook",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/c1a7fcba71d20d8c3e72f6740a392f110eee9a8b?width=106",
      alt: "Instagram",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/47a0152d859b745c62e7a68a20b8483b89cf7671?width=100",
      alt: "LinkedIn",
    },
  ];

  return (
    <footer id="contact" className="bg-portfolio-dark-green rounded-t-3xl">
      <div className="max-w-7xl mx-auto px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div
              className="text-portfolio-accent-gold font-bold text-8xl lg:text-9xl mb-8"
              style={{ fontFamily: "serif" }}
            >
              PB
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-white font-oswald font-bold text-lg mb-4">
                CONNECT WITH ME:
              </h3>
              <div className="flex space-x-4">
                {socialIcons.map((icon, index) => (
                  <motion.a
                    key={icon.alt}
                    href="#"
                    className="block"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <img src={icon.src} alt={icon.alt} className="w-12 h-12" />
                  </motion.a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-white font-oswald text-xs mb-4">
                FOR BUSINESS ENQUIRY:
              </h3>
              <a
                href="mailto:prashanna.bajracharya@gmail.com"
                className="text-portfolio-accent-gold text-2xl lg:text-3xl hover:underline"
                style={{ fontFamily: "CustomRegular" }}
              >
                prashanna.bajracharya@gmail.com
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default function Index() {
  const { isOpen, currentImage, openModal, closeModal } = useImageModal();

  return (
    <div className="bg-white">
      <HeroSection />
      <AboutSection />
      <TrustedBySection />
      <CommercialSection  />
      <PhotoGallery openModal={openModal} />
      <AfterMoviesSection openModal={openModal} />
      <BrandsAndArtistsSection />
      <ArtistNamesSection />
      <Footer />

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
}: {
  images: string[];
  direction: "ltr" | "rtl";
  openModal: (src: string, alt: string) => void;
}) => {
  const animationClass =
    direction === "ltr" ? "animate-scrollLtr" : "animate-scrollRtl";

  // Function to get image size based on index pattern
  const getImageSize = (index: number) => {
    const pattern = index % 3;

    if (pattern === 0) {
      return "w-96 h-40 lg:w-[20rem] lg:h-60";
    } else {
      return "w-48 h-40 lg:w-40 lg:h-60";
    }
  };

  return (
    <div className="overflow-hidden mb-2 w-full">
      <div
        className={`flex ${animationClass}`}
        style={{ width: "max-content" }}
      >
        {/* Increase duplication for wider content */}
        {[...images, ...images, ...images, ...images, ...images].map(
          (img, i) => (
            <img
              key={i}
              src={img}
              alt={`Photo ${i % images.length}`}
              className={`${getImageSize(i)} object-cover mr-2  cursor-pointer flex-shrink-0`}
              onClick={() => openModal(img, `Photo ${i % images.length}`)}
            />
          ),
        )}
      </div>
    </div>
  );
};
