"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const tags = [
  "Family Camping",
  "Wild Camping",
  "Fishing",
  "Mountain Biking",
  "Luxury Cabin",
  "Couple Camping",
];

const rotations = ["-6deg", "3deg", "-3deg", "6deg", "-4deg", "2deg"];

function TravelIntro() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="bg-white py-16 px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div data-aos="fade-up">
          <span className="inline-block bg-yellow-100 text-gray-900 text-lg font-medium px-4 py-1 rounded-full mb-4">
            Welcome to Gowilds
          </span>
          <h1 className="text-3xl font-bold text-[#fed42a] mb-4 leading-tight">
            We are the most fun <span className="text-gray-900">company about travel and adventure</span>
          </h1>
          <p className="text-gray-500 text-[17px] mb-6">
            Sit amet consectetur velit integer tincidunt scelerisque nodales
            volutpat neque fermentum malesuada. Massa lacus ultrices eget leo.
            Cras odio blandit rhoncus eu feugiat.
          </p>

          {/* Rotated Tags */}
          <div className="flex flex-wrap gap-4">
            {tags.map((tag, index) => (
              <div
                key={index}
                style={{ transform: `rotate(${rotations[index % rotations.length]})` }}
                className="flex items-center gap-2 bg-white shadow-md px-4 py-2 rounded-xl text-sm font-medium"
              >
                <FaCheckCircle className="text-[#fed42a]" />
                {tag}
              </div>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div data-aos="zoom-in" className="relative w-full h-[350px] flex items-center justify-center">
          <div
            className="overflow-hidden shadow-xl border-4 border-white"
          
          >
            <Image
              src="/home/welcome1.jpg"
              alt="Travel"
              fill
              className="rounded-l-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default TravelIntro;
