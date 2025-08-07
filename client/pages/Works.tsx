import React, { useState } from "react";
import { motion } from "framer-motion";

const AllWorks = () => {
  const [activeFilter, setActiveFilter] = useState("Show all");

  const filters = [
    "Show all",
    "Purpose",
    "Branding",
    "Webflow",
    "strategy",
    "Digital",
    "Graphic Design",
    "Content",
    "Packaging",
    "Editorial",
    "Illustration",
    "Conception",
    "tourism",
    "Gastronomy",
    "Education",
    "Health",
    "Comedy",
    "cinema",
    "Interior",
  ];

  // Sample project data
  const projects = [
    {
      id: 1,
      title: "Luxury Hotel Campaign",
      category: "tourism",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop",
      tags: ["Branding", "Content", "tourism"],
    },
    {
      id: 2,
      title: "Modern Brand Identity",
      category: "Branding",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      tags: ["Branding", "Graphic Design", "Digital"],
    },
    {
      id: 3,
      title: "Restaurant Experience",
      category: "Gastronomy",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop",
      tags: ["Gastronomy", "Content", "Editorial"],
    },
    {
      id: 4,
      title: "Educational Platform",
      category: "Education",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
      tags: ["Education", "Digital", "Webflow"],
    },
    {
      id: 5,
      title: "Health & Wellness Brand",
      category: "Health",
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop",
      tags: ["Health", "Branding", "Packaging"],
    },
    {
      id: 6,
      title: "Cinema Documentary",
      category: "cinema",
      image:
        "https://images.unsplash.com/photo-1489599732833-8f702b8a5b9e?w=600&h=400&fit=crop",
      tags: ["cinema", "Content", "Editorial"],
    },
    {
      id: 7,
      title: "Interior Design Showcase",
      category: "Interior",
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop",
      tags: ["Interior", "Illustration", "Content"],
    },
    {
      id: 8,
      title: "Comedy Show Branding",
      category: "Comedy",
      image:
        "https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?w=600&h=400&fit=crop",
      tags: ["Comedy", "Graphic Design", "Digital"],
    },
  ];

  const filteredProjects =
    activeFilter === "Show all"
      ? projects
      : projects.filter((project) => project.tags.includes(activeFilter));

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
              className="lg:w-1/2 lg:pt-80"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                For me, creativity isn’t a skill — it’s a way of feeling. Every
                shot, every cut, every frame is a chance to connect with
                something real. I don’t just film projects; I help people tell
                stories that deserve to be remembered.
              </p>
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
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
            key={activeFilter}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="group cursor-pointer relative"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="relative overflow-hidden rounded-sm">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Hover Overlay with Title and Tags */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-75 transition-all duration-300 flex flex-col justify-end p-4">
                    <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                      <h3 className="text-white text-lg font-semibold mb-2" style={{ fontFamily: "Staatliches" }}>
                        {project.title}
                      </h3>
                      <div className="flex flex-wrap gap-1">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs text-white bg-white bg-opacity-20 px-2 py-1 rounded-sm backdrop-blur-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Empty state */}
          {filteredProjects.length === 0 && (
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
      </div>
    </div>
  );
};

export default AllWorks;
