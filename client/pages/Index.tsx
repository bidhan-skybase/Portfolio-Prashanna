import { AnimatePresence, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useCallback, useEffect, useState } from "react";
import CountUp from "react-countup";
import useEmblaCarousel from "embla-carousel-react";
import { ImageModal, useImageModal } from "../components/ImageModal";

const heroImages = [
  "https://res.cloudinary.com/dzign6pg0/image/upload/v1752210606/WhatsApp_Image_2025-06-23_at_15.43.27_9fd048e1_1_1_fom8pe.png",
  "https://cdn.builder.io/api/v1/image/assets/TEMP/d02c7c3fd5ef2e3678c8c7529d948623e15c8550?width=3943",
];

const commercialImages = [
  "https://cdn.builder.io/api/v1/image/assets/TEMP/22e3e86375e89ea7b1f6f71d85d350d176fb1add?width=3336",
  "https://cdn.builder.io/api/v1/image/assets/TEMP/9cb002352ff194efae175c568236c526a27ab935?width=716",
  "https://cdn.builder.io/api/v1/image/assets/TEMP/8cd272271ffe987fb08364155adec5ef167eed02?width=716",
];

const galleryImages = [
  "https://res.cloudinary.com/dzign6pg0/image/upload/v1752218517/IMG_1646_Medium_x0mwhj.jpg",
  "https://res.cloudinary.com/dzign6pg0/image/upload/v1752218517/Master_01_Medium_d02vg3.jpg",
  "https://res.cloudinary.com/dzign6pg0/image/upload/v1752218516/Ig-anuv_02_Medium_obb6v4.jpg",
  "https://res.cloudinary.com/dzign6pg0/image/upload/v1752218516/DSC08662_Medium_buv5pj.jpg",
  "https://res.cloudinary.com/dzign6pg0/image/upload/v1752218516/fireworks01_Medium_biu3f5.jpg",
  "https://res.cloudinary.com/dzign6pg0/image/upload/v1752218515/DSC05271_Medium_oggrss.jpg",
  "https://res.cloudinary.com/dzign6pg0/image/upload/v1752218515/DSC01665_Medium_drasv5.jpg",
  "https://res.cloudinary.com/dzign6pg0/image/upload/v1752218515/DSC01656_Medium_p0ed4g.jpg",
  "https://res.cloudinary.com/dzign6pg0/image/upload/v1752218514/DSC00498_Medium_hhiyuo.jpg",
  "https://res.cloudinary.com/dzign6pg0/image/upload/v1752218514/DSC01231_Medium_o7shlj.jpg",
  "https://res.cloudinary.com/dzign6pg0/image/upload/v1752218514/DSC01046_Medium_swoz5j.jpg",
  "https://res.cloudinary.com/dzign6pg0/image/upload/v1752218513/atif_aslam_main_Medium_hhqzvs.jpg",
  "https://res.cloudinary.com/dzign6pg0/image/upload/v1752218513/Atif-slide_08_Medium_l16odb.jpg",
  "https://res.cloudinary.com/dzign6pg0/image/upload/v1752218513/Atif-slide_02_Medium_xjlix0.jpg",
  "https://res.cloudinary.com/dzign6pg0/image/upload/v1752218512/_MG_2039_Medium_kbkxva.jpg",
  "https://res.cloudinary.com/dzign6pg0/image/upload/v1752218512/_MG_1932_Medium_rgqyp6.jpg",
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight * 0.8; // 80% of viewport height
      setScrolled(window.scrollY > heroHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-portfolio-dark-green shadow-lg backdrop-blur-sm"
            : "bg-transparent"
        }`}
      >
        <div className="flex justify-between items-center px-6 py-4 md:justify-center md:px-8 md:py-8">
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 lg:space-x-16">
            {navItems.map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white font-oswald text-lg lg:text-xl hover:text-portfolio-accent-gold transition-colors duration-300"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                {item}
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-white z-60 relative"
            onClick={toggleMobileMenu}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <motion.span
                className={`block w-6 h-0.5 bg-white mb-1 transition-all duration-300 ${
                  isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              />
              <motion.span
                className={`block w-6 h-0.5 bg-white mb-1 transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <motion.span
                className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              />
            </div>
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <motion.div
        className={`fixed inset-0 bg-portfolio-dark-green z-40 md:hidden ${
          isMobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
        initial={{ opacity: 0 }}
        animate={{ opacity: isMobileMenuOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {navItems.map((item, index) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-white font-oswald text-2xl hover:text-portfolio-accent-gold transition-colors duration-300"
              onClick={closeMobileMenu}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: isMobileMenuOpen ? 1 : 0,
                y: isMobileMenuOpen ? 0 : 20
              }}
              transition={{
                duration: 0.3,
                delay: isMobileMenuOpen ? index * 0.1 : 0
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {item}
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* Mobile Menu Backdrop */}
      {isMobileMenuOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={closeMobileMenu}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </>
  );
};


const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden "
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
            src="https://res.cloudinary.com/dzign6pg0/video/upload/v1752333676/Showreel_final_1_ynmuzp.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        {/* Optional overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

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

      {/*<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">*/}
      {/*  <div className="w-3 h-1 bg-portfolio-accent-gold rounded-full"></div>*/}
      {/*  <div className="w-1 h-1 bg-white rounded-full"></div>*/}
      {/*  <div className="w-1 h-1 bg-white rounded-full"></div>*/}
      {/*  <div className="w-1 h-1 bg-white rounded-full"></div>*/}
      {/*  <div className="w-1 h-1 bg-white rounded-full"></div>*/}
      {/*</div>*/}
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
        style={{ fontFamily: "Helvetica Compressed" }}
      >
        {inView && <CountUp start={0} end={end} duration={2} />}+
      </div>
      <div className="text-black font-oswald text-xl lg:text-2xl">{label}</div>
    </motion.div>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="bg-white relative overflow-hidden">
      {/* Content with padding */}
      <div className="py-0">
        <div className="max-w-8xl mx-auto px-4 sm:px-8 md:px-16 lg:px-31">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-15 items-start">
            {/* Left column - Text content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="py-16"
            >
              <h3
                className="text-portfolio-dark-green font-regular text-6xl lg:text6-xl mb-1 tracking-wider"
                style={{ fontFamily: "Helvetica Compressed" }}
              >
                PRASHANNA BAJRACHARYA
              </h3>
              <h1 className="text-portfolio-brown-red font-bold text-2xl lg:text:3xl tracking-wider mb-8">
                PRODUCER | DIRECTOR | EDITOR
              </h1>
              <div
                style={{ display: "flex", flexDirection: "column", gap: 12 }}
                className="pb-6"
              >
                <p className="font-nunito text-lg lg:text-xl text-gray-800 leading-relaxed">
                  Prashanna Bajracharya is a dynamic visual storyteller and
                  creative entrepreneur based in Kathmandu, Nepal.
                </p>
                <p className="font-nunito text-lg lg:text-xl text-gray-800 leading-relaxed">
                  A self-taught photographer and filmmaker, he has collaborated
                  with over 30 diverse brands, bringing narratives to life
                  through brand campaigns, documentaries, editorial projects,
                  and event coverage. With a keen eye for detail and a deep
                  passion for storytelling, his work seamlessly blends artistry
                  and impact.
                </p>
                <p className="font-nunito text-lg lg:text-xl text-gray-800 leading-relaxed">
                  In 2020, he founded{" "}
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
                <p className="font-nunito text-lg lg:text-xl text-gray-800 leading-relaxed">
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
    <section className="py-20  overflow-hidden" style={{backgroundColor:"#F0F0F0"}}>
      <div className="max-w-7xl mx-auto px-8 text-center">
        <motion.h2
          style={{
            fontFamily: "Helvetica Compressed",
            color: "#000000",
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
      /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
      /facebook\.com\/.*\/videos\/(\d+)/,
      /instagram\.com\/(?:p|reel)\/([A-Za-z0-9_-]+)/,
    ];

    for (const pattern of patterns) {
      const match = url.match(pattern);
      if (match) return match[1];
    }
    return null;
  };

  const allCommercialVideos = [
    {
      url: "https://www.facebook.com/singaporebeverages/videos/732463532422643/",
      id: extractVideoId(
        "https://www.facebook.com/singaporebeverages/videos/732463532422643/",
      ),
      title: "Singapore Beverages",
      platform: "facebook",
    },
    // {
    //   url: "https://www.instagram.com/reel/Cqk3XUcPvp8/",
    //   id: extractVideoId("https://www.instagram.com/reel/Cqk3XUcPvp8/"),
    //   title: "Kantipur TV",
    //   platform: "instagram"
    // },
    {
      url: "https://youtu.be/1zX82HUC3MQ?si=i09C23fcWMWN-m_Z",
      id: extractVideoId("https://youtu.be/1zX82HUC3MQ?si=i09C23fcWMWN-m_Z"),
      title: "Janakpur Bolts Anthem",
      platform: "youtube",
    },
    {
      url: "https://www.youtube.com/watch?v=S7DRJNuYrhs",
      id: extractVideoId("https://www.youtube.com/watch?v=S7DRJNuYrhs"),
      title: "Lumbini Allstars Anthem",
      platform: "youtube",
    },

    {
      url: "https://youtu.be/pjCOsZZPB3c",
      id: extractVideoId("https://youtu.be/pjCOsZZPB3c"),
      title: "Naami Launch Video",
      platform: "youtube",
    },
    {
      url: "https://youtu.be/ZmxUV8x5Bt4",
      id: extractVideoId("https://youtu.be/ZmxUV8x5Bt4"),
      title: "Skoda Testimonial",
      platform: "youtube",
    },
    {
      url: "https://youtu.be/tI--w9k7P0g",
      id: extractVideoId("https://youtu.be/tI--w9k7P0g"),
      title: "Samsung Testimonial",
      platform: "youtube",
    },
    {
      url: "https://youtu.be/AlRhi6xPrHc",
      id: extractVideoId("https://youtu.be/AlRhi6xPrHc"),
      title: "Yatri Review",
      platform: "youtube",
    },
    {
      url: "https://youtu.be/uzTDHZ4qpeY",
      id: extractVideoId("https://youtu.be/uzTDHZ4qpeY"),
      title: "Pokhara World School",
      platform: "youtube",
    },
    // {
    //   url: "https://www.youtube.com/watch?v=0xxofHCllXU",
    //   id: extractVideoId("https://www.youtube.com/watch?v=0xxofHCllXU"),
    //   title: "Pepsi UCL",
    //   platform: "youtube"
    // },
    {
      url: "https://www.youtube.com/watch?v=81D9H2Z3Vcw",
      id: extractVideoId("https://www.youtube.com/watch?v=81D9H2Z3Vcw"),
      title: "Foton",
      platform: "youtube",
    },
    {
      url: "https://www.youtube.com/watch?v=y7BtAkW5LKA",
      id: extractVideoId("https://www.youtube.com/watch?v=y7BtAkW5LKA"),
      title: "Commercial 11",
      platform: "youtube",
    },
    {
      url: "https://www.youtube.com/watch?v=kexCWZSRx7Q",
      id: extractVideoId("https://www.youtube.com/watch?v=kexCWZSRx7Q"),
      title: "Commercial 12",
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
      title: "Commercial 14",
      platform: "youtube",
    },
    {
      url: "https://www.youtube.com/watch?v=D5PdEPD6O14",
      id: extractVideoId("https://www.youtube.com/watch?v=D5PdEPD6O14"),
      title: "Commercial 15",
      platform: "youtube",
    },
    {
      url: "https://youtu.be/NOqkE2YJtkY?si=DAz3MhArAbVKFZDb",
      id: extractVideoId("https://youtu.be/NOqkE2YJtkY?si=DAz3MhArAbVKFZDb"),
      title: "Kantipur TV",
      platform: "youtube",
    },
  ];

  const [hasNextBeenPressed, setHasNextBeenPressed] = useState(false);
  const [featuredVideo, setFeaturedVideo] = useState(allCommercialVideos[0]);
  const [thumbnailStartIndex, setThumbnailStartIndex] = useState(1);
  const thumbnailsPerPage = 4;
  const maxIndex = allCommercialVideos.length - thumbnailsPerPage;

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

  const getEmbedUrl = (video) => {
    if (video.platform === "youtube") {
      return `https://www.youtube.com/embed/${video.id}?autoplay=0&mute=1&controls=1&modestbranding=1&rel=0`;
    } else if (video.platform === "facebook") {
      return `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(video.url)}&show_text=false&width=560&height=315`;
    } else if (video.platform === "instagram") {
      return `https://www.instagram.com/p/${video.id}/embed/`;
    }
    return "";
  };

  const getThumbnailUrl = (video) => {
    if (video.platform === "youtube") {
      return `https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`;
    } else if (video.platform === "facebook") {
      // Facebook Graph API approach (requires access token)
      // return `https://graph.facebook.com/v18.0/${video.id}/picture?access_token=YOUR_ACCESS_TOKEN`;

      // Alternative: Use Facebook's thumbnail service
      return `https://graph.facebook.com/${video.id}/picture?type=large`;
    } else if (video.platform === "instagram") {
      // Instagram doesn't provide direct thumbnail API
      // Option 1: Use a placeholder with Instagram branding
      return "https://via.placeholder.com/480x360/E4405F/ffffff?text=Instagram+Reel";

      // Option 2: You could use a service like Instagram Basic Display API
      // But it requires authentication and is complex for just thumbnails
    }
    // Fallback placeholder
    return "https://via.placeholder.com/480x360/cccccc/666666?text=Video+Thumbnail";
  };

  return (
    <section id="works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        {/* Title */}
        <motion.h2
          className="text-4xl lg:text-6xl mb-10 text-center"
          style={{ fontFamily: "Helvetica Compressed", color: "#000000" }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          COMMERCIALS
        </motion.h2>

        {/* Featured Video */}
        <motion.div
          className="mb-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="relative w-full h-72 lg:h-[500px] bg-gray-200 overflow-hidden">
            <iframe
              src={getEmbedUrl(featuredVideo)}
              title={featuredVideo.title}
              className="w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
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
          {allCommercialVideos
            .slice(thumbnailStartIndex, thumbnailStartIndex + thumbnailsPerPage)
            .map((video, index) => (
              <motion.div
                key={index}
                className="relative h-48 lg:h-40 bg-gray-200 overflow-hidden cursor-pointer group"
                onClick={() => setFeaturedVideo(video)}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={getThumbnailUrl(video)}
                  alt={video.title}
                  className="w-full h-full object-cover"
                />
                {/* Play button overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
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
              style={{ fontFamily: "Helvetica Compressed" }}
              onClick={handlePrevious}
            >
              ← Previous
            </button>
          ) : (
            <div />
          )}

          <button
            className="text-2xl lg:text-3xl hover:text-portfolio-dark-green transition-colors duration-300"
            style={{ fontFamily: "Helvetica Compressed" }}
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
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <motion.h2
          className="text-portfolio-dark-green font-medium text-3xl sm:text-4xl lg:text-6xl mb-8 sm:mb-16 text-center"
          style={{ fontFamily: "Helvetica Compressed" }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          PHOTOS / STILLS
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

const AfterMoviesSection = () => {
  // Extract YouTube video IDs from URLs
  const extractVideoId = (url) => {
    const patterns = [
      /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
      /facebook\.com\/.*\/videos\/(\d+)/,
    ];

    for (const pattern of patterns) {
      const match = url.match(pattern);
      if (match) return match[1];
    }
    return null;
  };

  const allCommercialVideos = [
    {
      url: "https://youtu.be/mWnv5-lHahE",
      id: extractVideoId("https://youtu.be/mWnv5-lHahE"),
      title: "After movie reel",
      platform: "youtube",
    },
    {
      url: "https://www.youtube.com/watch?v=m8BX-viWnoc",
      id: extractVideoId("https://www.youtube.com/watch?v=m8BX-viWnoc"),
      title: "Lumbini Allstars Anthem",
      platform: "youtube",
    },
    {
      url: "https://www.youtube.com/watch?v=uE5IU9oPwJQ",
      id: extractVideoId("https://www.youtube.com/watch?v=uE5IU9oPwJQ"),
      title: "Lumbini Allstars Anthem",
      platform: "youtube",
    },
  ];

  const [hasNextBeenPressed, setHasNextBeenPressed] = useState(false);
  const [featuredVideo, setFeaturedVideo] = useState(allCommercialVideos[0]);
  const [thumbnailStartIndex, setThumbnailStartIndex] = useState(1);
  const thumbnailsPerPage = 4;
  const maxIndex = allCommercialVideos.length - thumbnailsPerPage;

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

  const getEmbedUrl = (video) => {
    if (video.platform === "youtube") {
      return `https://www.youtube.com/embed/${video.id}?autoplay=0&mute=1&controls=1&modestbranding=1&rel=0`;
    } else if (video.platform === "facebook") {
      return `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(video.url)}&show_text=false&width=560&height=315`;
    }
    return "";
  };

  const getThumbnailUrl = (video) => {
    if (video.platform === "youtube") {
      return `https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`;
    }
    return `https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`;
  };

  return (
    <section id="works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        {/* Title */}
        <motion.h2
          className="text-4xl lg:text-6xl mb-10 text-center"
          style={{ fontFamily: "Helvetica Compressed", color: "#000000" }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          AFTER MOVIES
        </motion.h2>

        {/* Featured Video */}
        <motion.div
          className="mb-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="relative w-full h-72 lg:h-[500px] bg-gray-200 overflow-hidden">
            <iframe
              src={getEmbedUrl(featuredVideo)}
              title={featuredVideo.title}
              className="w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
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
          {allCommercialVideos
            .slice(thumbnailStartIndex, thumbnailStartIndex + thumbnailsPerPage)
            .map((video, index) => (
              <motion.div
                key={index}
                className="relative h-48 lg:h-40 bg-gray-200 overflow-hidden cursor-pointer group"
                onClick={() => setFeaturedVideo(video)}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={getThumbnailUrl(video)}
                  alt={video.title}
                  className="w-full h-full object-cover"
                />
                {/* Play button overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
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
              style={{ fontFamily: "Helvetica Compressed" }}
              onClick={handlePrevious}
            >
              ← Previous
            </button>
          ) : (
            <div />
          )}

          <button
            className="text-2xl lg:text-3xl hover:text-portfolio-dark-green transition-colors duration-300"
            style={{ fontFamily: "Helvetica Compressed" }}
            onClick={handleNext}
          >
            Next →
          </button>
        </motion.div>
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
        src: "https://res.cloudinary.com/dzign6pg0/image/upload/v1752211344/Pepsi_mjk1q3.png",
        alt: "Pepsi",
      },
      {
        src: "https://res.cloudinary.com/dzign6pg0/image/upload/v1752211343/Adidas_ihp4iy.png",
        alt: "Adidas",
      },
      {
        src: "https://res.cloudinary.com/dzign6pg0/image/upload/v1752211343/Chanpions_League_q1mnrh.png",
        alt: "Champions League",
      },
      {
        src: "https://res.cloudinary.com/dzign6pg0/image/upload/v1752211344/Unilever_xzfmm9.png",
        alt: "Unilever",
      },
      {
        src: "https://res.cloudinary.com/dzign6pg0/image/upload/v1752211344/Tedx_ljvgef.png",
        alt: "TEDx",
      },
      {
        src: "https://res.cloudinary.com/dzign6pg0/image/upload/v1752211343/Coca_Cola_l4ce9a.png",
        alt: "Coca Cola",
      },
      {
        src: "https://res.cloudinary.com/dzign6pg0/image/upload/v1752211343/Expo_City_Dubai_qptndz.png",
        alt: "Expo City Dubai",
      },
    ],
    [
      {
        src: "https://res.cloudinary.com/dzign6pg0/image/upload/v1752211237/Tuborg_iafgye.png",
        alt: "Tuborg",
      },
      {
        src: "https://res.cloudinary.com/dzign6pg0/image/upload/v1752211415/Yale_University_mgk88h.png",
        alt: "Yale University",
      },
      {
        src: "https://res.cloudinary.com/dzign6pg0/image/upload/v1752211412/Httpool_ri0euy.png",
        alt: "Httpool",
      },
      {
        src: "https://res.cloudinary.com/dzign6pg0/image/upload/v1752211385/Samsung_qc4q9b.png",
        alt: "Samsung",
      },
      {
        src: "https://res.cloudinary.com/dzign6pg0/image/upload/v1752211413/SOS_uazsnq.png",
        alt: "SOS",
      },
      {
        src: "https://res.cloudinary.com/dzign6pg0/image/upload/v1752211412/DAV_fjxice.png",
        alt: "DAV",
      },

    ],
    // Row 2
    [
      {
        src: "https://res.cloudinary.com/dzign6pg0/image/upload/v1752211412/Khalti_tquumc.png",
        alt: "Khalti",
      },
      {
        src: "https://res.cloudinary.com/dzign6pg0/image/upload/v1752211234/Seres_odqyyp.png",
        alt: "Seres",
      },
      {
        src: "https://res.cloudinary.com/dzign6pg0/image/upload/v1752211235/Skoda_lgpmzg.png",
        alt: "Skoda",
      },
      {
        src: "https://res.cloudinary.com/dzign6pg0/image/upload/v1752211233/Foton_bbyiyb.png",
        alt: "Foton",
      },
      {
        src: "https://res.cloudinary.com/dzign6pg0/image/upload/v1752211238/Yamaha_jovsop.png",
        alt: "Yamaha",
      },
      {
        src: "https://res.cloudinary.com/dzign6pg0/image/upload/v1752211232/Changan_wk0gzr.png",
        alt: "Changan",
      },
      {
        src: "https://res.cloudinary.com/dzign6pg0/image/upload/v1752211234/Niu_ifpxku.png",
        alt: "Niu",
      },

    ],
    // Row 3
    [
      {
        src: "https://res.cloudinary.com/dzign6pg0/image/upload/v1752211412/KMG_z5smgs.png",
        alt: "KMG",
      },

      {
        src: "https://res.cloudinary.com/dzign6pg0/image/upload/v1752211385/Ruslan_sa4aoz.png",
        alt: "Ruslan",
      },
      {
        src: "https://res.cloudinary.com/dzign6pg0/image/upload/v1752211384/Gorkha_Brewery_a0xs61.png",
        alt: "Gorkha Brewery",
      },

      {
        src: "https://res.cloudinary.com/dzign6pg0/image/upload/v1752211384/Nepal_Tourism_Board_sgefpx.png",
        alt: "Nepal Tourism Board",
      },
      {
        src: "https://res.cloudinary.com/dzign6pg0/image/upload/v1752211384/Crossfire_ta6avf.png",
        alt: "Crossfire",
      },
      {
        src: "https://res.cloudinary.com/dzign6pg0/image/upload/v1752211385/Yatri_hfjq2j.png",
        alt: "Yatri",
      },
    ],

  ];

  // Special sizing rules for specific logos
  const getLogoSize = (alt) => {
    const sizeMap = {
      "Gorkha Brewery": "w-24 h-24 lg:w-32 lg:h-32",
      Crossfire: "w-20 h-20 lg:w-24 lg:h-24",
    };
    return sizeMap[alt] || "w-24 h-24 lg:w-20 lg:h-20";
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const logoVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const LogoGrid = ({ logos, rowIndex }) => (
    <motion.div
      className="flex justify-center items-center gap-10 lg:gap-20 mb-8 flex-wrap"
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
          transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
          whileHover={{ scale: 1.1 }}
        >
          <img
            src={logo.src}
            alt={logo.alt}
            className={`object-contain filter brightness-0 invert ${getLogoSize(logo.alt)}`}
            loading="lazy"
          />
        </motion.div>
      ))}
    </motion.div>
  );

  return (
    <section
      className="py-16"
      style={{
        background: "linear-gradient(to bottom, white 132px, black 132px)",
      }}
    >
      <div className="max-w-full">
        {/* Title */}
        <motion.h2
          className="text-4xl lg:text-6xl mb-16 text-center"
          style={{ fontFamily: "Helvetica Compressed", color: "#000000" }}
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
              <LogoGrid key={rowIndex} logos={row} rowIndex={rowIndex} />
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
      { name: "Aastha\nGill", color: "text-black" },
      { name: "Alok", color: "text-gray-500" },
      { name: "Anuv\nJain", color: "text-black" },
      { name: "Arijit\nSingh", color: "text-gray-500" },
      { name: "Atif\nAslam", color: "text-black" },
    ],
    [
      { name: "Clean\nBandit", color: "text-black" },
      { name: "Diplo", color: "text-gray-500" },
      { name: "Diljit\nDosanjh", color: "text-black" },
      { name: "Divine", color: "text-gray-500" },
      { name: "Green\nDay", color: "text-black" },
      { name: "King", color: "text-gray-500" },
      { name: "Sajjan Raj Vaidya", color: "text-black" },
      { name: "Lollapalooza\nIndia", color: "text-gray-500" },
    ],
    [
      { name: "Louis\nTomlinson", color: "text-black" },
      { name: "Manu\nChao", color: "text-gray-500" },
      { name: "Maroon\n5", color: "text-black" },
      { name: "Martin\nGarrix", color: "text-gray-500" },
      { name: "Prateek\nKuhad", color: "text-black" },
      { name: "Rishab Rikhiram\nSharma", color: "text-gray-500" },
    ],
    [
      { name: "Shawn\nMendes", color: "text-black" },
      { name: "Neetesh\nJung Kunwar", color: "text-gray-500" },
      { name: "Arthur\nGun", color: "text-black" },
      { name: "Underside", color: "text-gray-500" },
      { name: "1974AD", color: "text-black" },
      { name: "555", color: "text-gray-500" },
      { name: "Sushant\nKC", color: "text-black" },
    ],
  ];

  return (
    <section className="py-40 bg-white">
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
                  className={`font-nunito font-bold text-lg text-center whitespace-pre-line ${artist.color}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
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

const Footer = () => {
  const socialIcons = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/5d7233e91a7ad3aa21da77027e2d10192eba739a?width=100",
      alt: "Twitter",
      href: "https://www.linkedin.com/in/prashannabajracharya/",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/c97ad2209f10b353eb66e4603f111ec06780f9fb?width=106",
      alt: "Facebook",
      href: "https://www.youtube.com/@untitledNepal",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/c1a7fcba71d20d8c3e72f6740a392f110eee9a8b?width=106",
      alt: "Instagram",
      href: "https://www.behance.net/prashanbajrach",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/47a0152d859b745c62e7a68a20b8483b89cf7671?width=100",
      alt: "LinkedIn",
      href: "https://www.instagram.com/prashannabajracharya/",
    },
  ];

  return (
    <footer id="contact" className="bg-portfolio-dark-green">
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
              <h3 className="text-white font-bold text-lg mb-4" style={{fontFamily:"Helvetica"}}>
                CONNECT WITH ME:
              </h3>
              <div className="flex space-x-4">
                {socialIcons.map((icon, index) => (
                  <motion.a
                    key={icon.alt}
                    href={icon.href}
                    className="block"
                    target="_blank"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <img src={icon.src} alt={icon.alt} className="w-12 h-12" />
                  </motion.a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-white  text-xs mb-4" style={{fontFamily:"Helvetica"}}>
                FOR BUSINESS ENQUIRY:
              </h3>
              <a
                href="mailto:Prashanna2022@gmail.com"
                className="text-portfolio-accent-gold text-2xl lg:text-3xl hover:underline"
                style={{ fontFamily: "Helvetica" }}
              >
                Prashanna2022@gmail.com
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
      <CommercialSection />
      <PhotoGallery openModal={openModal} />
      <AfterMoviesSection />
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
                             isMobile = false,
                           }: {
  images: string[];
  direction: "ltr" | "rtl";
  openModal: (src: string, alt: string) => void;
  isMobile?: boolean;
}) => {
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
              alt={`Photo ${i % images.length}`}
              className={`${getImageSize(i)} object-cover mr-2 cursor-pointer flex-shrink-0 rounded-sm`}
              onClick={() => openModal(img, `Photo ${i % images.length}`)}
            />
          ),
        )}
      </div>
    </div>
  );
};
