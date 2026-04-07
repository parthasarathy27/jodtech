import React from "react";
import { useTheme } from "../context/ThemeContext";
import HeroBanner from "../components/HeroBanner";
import { motion } from "framer-motion";
import { FiLayout, FiSmartphone, FiCode, FiShoppingCart, FiTrendingUp, FiSettings, FiDatabase, FiCalendar, FiMessageSquare, FiLock } from "react-icons/fi";

const services = [
  {
    title: "UI/UX Design",
    desc: "We craft intuitive and engaging user experiences.",
    advantage: "User-centered design with modern aesthetics.",
    tech: "Figma, Adobe XD, Sketch",
    img: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=800",
    icon: <FiLayout />
  },
  {
    title: "Mobile App Development",
    desc: "Build high-performance Android & iOS apps.",
    advantage: "Scalable, fast, and user-friendly apps.",
    tech: "React Native, Flutter",
    img: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=800",
    icon: <FiSmartphone />
  },
  {
    title: "Web Development",
    desc: "Modern responsive websites and web apps.",
    advantage: "SEO-friendly and lightning-fast websites.",
    tech: "React, Node.js, Next.js",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800",
    icon: <FiCode />
  },
  {
    title: "E-commerce",
    desc: "Launch powerful online stores with seamless UX.",
    advantage: "Secure payments and scalable platforms.",
    tech: "Shopify, WooCommerce",
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800",
    icon: <FiShoppingCart />
  },
  {
    title: "Digital Marketing",
    desc: "Grow your brand with data-driven strategies.",
    advantage: "Higher reach and conversion rates.",
    tech: "SEO, Ads, Social Media",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800",
    icon: <FiTrendingUp />
  },
  {
    title: "DevOps",
    desc: "Automate and streamline development workflows.",
    advantage: "Fast deployment and reliability.",
    tech: "AWS, Docker, CI/CD",
    img: "https://images.unsplash.com/photo-1600267175161-cfaa711b4a81?q=80&w=800",
    icon: <FiSettings />
  },
  {
    title: "Inventory Software",
    desc: "Manage stock and operations efficiently.",
    advantage: "Real-time tracking and analytics.",
    tech: "Custom ERP",
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800",
    icon: <FiDatabase />
  },
  {
    title: "Booking Applications",
    desc: "Smart booking systems for businesses.",
    advantage: "Easy scheduling and automation.",
    tech: "Full-stack solutions",
    img: "https://images.unsplash.com/photo-1508780709619-79562169bc64?q=80&w=800",
    icon: <FiCalendar />
  },
  {
    title: "AI Chat Bot",
    desc: "Automate conversations with intelligent bots.",
    advantage: "24/7 support and smart responses.",
    tech: "AI, NLP",
    img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800",
    icon: <FiMessageSquare />
  },
  {
    title: "Backend Development",
    desc: "Robust and scalable backend systems.",
    advantage: "Secure, fast, and efficient APIs.",
    tech: "Node.js, Express, Databases",
    img: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=800",
    icon: <FiLock />
  },
];

const Services = () => {
  const { theme } = useTheme();

  return (
    <div className={`overflow-x-hidden min-h-screen transition-colors duration-500 bg-transparent ${theme === 'dark' ? 'text-green-50' : 'text-black'}`}>
      
      <HeroBanner 
        title="Transforming Ideas"
        subtitle="Into Digital Impact"
        highlight="Our Capabilities"
        theme={theme}
        image="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200"
      />

      <div className="max-w-7xl mx-auto px-6 py-24 space-y-32">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className={`flex flex-col md:flex-row items-center gap-16 ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* IMAGE */}
            <div className={`w-full md:w-1/2 relative group p-6 rounded-[3rem] transition-colors duration-500 ${theme === 'dark' ? 'bg-white/5' : 'bg-gray-50'}`}>
              <img
                src={service.img}
                alt={service.title}
                loading="lazy"
                className="w-full h-[400px] object-cover rounded-[2.5rem] shadow-2xl group-hover:scale-[1.02] transition-transform duration-700 font-bold"
              />
            </div>

            {/* CONTENT */}
            <div className="w-full md:w-1/2">
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shadow-xl transition-colors duration-500
                ${theme === 'dark' ? 'bg-black text-green-600' : 'bg-dg-50 text-green-600'}`}>
                  {service.icon}
                </div>
                <h2 className="text-4xl font-black leading-tight">
                  {service.title}
                </h2>
              </div>
              <p className={`text-xl leading-relaxed mb-8 font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-black'}`}>
                {service.desc}
              </p>
              
              <div className={`grid grid-cols-2 gap-8 py-8 border-y transition-colors duration-500 ${theme === 'dark' ? 'border-white/10' : 'border-gray-100'}`}>
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-gray-400 mb-3 font-black">
                    Strategic Edge
                  </h4>
                  <p className="font-black">
                    {service.advantage}
                  </p>
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-gray-400 mb-3 font-black">
                    Core Tech
                  </h4>
                  <p className="font-black">
                    {service.tech}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;