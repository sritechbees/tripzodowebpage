'use client';
import React from 'react';
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import Link from "next/link";
import Image from 'next/image';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const Footer = () => {
  return (
    <footer className="relative text-white py-16 mt-4 overflow-hidden footer-animated-bg">
      {/* Animated Blobs */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <motion.div
          animate={{ x: [0, 30, 0], opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute w-72 h-72 bg-yellow-100 opacity-40 rounded-full top-10 left-5 z-0"
        ></motion.div>
        <motion.div
          animate={{ x: [-20, 10, -20], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute w-52 h-52 bg-yellow-400 opacity-50 rounded-full bottom-10 right-10 z-0"
        ></motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-between gap-8 relative z-10">
        {/* Logo */}
        <motion.div
          className="w-full sm:w-[48%] lg:w-[23%]"
          custom={1}
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="relative w-40 h-24 mb-4">
            <Image
              src="/home/logo.png"
              height={200}
              width={200}
              alt="Logo"
              className="relative z-10 mt-10 ml-10 rounded hover:scale-105 transition duration-300"
            />
          </div>
        </motion.div>

        {/* Pages */}
        <motion.div
          className="w-full sm:w-[48%] lg:w-[23%]"
          custom={2}
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-xl font-semibold mb-4 text-[#fed42a]">Pages</h2>
          <ul className="text-sm text-white space-y-2">
            {[
              { name: 'Home', path: '/' },
              { name: 'About us', path: '/about/about_us' },
              { name: 'Contact us', path: '/contact' }
            ].map((page, i) => (
              <li key={i}>
                <Link href={page.path} className="hover:text-[#fed42a] transition duration-300">
                  {page.name}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
         <motion.div
          className="w-full sm:w-[48%] lg:w-[23%]"
          custom={3}
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-xl text-[#fed42a] font-bold mb-4">Tripzodo</h2>
          <p className="text-sm text-white mb-4">
            &quot; Turning your travel dreams into unforgettable journeys.&quot;
          </p>
          <div className="flex space-x-3">
            {[FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn].map((Icon, idx) => (
              <a
                key={idx}
                href="#"
                className="bg-gray-800 hover:text-[#fed42a] p-2 rounded-full hover:bg-gray-700 transition duration-300"
              >
                <Icon />
              </a>
            ))}
          </div>
        </motion.div>


        {/* Contact Info */}
        <motion.div
          className="w-full sm:w-[48%] lg:w-[23%]"
          custom={4}
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-xl font-semibold mb-4 text-[#fed42a]">Contact</h2>
          <ul className="text-sm text-white space-y-4">
            <li className="flex items-center">
              <FaPhoneAlt className="text-[#fed42a] mr-3" />
              +91 9019412772 
            </li>
            <li className="flex items-center">
              <FaEnvelope className="text-[#fed42a] mr-3" />
              travel@tripzodo.com
            </li>
            <li className="flex items-center">
              <FaMapMarkerAlt className="text-[#fed42a] text-2xl mr-3" />
              178/4A ID, Panduranga Elite Enclave, Kundarappalli, Krishnagiri. Tamil Nadu 635-115
            </li>
          </ul>
        </motion.div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm text-gray-300 hover:text-white mt-12 border-t border-[#fed42a] pt-4 px-4 relative z-10">
        <p className='mt-4'> © 2025 Copyrights by Tripzodo. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
