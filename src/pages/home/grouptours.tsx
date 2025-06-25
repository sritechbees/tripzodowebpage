import Image from 'next/image';
import React from 'react';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';

const tours = [
  {
    title: 'Historic Europe Tour',
    description: 'Visit iconic European cities with guided experiences.',
    image: '/home/Historic Europe Tour.jpg',
    imageround:'/home/Historic Europe Tour.jpg',
    hoverEffect: 'left-to-right',
  },
  {
    title: 'Tropical Island Escape',
    description: 'Relax on pristine beaches and crystal waters.',
    image: '/home/Tropical Island Escape.jpg',
    imageround:'/home/Tropical Island Escape.jpg',
    hoverEffect: 'right-to-left',
  },
  {
    title: 'Desert Safari Adventure',
    description: 'Thrill through sand dunes and starlit nights.',
    image: '/home/Desert Safari Adventure.jpg',
    imageround:'/home/Desert Safari Adventure.jpg',
    hoverEffect: 'top-to-bottom',
  },
  {
    title: 'Asian Heritage Trail',
    description: 'Explore rich traditions across Asia.',
    image: '/home/Asian Heritage Trail.jpg',
    imageround:'/home/Asian Heritage Trail.jpg',
    hoverEffect: 'bottom-to-top',
  },
  {
    title: 'Amazon Rainforest Trek',
    description: 'Immerse in nature’s wild heart.',
    image: '/home/Amazon Rainforest Trek.jpg',
    imageround:'/home/Amazon Rainforest Trek.jpg',
    hoverEffect: 'corner-to-corner',
  },
  {
    title: 'Canadian Rockies Ride',
    description: 'Scenic trails, wildlife, and mountain air.',
    image: '/home/Canadian Rockies Ride.jpg',
    imageround:'/home/Canadian Rockies Ride.jpg',
    hoverEffect: 'diagonal',
  },
];

const getHoverEffect = (effect: string) => {
  switch (effect) {
    case 'left-to-right':
      return 'translate-x-full group-hover:translate-x-0';
    case 'right-to-left':
      return '-translate-x-full group-hover:translate-x-0';
    case 'top-to-bottom':
      return 'translate-y-full group-hover:translate-y-0';
    case 'bottom-to-top':
      return '-translate-y-full group-hover:translate-y-0';
    case 'corner-to-corner':
      return '-translate-x-full -translate-y-full group-hover:translate-x-0 group-hover:translate-y-0';
    case 'diagonal':
      return 'translate-x-full translate-y-full group-hover:translate-x-0 group-hover:translate-y-0';
    default:
      return '';
  }
};

const GroupTours = () => {
  return (
    <div className="py-2 px-4 md:px-10 bg-white">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800"><span className='text-[#fed42a]'>Premium</span> Group Tours</h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {tours.map((tour, i) => (
          <div
            key={i}
            className="relative group rounded-2xl overflow-hidden shadow-md bg-white hover:shadow-xl transition-shadow duration-300 h-64"
          >
            {/* Tour Image */}
           <div className="absolute inset-0 z-0 group">
  {/* Background Image */}
  <Image
    src={tour.image}
    alt={tour.title}
    fill
    className="object-cover"
  />

  {/* Animated Bottom Title Overlay */}
  <div className="absolute bottom-0 w-full flex justify-center">
    <h3
      className="text-[#fed42a] text-xl bg-black/40 w-full font-bold text-center  px-4 py-2 rounded "
    >
      {tour.title}
    </h3>
  </div>
</div>
           {/* Hover Overlay */}
           <div
  className={`absolute inset-0 z-10 bg-black/60 backdrop-blur-sm flex flex-col items-center justify-center text-white
  transform transition-all duration-500 opacity-0 group-hover:opacity-100 ${getHoverEffect(tour.hoverEffect)}`}
>
  <Image
    src={tour.imageround}
    alt={tour.title}
    height={96}
    width={96}
    className="w-24 h-24 rounded-full object-cover mb-4"
  />
  <h3 className="text-xl font-semibold text-[#fed42a] text-center">{tour.title}</h3>
  <p className="text-sm mt-1 text-gray-200 text-center px-4">{tour.description}</p>
  <div className="mt-3">
    <FaArrowUpRightFromSquare className="text-lg" />
  </div>
</div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default GroupTours;
