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
  "https://res.cloudinary.com/dzign6pg0/image/upload/v1752218512/_MG_1932_Medium_rgqyp6.jpg"
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
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/hero.mp4" type="video/mp4" />
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
                    className="w-32 h-32 md:w-28 md:h-28 lg:w-32 lg:h-32 object-contain"
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
  const extractVideoId = (url) => {
    const patterns = [
      /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
      /facebook\.com\/.*\/videos\/(\d+)/,
      /instagram\.com\/(?:p|reel)\/([A-Za-z0-9_-]+)/
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
      id: extractVideoId("https://www.facebook.com/singaporebeverages/videos/732463532422643/"),
      title: "Singapore Beverages",
      platform: "facebook"
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
      platform: "youtube"
    },
    {
      url: "https://www.youtube.com/watch?v=S7DRJNuYrhs",
      id: extractVideoId("https://www.youtube.com/watch?v=S7DRJNuYrhs"),
      title: "Lumbini Allstars Anthem",
      platform: "youtube"
    },

    {
      url: "https://youtu.be/pjCOsZZPB3c",
      id: extractVideoId("https://youtu.be/pjCOsZZPB3c"),
      title: "Naami Launch Video",
      platform: "youtube"
    },
    {
      url: "https://youtu.be/ZmxUV8x5Bt4",
      id: extractVideoId("https://youtu.be/ZmxUV8x5Bt4"),
      title: "Skoda Testimonial",
      platform: "youtube"
    },
    {
      url: "https://youtu.be/tI--w9k7P0g",
      id: extractVideoId("https://youtu.be/tI--w9k7P0g"),
      title: "Samsung Testimonial",
      platform: "youtube"
    },
    {
      url: "https://youtu.be/AlRhi6xPrHc",
      id: extractVideoId("https://youtu.be/AlRhi6xPrHc"),
      title: "Yatri Review",
      platform: "youtube"
    },
    {
      url: "https://youtu.be/uzTDHZ4qpeY",
      id: extractVideoId("https://youtu.be/uzTDHZ4qpeY"),
      title: "Pokhara World School",
      platform: "youtube"
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
      platform: "youtube"
    },
    {
      url: "https://www.youtube.com/watch?v=y7BtAkW5LKA",
      id: extractVideoId("https://www.youtube.com/watch?v=y7BtAkW5LKA"),
      title: "Commercial 11",
      platform: "youtube"
    },
    {
      url: "https://www.youtube.com/watch?v=kexCWZSRx7Q",
      id: extractVideoId("https://www.youtube.com/watch?v=kexCWZSRx7Q"),
      title: "Commercial 12",
      platform: "youtube"
    },
    {
      url: "https://www.youtube.com/watch?v=Nylgt4CtsKo",
      id: extractVideoId("https://www.youtube.com/watch?v=Nylgt4CtsKo"),
      title: "Commercial 13",
      platform: "youtube"
    },
    {
      url: "https://www.youtube.com/watch?v=IUigcSW0lfo&list=PLN88_j1xLvkU6PyWd_CD7TZEFeIzJsS8T",
      id: extractVideoId("https://www.youtube.com/watch?v=IUigcSW0lfo&list=PLN88_j1xLvkU6PyWd_CD7TZEFeIzJsS8T"),
      title: "Commercial 14",
      platform: "youtube"
    },
    {
      url: "https://www.youtube.com/watch?v=D5PdEPD6O14",
      id: extractVideoId("https://www.youtube.com/watch?v=D5PdEPD6O14"),
      title: "Commercial 15",
      platform: "youtube"
    },
    {
      url: "https://youtu.be/NOqkE2YJtkY?si=DAz3MhArAbVKFZDb",
      id: extractVideoId("https://youtu.be/NOqkE2YJtkY?si=DAz3MhArAbVKFZDb"),
      title: "Kantipur TV",
      platform: "youtube"
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
          style={{ fontFamily: "CustomRegular", color: "#254736" }}
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
      <div className="w-full px-[5rem]">
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


const AfterMoviesSection = () => {
  // Extract YouTube video IDs from URLs
  const extractVideoId = (url) => {
    const patterns = [
      /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
      /facebook\.com\/.*\/videos\/(\d+)/
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
      platform: "youtube"
    },
    {
      url: "https://www.youtube.com/watch?v=m8BX-viWnoc",
      id: extractVideoId("https://www.youtube.com/watch?v=m8BX-viWnoc"),
      title: "Lumbini Allstars Anthem",
      platform: "youtube"
    },
    {
      url: "https://www.youtube.com/watch?v=uE5IU9oPwJQ",
      id: extractVideoId("https://www.youtube.com/watch?v=uE5IU9oPwJQ"),
      title: "Lumbini Allstars Anthem",
      platform: "youtube"
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
          style={{ fontFamily: "CustomRegular", color: "#254736" }}
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
const BrandsAndArtistsSection = () => {
  const brandLogos = [
    // Row 1
    {
      src: "https://res.cloudinary.com/dzign6pg0/image/upload/v1752211344/Pepsi_mjk1q3.png",
      alt: "Pepsi",
      size: "w-20 h-20",
    },
    {
      src: "https://res.cloudinary.com/dzign6pg0/image/upload/v1752211343/Adidas_ihp4iy.png",
      alt: "Adidas",
      size: "w-28 h-28",
    },
    {
      src: "https://res.cloudinary.com/dzign6pg0/image/upload/v1752211343/Chanpions_League_q1mnrh.png",
      alt: "Champions League",
      size: "w-28 h-28",
    },
    {
      src: "https://res.cloudinary.com/dzign6pg0/image/upload/v1752211344/Unilever_xzfmm9.png",
      alt: "Unilever",
      size: "w-28 h-28",
    },
    {
      src: "https://res.cloudinary.com/dzign6pg0/image/upload/v1752211344/Tedx_ljvgef.png",
      alt: "TEDx",
      size: "w-28 h-28",
    },
    {
      src: "https://res.cloudinary.com/dzign6pg0/image/upload/v1752211343/Coca_Cola_l4ce9a.png",
      alt: "Coca Cola",
      size: "w-28 h-28",
    },
    {
      src: "https://res.cloudinary.com/dzign6pg0/image/upload/v1752211343/Expo_City_Dubai_qptndz.png",
      alt: "Expo City Dubai",
      size: "w-28 h-28",
    },
    // Row 2
    {
      src: "https://res.cloudinary.com/dzign6pg0/image/upload/v1752211234/Seres_odqyyp.png",
      alt: "Seres",
      size: "w-28 h-28",
    },
    {
      src: "https://res.cloudinary.com/dzign6pg0/image/upload/v1752211235/Skoda_lgpmzg.png",
      alt: "Skoda",
      size: "w-28 h-28",
    },
    {
      src: "https://res.cloudinary.com/dzign6pg0/image/upload/v1752211233/Foton_bbyiyb.png",
      alt: "Foton",
      size: "w-28 h-28",
    },
    {
      src: "https://res.cloudinary.com/dzign6pg0/image/upload/v1752211238/Yamaha_jovsop.png",
      alt: "Yamaha",
      size: "w-28 h-28",
    },
    {
      src: "https://res.cloudinary.com/dzign6pg0/image/upload/v1752211232/Changan_wk0gzr.png",
      alt: "Changan",
      size: "w-28 h-28",
    },
    {
      src: "https://res.cloudinary.com/dzign6pg0/image/upload/v1752211234/Niu_ifpxku.png",
      alt: "Niu",
      size: "w-28 h-28",
    },
    {
      src: "https://res.cloudinary.com/dzign6pg0/image/upload/v1752211237/Tuborg_iafgye.png",
      alt: "Tuborg",
      size: "w-28 h-28",
    },
    // Row 3
    {
      src: "https://res.cloudinary.com/dzign6pg0/image/upload/v1752211385/Samsung_qc4q9b.png",
      alt: "Samsung",
      size: "w-28 h-28",
    },
    {
      src: "https://res.cloudinary.com/dzign6pg0/image/upload/v1752211385/Ruslan_sa4aoz.png",
      alt: "Ruslan",
      size: "w-28 h-28",
    },
    {
      src: "https://res.cloudinary.com/dzign6pg0/image/upload/v1752211384/Gorkha_Brewery_a0xs61.png",
      alt: "Gorkha Brewery",
      size: "w-32 h-32",
    },
    {
      src: "https://res.cloudinary.com/dzign6pg0/image/upload/v1752211384/Nepal_Tourism_Board_sgefpx.png",
      alt: "Nepal Tourism Board",
      size: "w-28 h-28",
    },
    {
      src: "https://res.cloudinary.com/dzign6pg0/image/upload/v1752211384/Crossfire_ta6avf.png",
      alt: "Crossfire",
      size: "w-28 h-28",
    },
    {
      src: "https://res.cloudinary.com/dzign6pg0/image/upload/v1752211385/Yatri_hfjq2j.png",
      alt: "Yatri",
      size: "w-28 h-28",
    },
    // Row 4
    {
      src: "https://res.cloudinary.com/dzign6pg0/image/upload/v1752211412/KMG_z5smgs.png",
      alt: "KMG",
      size: "w-28 h-28",
    },
    {
      src: "https://res.cloudinary.com/dzign6pg0/image/upload/v1752211415/Yale_University_mgk88h.png",
      alt: "Yale University",
      size: "w-28 h-28",
    },
    {
      src: "https://res.cloudinary.com/dzign6pg0/image/upload/v1752211412/Khalti_tquumc.png",
      alt: "Khalti",
      size: "w-28 h-28",
    },
    {
      src: "https://res.cloudinary.com/dzign6pg0/image/upload/v1752211412/Httpool_ri0euy.png",
      alt: "Httpool",
      size: "w-28 h-28",
    },
    {
      src: "https://res.cloudinary.com/dzign6pg0/image/upload/v1752211413/SOS_uazsnq.png",
      alt: "SOS",
      size: "w-28 h-28",
    },
    {
      src: "https://res.cloudinary.com/dzign6pg0/image/upload/v1752211412/DAV_fjxice.png",
      alt: "DAV",
      size: "w-28 h-28",
    },
  ];

  return (
    <section className="py-20">
      <div className="mx-auto">
        <motion.h2
          className="text-center text-4xl lg:text-6xl mb-16"
          style={{ fontFamily: "CustomRegular" }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          BRANDS & ARTISTS
        </motion.h2>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-4 sm:gap-6 items-center justify-items-center px-4 sm:px-10 lg:px-40 py-10 sm:py-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          style={{ backgroundColor: "#254736" }}
        >
          {brandLogos.map((logo, index) => (
            <motion.div
              key={index}
              className="flex items-center justify-center p-2 sm:p-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1 }}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className={`${logo.size} min-w-[40px] min-h-[40px] object-contain filter brightness-0 invert`}
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
      href:"https://www.linkedin.com/in/prashannabajracharya/"
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/c97ad2209f10b353eb66e4603f111ec06780f9fb?width=106",
      alt: "Facebook",
      href:"https://www.youtube.com/@untitledNepal"
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/c1a7fcba71d20d8c3e72f6740a392f110eee9a8b?width=106",
      alt: "Instagram",
      href:"https://www.behance.net/prashanbajrach"
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/47a0152d859b745c62e7a68a20b8483b89cf7671?width=100",
      alt: "LinkedIn",
      href: "https://www.instagram.com/prashannabajracharya/"
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
      return "w-100 h-100 lg:w-[40rem] lg:h-80";
    } else {
      return "w-60 h-0 lg:w-60 lg:h-80";
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
