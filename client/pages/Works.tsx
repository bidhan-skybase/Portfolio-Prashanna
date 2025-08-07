import React, { useState } from 'react';
import { motion } from 'framer-motion';

const AllWorks = () => {
  const [activeCategory, setActiveCategory] = useState('all-works');

  const categories = [
    { id: 'all-works', name: 'All Works', title: 'All Works', subtitle: 'All of my best works in one place.' },
    { id: 'documentaries', name: 'Documentaries', title: 'Documentaries', subtitle: 'Exploring real stories and powerful narratives.' },
    { id: 'music-videos', name: 'Music Videos', title: 'Music Videos', subtitle: 'Creative visual interpretations of musical artistry.' },
    { id: 'commercials', name: 'Commercials', title: 'Commercials', subtitle: 'Brand storytelling through compelling video content.' },
    { id: 'after-movies', name: 'After Movies', title: 'After Movies', subtitle: 'Capturing the essence of memorable events.' }
  ];

  // Sample work items for each category
  const workItems = {
    'all-works': Array(6).fill(null).map((_, i) => ({ id: i, title: `Project ${i + 1}`, type: 'Mixed' })),
    'documentaries': Array(4).fill(null).map((_, i) => ({ id: i, title: `Documentary ${i + 1}`, type: 'Documentary' })),
    'music-videos': Array(5).fill(null).map((_, i) => ({ id: i, title: `Music Video ${i + 1}`, type: 'Music Video' })),
    'commercials': Array(6).fill(null).map((_, i) => ({ id: i, title: `Commercial ${i + 1}`, type: 'Commercial' })),
    'after-movies': Array(3).fill(null).map((_, i) => ({ id: i, title: `After Movie ${i + 1}`, type: 'After Movie' }))
  };

  const currentCategory = categories.find(cat => cat.id === activeCategory);
  const currentItems = workItems[activeCategory] || [];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Section */}
      <motion.div
        className="bg-gray-200 py-16 px-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h1
            className="text-5xl font-bold text-black mb-4"
            key={currentCategory.title}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {currentCategory.title}
          </motion.h1>
          <motion.p
            className="text-xl text-gray-700"
            key={currentCategory.subtitle}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {currentCategory.subtitle}
          </motion.p>
        </div>
      </motion.div>

      <div className="flex">
        {/* Sidebar */}
        <motion.div
          className="w-64 bg-gray-300 min-h-screen p-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <nav className="space-y-2">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 ${
                  activeCategory === category.id
                    ? 'bg-black text-white font-semibold'
                    : 'text-gray-700 hover:bg-gray-400 hover:text-black'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {category.name}
              </motion.button>
            ))}
          </nav>
        </motion.div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {currentItems.map((item, index) => (
              <motion.div
                key={`${activeCategory}-${item.id}`}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Placeholder for video/image thumbnail */}
                <div className="h-48 bg-gray-100 flex items-center justify-center">
                  <div className="text-gray-400 text-center">
                    <div className="w-16 h-16 mx-auto mb-2 bg-gray-300 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-sm">Video Thumbnail</p>
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="font-semibold text-lg text-gray-800 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.type}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Empty state */}
          {currentItems.length === 0 && (
            <motion.div
              className="text-center py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-gray-500 text-lg">No works found in this category.</p>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllWorks;
