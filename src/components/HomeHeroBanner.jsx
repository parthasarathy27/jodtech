import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { useTheme } from "../context/ThemeContext";
import { Link } from "react-router-dom";

const HomeHeroBanner = ({ theme = "light" }) => {
  const slides = [
    {
      image: "https://images.unsplash.com/photo-1647514422086-18cde746fa26?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      highlight: "Next-Gen IT Solutions",
      title: "Engineering",
      subtitle: "Digital Success",
      description: "Partner with JodTech to accelerate your digital trajectory through high-precision engineering."
    },
    {
      image: "https://images.unsplash.com/photo-1770169272345-9636d5ef2681?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      highlight: "Collaborative Innovation",
      title: "Transforming",
      subtitle: "Business Ideas",
      description: "Our talented teams bring diverse perspectives to create groundbreaking technology."
    },
    {
      image: "https://plus.unsplash.com/premium_photo-1751891494799-c794fa5e7c94?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      highlight: "Enterprise Excellence",
      title: "Securing",
      subtitle: "Your Digital Future",
      description: "Advanced security and scalability at the heart of every solution we deliver."
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const autoPlayTimerRef = useRef(null);

  // GSAP Animation Timeline
  const animateSlideChange = (nextSlideIndex) => {
    const tl = gsap.timeline();

    // Fade out current content (hide entire container)
    tl.to(contentRef.current, {
      opacity: 0,
      y: -20,
      duration: 0.5
    }, 0);

    // Fade out current image
    tl.to(imageRef.current, {
      opacity: 0,
      duration: 0.6
    }, 0);

    // Update slide (at the midpoint of animation)
    tl.add(() => {
      setCurrentSlide(nextSlideIndex);
    }, 0.3);

    // Fade in new image
    tl.to(imageRef.current, {
      opacity: 1,
      duration: 0.8
    }, 0.4);

    // Reset parent container visibility before children stagger
    tl.set(contentRef.current, { opacity: 1, y: 0 }, 0.5);

    // Fade in new content children with stagger
    tl.fromTo(contentRef.current.children, {
      opacity: 0,
      y: 20
    }, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "power2.out"
    }, 0.6);
  };

  // Initial Load Animation
  useEffect(() => {
    const tl = gsap.timeline();
    // Ensure parent is visible immediately so children's stagger is seen
    gsap.set(contentRef.current, { opacity: 1 });
    
    tl.fromTo(imageRef.current, 
      { opacity: 0, scale: 1.05 }, 
      { opacity: 1, scale: 1, duration: 1.5, ease: "power2.out" }, 0
    );
    tl.fromTo(contentRef.current.children, 
      { opacity: 0, y: 30 }, 
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "power2.out" }, 0.5
    );
  }, []);

  // Auto-play functionality (continuous rotation every 4 seconds)
  useEffect(() => {
    autoPlayTimerRef.current = setTimeout(() => {
      const nextSlide = (currentSlide + 1) % slides.length;
      animateSlideChange(nextSlide);
    }, 4000);

    return () => {
      if (autoPlayTimerRef.current) clearTimeout(autoPlayTimerRef.current);
    };
  }, [currentSlide]);

  return (
    <section
      className="relative w-full min-h-[90vh] md:min-h-[100vh] flex flex-col justify-center items-center text-center px-4 md:px-6 py-16 md:py-24 overflow-hidden"
    >
      {/* BACKGROUND IMAGE - Animated */}
      <div className="absolute inset-0 -z-20 w-full h-full overflow-hidden">
        <img
          ref={imageRef}
          src={slides[currentSlide].image}
          alt={slides[currentSlide].title}
          className="w-full h-full object-cover pointer-events-none"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* CONTENT - Animated */}
      <div
        ref={contentRef}
        className="relative z-10 max-w-5xl w-full px-2 opacity-0"
      >
        {/* Badge/Highlight */}
        <div className="inline-block px-3 md:px-4 py-1.5 mb-4 md:mb-8 text-xs md:text-sm font-black tracking-widest rounded-full uppercase bg-dg-700/30 text-green-50 backdrop-blur-md border border-dg-700/50">
          {slides[currentSlide].highlight}
        </div>

        {/* Title & Subtitle */}
        <h1 className="text-3xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tighter leading-[1.1] mb-4 md:mb-10 text-white">
          {slides[currentSlide].title} <br />
          <span className="text-green-600">{slides[currentSlide].subtitle}</span>
        </h1>

        {/* Description */}
        <p className="text-base md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed mb-8 md:mb-12 font-medium text-white/80">
          {slides[currentSlide].description}
        </p>

        {/* CTA Button */}
        <Link to="/services">
          <button className="px-8 md:px-12 py-4 md:py-5 rounded-full text-base md:text-xl font-black shadow-2xl transition-all duration-300 transform hover:-translate-y-1 active:scale-95 bg-green-600 text-white hover:bg-dg-600">
            Explore Solutions
          </button>
        </Link>
      </div>

      {/* NAVIGATION DOTS - Bottom Center */}
      {/* REMOVED - Navigation simplified */}

      {/* PREV/NEXT BUTTONS */}
      {/* REMOVED - Navigation arrows simplified */}
    </section>
  );
};

export default HomeHeroBanner;
