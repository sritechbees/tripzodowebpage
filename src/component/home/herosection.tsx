"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Head from "next/head";
import { motion } from "framer-motion";

const slides = [
  {
    src: "/home/hero1.jpg",
    title: "Wanderlust Dreams",
    subtitle: "Start your adventure today.",
  },
  {
    src: "/home/hero2.jpg",
    title: "Breathtaking Views",
    subtitle: "Capture every moment.",
  },
  {
    src: "/home/hero3.jpg",
    title: "Cultural Wonders",
    subtitle: "Experience the world’s heritage.",
  },
];

const HeroSection = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToPrev = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const current = slides[index];

  return (
    <div>
      <Head>
        <title>Tripzodo | Home</title>
      </Head>

    
    <section className="relative w-full h-screen overflow-hidden bg-black text-white">
    
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out"
        style={{ backgroundImage: `url(${current.src})` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-10" />

      {/* Navigation Buttons */}
      <button
        onClick={goToPrev}
        className="absolute z-20 top-1/2 left-4 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 p-2 rounded-full transition"
      >
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            d="M15 19l-7-7 7-7"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <button
        onClick={goToNext}
        className="absolute z-20 top-1/2 right-4 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 p-2 rounded-full transition"
      >
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            d="M9 5l7 7-7 7"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full px-4 text-center">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          key={current.title}
        >
          {current.title}
        </motion.h1>
        <motion.p
          className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          key={current.subtitle}
        >
          {current.subtitle}
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row gap-4 mt-4"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <Link
            href="/group/grouptour_herosection"
            className="bg-yellow-400 text-black px-6 py-3 rounded-xl font-semibold hover:bg-yellow-300 transition duration-300"
          >
            Explore Destinations
          </Link>
          <Link
            href="/contact"
            className="border-2 border-white px-6 py-3 rounded-xl text-white hover:bg-white hover:text-black transition duration-300"
          >
            Book a Tour
          </Link>
        </motion.div>
      </div>
    </section>
    </div>
  );
};

export default HeroSection;
