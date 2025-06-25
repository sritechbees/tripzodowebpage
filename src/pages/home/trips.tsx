'use client';

import React, { useEffect } from 'react';
import { FaUmbrellaBeach, FaMountain, FaCity, FaCampground, FaShip, FaHiking } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Trips = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const tripData = [
    {
      icon: <FaUmbrellaBeach className="text-4xl text-[#fed42a]" />,
      title: 'Beach Getaway',
      description: 'Relax on sunny beaches with golden sands and clear waters.',
      bg: "/home/beach_getaway1.jpg",
    },
    {
      icon: <FaMountain className="text-4xl text-[#fed42a]" />,
      title: 'Mountain Adventure',
      description: 'Explore scenic mountains and enjoy thrilling hikes.',
      bg: "/home/adventure1.jpg",
    },
    {
      icon: <FaCity className="text-4xl text-[#fed42a]" />,
      title: 'City Escape',
      description: 'Discover vibrant cities full of culture, food, and nightlife.',
      bg: "/home/city_escape.jpg",
    },
    {
      icon: <FaCampground className="text-4xl text-[#fed42a]" />,
      title: 'Camping Retreat',
      description: 'Unwind in nature with tents, stars, and bonfires.',
      bg: "/home/camping_retreat.jpg",
    },
    {
      icon: <FaShip className="text-4xl text-[#fed42a]" />,
      title: 'Cruise Voyage',
      description: 'Sail across oceans and explore exotic destinations.',
      bg: "/home/cruise_voyage.jpg",
    },
    {
      icon: <FaHiking className="text-4xl text-[#fed42a]" />,
      title: 'Jungle Trek',
      description: 'Journey through lush rainforests and thrilling trails.',
      bg: "/home/jungle_trek.jpg",
    },
  ];

  return (
    <div className="py-2 px-6 bg-white text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Top Trip Types</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {tripData.map((trip, index) => (
          <div
            key={index}
            data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
            className={`relative group overflow-hidden rounded-xl p-6 shadow-md border-t-4 border-[#fed42a] transition duration-300 hover:scale-105`}
          >
            {/* Hover background image */}
            <div
              className="absolute inset-0 bg-center bg-cover opacity-0 group-hover:opacity-100 transition duration-300 z-0"
              style={{ backgroundImage: `url(${trip.bg})` }}
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 z-10" />

            {/* Card Content */}
            <div className="relative z-20 flex flex-col items-center text-center text-gray-900 group-hover:text-white transition duration-300">
              {trip.icon}
              <h3 className="text-xl font-semibold mt-4 mb-2">{trip.title}</h3>
              <p className="text-sm">{trip.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trips;
