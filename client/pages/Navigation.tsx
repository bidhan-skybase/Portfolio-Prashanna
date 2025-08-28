import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface NavigationProps {
  BgColor?: string;
}

const Navigation = ({ BgColor }: NavigationProps) => {
  const navItems = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT', path: '/#about' },
    { name: 'WORKS', path: '/works' },
    { name: 'CONTACT', path: '/#contact' },
  ];
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight * 0.8;
      setScrolled(window.scrollY > heroHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* NAVBAR */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          BgColor
            ? ''
            : scrolled
              ? 'bg-portfolio-dark-green shadow-lg backdrop-blur-sm'
              : 'bg-transparent'
        }`}
        style={{
          backgroundColor: BgColor || undefined
        }}
      >
        <div className="flex justify-between items-center px-6 py-4 md:px-8 md:py-6">
          {/* Logo / Title */}
          <div className="h-[12px] w-[128px] mb-8" >
            <Link to="/"><img src="/untitled.png"></img></Link>
          </div>

          {/* Hamburger Menu Button - visible on all screen sizes */}
          <motion.button
            className="text-white z-60 relative"
            onClick={toggleMenu}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <motion.span
                className={`block w-6 h-0.5 bg-white mb-1 transition-all duration-300 ${
                  isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                }`}
              />
              <motion.span
                className={`block w-6 h-0.5 bg-white mb-1 transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <motion.span
                className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                  isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                }`}
              />
            </div>
          </motion.button>
        </div>
      </motion.nav>

      {/* FULLSCREEN OVERLAY MENU */}
      <motion.div
        className={`fixed inset-0 bg-portfolio-dark-green z-40 ${
          isMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
        initial={{ opacity: 0 }}
        animate={{ opacity: isMenuOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-10">
          {navItems.map((item, index) => (
            <motion.div
              key={item.name}
              className="text-white text-6xl hover:text-gray-500 transition-colors duration-300"
              style={{ fontFamily: 'Staatliches' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: isMenuOpen ? 1 : 0,
                y: isMenuOpen ? 0 : 20,
              }}
              transition={{
                duration: 0.3,
                delay: isMenuOpen ? index * 0.1 : 0,
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to={item.path} onClick={closeMenu}>
                {item.name}
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* BACKDROP */}
      {isMenuOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={closeMenu}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </>
  );
};

export default Navigation;
