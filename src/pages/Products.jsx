import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import HeroBanner from "../components/HeroBanner";
import { FiGlobe, FiSmartphone, FiLayers, FiClock } from "react-icons/fi";

const productCategories = [
    {
    category: "Application",
    icon: <FiSmartphone />,
    products: [
      {
        title: "PlayTime Application",
        desc: "Entertainment streaming platform",
        status: "Coming Soon"
      }
    ]
  },
  {
    category: "Website",
    icon: <FiGlobe />,
    products: []
  },

  {
    category: "Software",
    icon: <FiLayers />,
    products: []
  }
];

const Products = () => {
  const { theme } = useTheme();
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <div className={`overflow-x-hidden min-h-screen transition-colors duration-500 bg-transparent ${theme === 'dark' ? 'text-green-50' : 'text-black'}`}>

      <HeroBanner
        title="Proprietary"
        subtitle="Digital Assets"
        highlight="JodTech Products"
        theme={theme}
        image="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200"
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
                  ? "bg-green-600 text-white shadow-lg shadow-dg-700/50 scale-105"
                  : theme === 'dark'
                  ? "bg-white/10 text-gray-300 hover:bg-white/20"
                  : "bg-gray-100 text-green-700 hover:bg-gray-200"
              }`}
            >
              {cat.icon}
              {cat.category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-3xl md:text-4xl font-black mb-10 text-center text-green-600">
            {productCategories[activeCategory].category} Products
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCategories[activeCategory].products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={`p-8 rounded-[2rem] transition-all duration-500 hover:shadow-2xl h-full flex flex-col ${
                  theme === 'dark'
                    ? 'bg-white/5 border border-white/10 hover:bg-white/10'
                    : 'bg-white border border-gray-100 hover:bg-gray-50'
                }`}
              >
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-black leading-tight flex-1">{product.title}</h3>
                    {product.status === "Coming Soon" && (
                      <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-600 text-xs font-black ml-2 whitespace-nowrap">
                        <FiClock className="w-3 h-3" />
                        Coming Soon
                      </div>
                    )}
                    {product.status === "Live" && (
                      <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-dg-700/20 text-green-600 text-xs font-black ml-2 whitespace-nowrap">
                        ✓ Live
                      </div>
                    )}
                  </div>
                  <p className={`text-base leading-relaxed mb-6 ${theme === 'dark' ? 'text-gray-400' : 'text-black'}`}>
                    {product.desc}
                  </p>
                </div>

                <button
                  disabled={product.status === "Coming Soon"}
                  className={`w-full py-3 rounded-full font-black transition-all duration-300 ${
                    product.status === "Coming Soon"
                      ? theme === 'dark'
                        ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
                        : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      : 'bg-green-600 text-white hover:bg-dg-600 transform hover:-translate-y-1 shadow-lg'
                  }`}
                >
                  {product.status === "Coming Soon" ? "Coming Soon" : "Explore"}
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Products;
