import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

interface NavigationProps {
  BgColor?: string;
}

const Navigation = ({ BgColor }: NavigationProps) => {
  const location = useLocation();

  const navItems = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT', path: '/#about' },
    { name: 'WORKS', path: '/works' },
    { name: 'CONTACT', path: '/#contact' },
  ];

  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Scroll to top when route changes (but not for hash changes)
  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight * 0.8;
      setScrolled(window.scrollY > heroHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Handle navigation clicks
  const handleNavClick = (path: string) => {
    closeMenu();

    // If navigating to a different page (not hash link), scroll to top
    if (!path.startsWith('/#') && path !== location.pathname) {
      // Use setTimeout to ensure navigation happens first
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'instant' });
      }, 50);
    }
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
        <div className="flex justify-between items-center px-4 py-3 sm:px-6 sm:py-4 md:px-8 md:py-6 max-w-full">
          {/* Logo / Title */}
          <div className="flex-shrink-0">
            <Link
              to="/"
              onClick={() => handleNavClick('/')}
              className="block"
            >
              <img
                src="/untitled.png"
                alt="Logo"
                className="h-8 w-auto sm:h-10 md:h-12 max-w-full object-contain"
              />
            </Link>
          </div>

          {/* Hamburger Menu Button */}
          <motion.button
            className="text-white z-60 relative flex-shrink-0 p-2 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 rounded"
            onClick={toggleMenu}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            whileTap={{ scale: 0.95 }}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <div className="w-5 h-5 sm:w-6 sm:h-6 flex flex-col justify-center items-center">
              <motion.span
                className={`block w-full h-0.5 bg-white mb-1 transition-all duration-300 ${
                  isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                }`}
              />
              <motion.span
                className={`block w-full h-0.5 bg-white mb-1 transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <motion.span
                className={`block w-full h-0.5 bg-white transition-all duration-300 ${
                  isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                }`}
              />
            </div>
          </motion.button>
        </div>
      </motion.nav>

      {/* FULLSCREEN OVERLAY MENU */}
      <motion.div
        className={`fixed inset-0 bg-portfolio-dark-green z-40 overflow-hidden ${
          isMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
        initial={{ opacity: 0 }}
        animate={{ opacity: isMenuOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex flex-col items-center justify-center h-full w-full px-4 sm:px-6 md:px-8">
          <div className="flex flex-col items-center space-y-6 sm:space-y-8 md:space-y-10 w-full max-w-2xl">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                className="w-full text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: isMenuOpen ? 1 : 0,
                  y: isMenuOpen ? 0 : 20,
                }}
                transition={{
                  duration: 0.3,
                  delay: isMenuOpen ? index * 0.1 : 0,
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  to={item.path}
                  onClick={() => handleNavClick(item.path)}
                  className="block w-full text-white hover:text-gray-300 transition-colors duration-300 py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                  style={{
                    fontFamily: 'Staatliches',
                    fontSize: 'clamp(2rem, 8vw, 4rem)',
                    lineHeight: '1.1'
                  }}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Close button for better accessibility */}
          <motion.button
            onClick={closeMenu}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8 text-white hover:text-gray-300 transition-colors duration-300 p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: isMenuOpen ? 1 : 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            aria-label="Close menu"
          >
            <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </motion.button>
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
