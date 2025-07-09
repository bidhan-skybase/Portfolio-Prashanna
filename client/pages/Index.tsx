import { motion } from "framer-motion";
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
  const companyLogos = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2Fbed0d93c4a5b44f29e5c7113d5aec3d5%2F3f6cfc1909904be2b37eaff8a99b49a1",
      aspectRatio: "1.45",
      maxWidth: "260px",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2Fbed0d93c4a5b44f29e5c7113d5aec3d5%2F63a7e538b79f4b0ba4e4997ae5190bf8",
      aspectRatio: "1.92",
      maxWidth: "256px",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2Fbed0d93c4a5b44f29e5c7113d5aec3d5%2Fcd6f20e6b8c24334b2ba9c97adc8c963",
      aspectRatio: "2.27",
      maxWidth: "256px",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2Fbed0d93c4a5b44f29e5c7113d5aec3d5%2Fdb538ba2678f4f74b78ee246ec95ee4e",
      aspectRatio: "3.13",
      maxWidth: "256px",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2Fbed0d93c4a5b44f29e5c7113d5aec3d5%2F58a01c26c37a4317a780cba94edf7c2e",
      aspectRatio: "1.86",
      maxWidth: "256px",
    },
  ];

  return (
    <section className="py-20 bg-portfolio-light-beige">
      <div className="max-w-6xl mx-auto px-8 text-center">
        <motion.h2
          className="text-portfolio-dark-green font-medium text-4xl lg:text-6xl mb-12"
          style={{ fontFamily: "CustomRegular" }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          TRUSTED BY
        </motion.h2>

        <motion.div
          className="overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-row justify-center items-center gap-5 bg-white px-14 py-4">
            {companyLogos.map((logo, index) => (
              <motion.img
                key={index}
                loading="lazy"
                src={logo.src}
                alt={`Company logo ${index + 1}`}
                className="w-full mt-5 min-h-5 min-w-5 overflow-hidden object-cover object-center"
                style={{
                  aspectRatio: logo.aspectRatio,
                  maxWidth: logo.maxWidth,
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              />
            ))}
            <div className="flex flex-col relative mt-5 h-auto pb-7.5" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const CommercialSection = ({ openModal }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    slidesToScroll: 1,
    containScroll: "trimSnaps",
    skipSnaps: false,
  });

  useEffect(() => {
    if (!emblaApi) return;

    const autoScroll = () => {
      if (emblaApi.canScrollNext()) {
        emblaApi.scrollNext();
      }
    };

    const intervalId = setInterval(autoScroll, 3000); // Auto-scroll every 3 seconds

    return () => clearInterval(intervalId);
  }, [emblaApi]);

  return (
    <section id="works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-portfolio-darker-green font-medium text-4xl lg:text-6xl mb-16 text-center"
          style={{ fontFamily: "CustomRegular" }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          COMMERCIALS
        </motion.h2>

        <motion.div
          className="embla overflow-visible"
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
                className="embla__slide flex-none w-1/3 md:w-1/4 lg:w-1/2 mx-2 relative"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div
                  className="relative h-80 lg:h-96 bg-gray-200 rounded-lg overflow-hidden cursor-pointer shadow-lg"
                  onClick={() => openModal(image, `Commercial ${index + 1}`)}
                >
                  <img
                    src={image}
                    alt={`Commercial ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <div
                    className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center"
                    style={{
                      opacity: emblaApi
                        ? emblaApi.selectedScrollSnap() === index
                          ? 0
                          : 0.5
                        : 1,
                    }}
                  >
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
const PhotoGallery = ({ openModal }: { openModal: (src: string, alt: string) => void }) => {
  return (
    <section className="py-20 bg-white overflow-hidden">
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

const AfterMoviesSection = ({
  openModal,
}: {
  openModal: (src: string, alt: string) => void;
}) => {
  const [emblaRef] = useEmblaCarousel({ loop: true });

  return (
    <section className="py-20 bg-white">
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

        <motion.div
          className="embla overflow-hidden rounded-lg"
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
                className="embla__slide flex-none w-full lg:w-1/3 px-2"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div
                  className="relative h-80 lg:h-96 bg-gray-200 rounded-lg overflow-hidden cursor-pointer"
                  onClick={() => openModal(image, `After Movie ${index + 1}`)}
                >
                  <img
                    src={image}
                    alt={`After Movie ${index + 1}`}
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
              className={`font-nunito font-bold text-lg lg:text-xl ${artist.color}`}
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
      <CommercialSection openModal={openModal} />
      <PhotoGallery openModal={openModal} />
      <AfterMoviesSection openModal={openModal} />
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
                             openModal
                           }: {
  images: string[];
  direction: "ltr" | "rtl";
  openModal: (src: string, alt: string) => void;
}) => {
  const animationClass = direction === "ltr" ? "animate-scrollLtr" : "animate-scrollRtl";

  const getImageSize = (index: number) => {
    const pattern = index % 3;

    if (pattern === 0) {
      return "w-96 h-40 lg:w-[20rem] lg:h-60";
    } else {
      return "w-48 h-40 lg:w-50 lg:h-60";
    }
  };

  return (
    <div className="overflow-hidden mb-1">
      <div className={`flex ${animationClass} w-max`}>
        {/* Triple the images for seamless loop */}
        {[...images, ...images, ...images].map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Photo ${i % images.length}`}
            className={`${getImageSize(i)} object-cover mr-1  cursor-pointer flex-shrink-0`}
            onClick={() => openModal(img, `Photo ${i % images.length}`)}
          />
        ))}
      </div>
    </div>
  );
};
