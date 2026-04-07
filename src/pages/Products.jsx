import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import HeroBanner from "../components/HeroBanner";
import { FiGlobe, FiSmartphone, FiLayers } from "react-icons/fi";

const productCategories = [
  {
    category: "Application",
    icon: <FiSmartphone />,
  },
  {
    category: "Website",
    icon: <FiGlobe />,
  },
  {
    category: "Software",
    icon: <FiLayers />,
  },
];

const Products = () => {
  const { theme } = useTheme();
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <div
      className={`overflow-x-hidden min-h-screen transition-colors duration-500 bg-transparent ${
        theme === "dark" ? "text-green-50" : "text-black"
      }`}
    >
      <HeroBanner
        title="Proprietary"
        subtitle="Digital Assets"
        highlight="JodTech Products"
        theme={theme}
        image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />

      <div className="max-w-7xl mx-auto px-6 py-24 space-y-16">
        
        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4">
          {productCategories.map((cat, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(index)}
              className={`px-6 py-3 rounded-full font-black text-sm md:text-base transition-all duration-300 flex items-center gap-2 ${
                activeCategory === index
                  ? "bg-green-600 text-white shadow-lg shadow-green-700/50 scale-105"
                  : theme === "dark"
                  ? "bg-white/10 text-gray-300 hover:bg-white/20"
                  : "bg-gray-100 text-green-700 hover:bg-gray-200"
              }`}
            >
              {cat.icon}
              {cat.category}
            </button>
          ))}
        </div>

        {/* Coming Soon Section */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col items-center justify-center py-20"
        >
          <h2 className="text-3xl md:text-4xl font-black mb-6 text-center text-green-600">
            {productCategories[activeCategory].category} Products
          </h2>

          <div
            className={`px-10 py-6 rounded-full font-black text-lg ${
              theme === "dark"
                ? "bg-white/10 text-yellow-400"
                : "bg-yellow-100 text-yellow-600"
            }`}
          >
           Coming Soon
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Products;