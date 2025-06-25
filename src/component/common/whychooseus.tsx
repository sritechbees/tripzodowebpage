'use client';

import Image from 'next/image';
import React from 'react';
import { FaMapMarkedAlt, FaUmbrellaBeach, FaMountain, FaRoute, FaGlobe, FaPhoneAlt } from 'react-icons/fa';
import 'aos/dist/aos.css';

const WhyChooseUs = () => {
  return (
    <section className="relative bg-[#f8f8f8] text-black py-16 px-4 sm:px-8 lg:px-20 overflow-hidden">
      {/* Top White Shape */}
      <div className="absolute left-0 w-full h-40 bg-[#f8f8f8] z-0 rounded-t-2xl" />

      {/* Yellow Gradient Shape */}
      <div className="absolute bottom-0 left-0 w-full h-44 z-0">
        <div className="w-full h-full bg-gradient-to-tr from-[#fbd82f] via-[#fed42a] to-[#e6b300] clip-path-bottom-shape" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Title & Image */}
        <div className="flex flex-col items-center mb-10" data-aos="fade-down">
          <Image src="/company/whychoose.jpg" alt="Why Choose Us" width={100} height={100} className="rounded-full shadow-lg mb-4" />
          <h2 className="text-4xl font-bold leading-tight">
            Why <span className="text-[#fed42a]">Choose Tripzodo?</span>
          </h2>
          <p className="text-gray-700 mt-3  max-w-xl mx-auto">
            Explore your dream destinations with curated experiences and expert guidance.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12">
          {[
            {
              icon: <FaMapMarkedAlt className="text-[#fed42a] text-4xl" />,
              title: 'Personalized Itineraries',
              img: '/company/Personalized Itineraries.jpg',
            },
            {
              icon: <FaUmbrellaBeach className="text-[#fed42a] text-4xl" />,
              title: 'Beachside Relaxation',
              img: '/company/Beachside Relaxation1.jpg',
            },
            {
              icon: <FaMountain className="text-[#fed42a] text-4xl" />,
              title: 'Adventure Treks',
              img: '/company/Adventure Treks.jpg',
            },
            {
              icon: <FaRoute className="text-[#fed42a] text-4xl" />,
              title: 'Guided Tours',
              img: '/company/Guided Tours.jpg',
            },
            {
              icon: <FaGlobe className="text-[#fed42a] text-4xl" />,
              title: 'Global Destinations',
              img: '/company/Global Destinations.jpg',
            },
            {
              icon: <FaPhoneAlt className="text-[#fed42a] text-4xl" />,
              title: '24/7 Travel Support',
              img: '/company/Travel Support.jpg',
            },
          ].map((item, index) => (
            <div key={index} className="bg-white p-4 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300" data-aos="fade-up" data-aos-delay={index * 100}>
              <Image src={item.img} alt={item.title} width={400} height={200} className="rounded-xl mb-4 object-cover h-40 w-full" />
              <div className="flex flex-col items-center">
                {item.icon}
                <p className="mt-3 font-semibold text-lg">{item.title}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-14 text-center" data-aos="fade-up">
          <h4 className="text-2xl font-semibold mb-3">Ready to Explore?</h4>
          <div className="flex justify-center items-center gap-10 text-base">
            <div className="flex items-center gap-2">
              <FaPhoneAlt className="text-[#fed42a]" />
              <span>+91 9500093383</span>
            </div>
            <div className="flex items-center gap-2">
              <FaGlobe className="text-[#fed42a]" />
              <span>www.tripzodo.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Clip Path Style */}
      <style jsx>{`
        .clip-path-bottom-shape {
          clip-path: polygon(0 60%, 100% 0, 100% 100%, 0% 100%);
        }
      `}</style>
    </section>
  );
};

export default WhyChooseUs;
