"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGlobeAmericas } from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FaChevronDown } from "react-icons/fa";
import Link from "next/link";

const navItems = [
  "Home",
  "Company",
  "Group Tours",
  "Packages",
  "India",
  "Honeymoon",
  "Contact",
];

const companySubItems = [
  "About",
  "History",
  "Testimonial",
  "Careers",
  "Blogs",
  "FAQs",
];

const packagesSubItems = ["India", "Asia", "Island"];

const Header = () => {
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdown, setDropdown] = useState<{ [key: string]: boolean }>({
    Company: false,
    Packages: false,
  });

  const handleClick = (item: string) => {
    setActive(item);
    setMenuOpen(false);
    setDropdown({ Company: false, Packages: false });
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full bg-gradient-to-r from-sky-600 to-blue-800 shadow-md fixed top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-white font-extrabold text-xl"
        >
          <FaGlobeAmericas className="text-2xl text-yellow-300 animate-pulse" />
          <span>TravelMate</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-white font-medium relative">
          {navItems.map((item) => {
            const isDropdown = item === "Company" || item === "Packages";
            const subItems =
              item === "Company" ? companySubItems : item === "Packages" ? packagesSubItems : [];

            return isDropdown ? (
              <div
                key={item}
                className="relative"
                onMouseEnter={() =>
                  setDropdown((prev) => ({ ...prev, [item]: true }))
                }
                onMouseLeave={() =>
                  setDropdown((prev) => ({ ...prev, [item]: false }))
                }
              >
                <button
                  onClick={() => handleClick(item)}
                  className={`flex items-center gap-1 transition-all duration-200 ${
                    active === item
                      ? "text-yellow-300 underline underline-offset-4"
                      : "hover:text-yellow-300"
                  }`}
                >
                  {item}
                  <FaChevronDown className="text-sm mt-0.5" />
                </button>
                {dropdown[item] && (
                  <div className="absolute top-8 left-0 bg-white shadow-lg rounded-md overflow-hidden z-50">
                    {subItems.map((sub) => (
                      <a
                        key={sub}
                        href={`#${sub.toLowerCase()}`}
                        onClick={() => handleClick(item)}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100"
                      >
                        {sub}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <motion.button
                key={item}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
                onClick={() => handleClick(item)}
                className={`transition-all duration-200 ${
                  active === item
                    ? "text-yellow-300 underline underline-offset-4"
                    : "hover:text-yellow-300"
                }`}
              >
                {item}
              </motion.button>
            );
          })}
        </nav>

        {/* CTA Button */}
        <motion.a
          href="#book"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:inline-block bg-yellow-400 text-black px-5 py-2 rounded-full font-semibold shadow hover:bg-yellow-300 transition duration-300"
        >
          Book Now
        </motion.a>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white text-2xl"
          >
            {menuOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden bg-blue-900 text-white px-4 pb-4 space-y-3">
          {navItems.map((item) => {
            const isDropdown = item === "Company" || item === "Packages";
            const subItems =
              item === "Company" ? companySubItems : item === "Packages" ? packagesSubItems : [];

            return isDropdown ? (
              <div key={item}>
                <button
                  onClick={() =>
                    setDropdown((prev) => ({
                      ...prev,
                      [item]: !prev[item],
                    }))
                  }
                  className="flex items-center justify-between w-full py-2"
                >
                  <span
                    className={`${
                      active === item ? "text-yellow-300 font-bold" : ""
                    }`}
                  >
                    {item}
                  </span>
                  <FaChevronDown
                    className={`transition-transform duration-300 ${
                      dropdown[item] ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {dropdown[item] && (
                  <div className="ml-4 space-y-1">
                    {subItems.map((sub) => (
                      <a
                        key={sub}
                        href={`#${sub.toLowerCase()}`}
                        onClick={() => handleClick(item)}
                        className="block py-1 text-sm text-gray-100 hover:text-yellow-300"
                      >
                        {sub}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <button
                key={item}
                onClick={() => handleClick(item)}
                className={`block w-full text-left py-2 ${
                  active === item ? "text-yellow-300 font-bold" : ""
                }`}
              >
                {item}
              </button>
            );
          })}

          <a
            href="#book"
            className="block w-full text-center bg-yellow-400 text-black px-4 py-2 rounded-full font-semibold shadow hover:bg-yellow-300 transition duration-300"
          >
            Book Now
          </a>
        </div>
      )}
    </motion.header>
  );
};

export default Header;
