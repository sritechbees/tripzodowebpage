"use client";

import React, { useEffect } from "react";
import { FaMapMarkerAlt, FaClock } from "react-icons/fa";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const tours = [
  {
    country: "Dubai – United Arab Emirates",
    title: "Dubai City Arab Emirates Tour Package",
    duration: "3 Nights 4 Days",
    image: "/home/dubai.png",
    link: "#",
  },
  {
    country: "Switzerland, Zurich",
    title: "Best of Switzerland Tour Package",
    duration: "4 Nights 5 Days",
    image: "/home/Switzerland.jpg",
    link: "#",
  },
  {
    country: "Singapore, Sentosa",
    title: "Amazing Singapore Tour Package",
    duration: "3 Nights 4 Days",
    image: "/home/Singapore.jpg",
    link: "#",
  },
  {
    country: "Mauritius",
    title: "Indulge in the Magical Mauritius Tour | Itinerary",
    duration: "4 Nights 5 Days",
    image: "/home/Mauritius.jpg",
    link: "#",
  },
  {
    country: "Bali, Indonesia",
    title: "Bali Island Paradise Package",
    duration: "5 Nights 6 Days",
    image: "/home/Bali Island.jpg",
    link: "#",
  },
  {
    country: "Paris, France",
    title: "Romantic Paris Getaway",
    duration: "3 Nights 4 Days",
    image: "/home/Romantic Paris Getaway.jpg",
    link: "#",
  },
  {
    country: "Thailand, Phuket",
    title: "Tropical Thailand Adventure",
    duration: "4 Nights 5 Days",
    image: "/home/Thailand.jpg",
    link: "#",
  },
  {
    country: "Maldives",
    title: "Luxury Maldives Escape",
    duration: "5 Nights 6 Days",
    image: "/home/Maldives.jpg",
    link: "#",
  },
];

function TrendingTours() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-9 mt-16">
      <h2
        className="text-3xl font-bold mb-12 text-center text-gray-900"
        data-aos="fade-up"
      >
       <span className="text-[#fed42a]">Trending</span>  Tours
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {tours.map((tour, index) => (
          <a
            key={index}
            href={tour.link}
            className="group rounded-xl overflow-hidden shadow hover:shadow-lg transition duration-300 border"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="relative h-56 w-full">
              <Image
                src={tour.image}
                alt={tour.title}
                layout="fill"
                objectFit="cover"
                className="transition-transform group-hover:scale-105"
              />
            </div>
            <div className="p-4 bg-white">
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <FaMapMarkerAlt className="mr-1" />
                {tour.country}
              </div>
              <h3 className="text-md font-semibold text-gray-800 mb-2 group-hover:text-[#fed42a] transition">
                {tour.title}
              </h3>
              <div className="flex items-center text-sm font-medium text-[#fed42a]">
                <FaClock className="mr-1" />
                {tour.duration}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default TrendingTours;
