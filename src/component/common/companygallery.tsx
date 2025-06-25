'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';

const galleryImages = [
  {
    src: '/company/Santorini, Greece1.jpg',
    title: 'Santorini, Greece',
    description: 'Breathtaking views and iconic white cliffs.',
  },
  {
    src: '/company/Bali, Indonesia.jpg',
    title: 'Bali, Indonesia',
    description: 'A serene paradise with lush greenery.',
  },
  {
    src: '/company/Swiss Alps, Switzerland.jpg',
    title: 'Swiss Alps, Switzerland',
    description: 'Snow-capped peaks and picturesque towns.',
  },
  {
    src: '/company/Kyoto, Japan.jpg',
    title: 'Kyoto, Japan',
    description: 'Ancient temples and stunning cherry blossoms.',
  },
  {
    src: '/company/Cappadocia, Turkey.jpg',
    title: 'Cappadocia, Turkey',
    description: 'Unreal landscapes and dreamy balloon rides.',
  },
  {
    src: '/company/Dubai, UAE.jpg',
    title: 'Dubai, UAE',
    description: 'Futuristic skyline meets desert luxury.',
  },
];

const CompanyGallery = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="bg-white px-6">
      <h2 className="text-4xl font-bold text-center mb-14 text-gray-800">
        Explore Our <span className="text-[#fed42a]">Destinations</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {galleryImages.map((item, i) => (
          <div
            key={i}
            className="relative overflow-hidden rounded-xl bg-white shadow-xl group"
            data-aos="fade-up"
          >
            <Image
              src={item.src}
              alt={item.title}
              height={300}
              width={400}
              className="w-full h-64 object-cover transition-all duration-500 transform group-hover:scale-105 group-hover:rounded-[30%]"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end">
              <div className="p-4 text-[#fed42a] w-full">
                <h3 className="text-xl font-bold text-center">{item.title}</h3>
                <p className="text-sm text-center">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CompanyGallery;
