'use client';

import Image from 'next/image';
import React, { useRef, useState } from 'react';
import { FaArrowRight, FaArrowLeft, FaArrowUpRightFromSquare } from 'react-icons/fa6';

const adventures = [
  {
    title: 'Mountain climbing',
    category: 'Wildlife',
    image: '/home/adventure1.jpg',
    description: 'Climb breathtaking peaks with guided experiences.',
  },
  {
    title: 'Tent camping services',
    category: 'Wildlife',
    image: '/home/Tent camping services.jpg',
    description: 'Cozy tent setups under the stars.',
  },
  {
    title: 'Trailers and rv spots',
    category: 'Wildlife',
    image: '/home/Trailers and rv spots.jpg',
    description: 'Comfortable RV spots surrounded by nature.',
  },
  {
    title: 'Adventure and climbing',
    category: 'Wildlife',
    image: '/home/adventure_climbing.jpg',
    description: 'Challenge yourself with thrilling climbs.',
  },
  {
    title: 'Jungle Safari',
    category: 'Wildlife',
    image: '/home/Jungle Safari.jpg',
    description: 'Explore wild landscapes and exotic animals.',
  },
  {
    title: 'River Rafting',
    category: 'Wildlife',
    image: '/home/River Rafting.jpg',
    description: 'Ride the rapids with experienced guides.',
  },
];

const RealAdventure = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -300 : 300,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div
      className="relative py-14 bg-white px-4 md:px-10"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Real<span className='text-[#fed42a]'> Adventure</span></h2>

      {/* Arrows - only show when hovering */}
      {hovering && (
        <>
          <button
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full"
            onClick={() => scroll('left')}
          >
            <FaArrowLeft className="text-gray-700" />
          </button>
          <button
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full"
            onClick={() => scroll('right')}
          >
            <FaArrowRight className="text-gray-700" />
          </button>
        </>
      )}

      {/* Scrollable Cards - scroll only if hovering */}
      <div
        ref={scrollRef}
        className={`flex gap-6 ${hovering ? 'overflow-x-auto' : 'overflow-hidden'} scroll-smooth no-scrollbar`}
      >
        {adventures.map((item, i) => (
          <div
            key={i}
            className="group relative min-w-[280px] max-w-xs rounded-xl shadow-md overflow-hidden bg-white cursor-pointer"
          >
            {/* Background Image */}
            <Image
              src={item.image}
              alt={item.title} height={200} width={200}
              className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Hover Overlay */}
            <div className="absolute inset-0 px-4 py-6 border border-2 border-[#fed42a] scale-0 group-hover:scale-100 origin-top transition-transform duration-500 z-20 rounded-xl">
              <p className="text-white text-sm font-medium mb-1">{item.category}</p>
              <h4 className="text-lg font-semibold text-gray-800">{item.title}</h4>
              <p className="text-gray-700 text-sm mt-2">{item.description}</p>
              <div className="absolute bottom-4 right-4 bg-[#fed42a] p-2 rounded-full">
                <FaArrowUpRightFromSquare className="text-gray-900 text-sm" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RealAdventure;
