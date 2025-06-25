"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Link from "next/link";


const WelcomeHolidays = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 flex justify-center z-0">
        <div className="relative w-full max-w-7xl h-full">
          <Image
            src="/home/welcome.jpg"
            alt="Holiday Background"
            layout="fill"
            objectFit="cover"
            priority
            className="rounded-xl"
          />
        </div>
      </div>

      {/* Overlay Content */}
      <div
        className="relative z-10 max-w-3xl p-8 text-center"
        data-aos="fade-up"
      >
        <h1
          className="text-3xl md:text-5xl font-bold text-[#fed42a] mb-4"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          Welcome to Holidays
        </h1>

        <p
          className="text-lg md:text-lg text-white"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          Discover the best travel experiences with{" "}
          <span className="font-semibold text-white">Tripzodo</span>. Your
          journey to beautiful destinations begins here. Let&apos;s explore the
          world together!
        </p>

        <Link
          href="/group/grouptour_herosection"
          className="inline-block mt-8 px-6 py-3 bg-[#fed42a] hover:bg-yellow-400 text-gray-900 font-semibold rounded-full shadow-md transition-all duration-300"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          Explore Packages
        </Link>
      </div>
    </section>
  );
};

export default WelcomeHolidays;
