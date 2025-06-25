"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { FaChevronDown } from "react-icons/fa";
import { motion } from "framer-motion";

type NavItem = {
  name: string;
  link?: string;
  dropdown?: { name: string; link: string }[];
};

const navItems: NavItem[] = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about/about_us" },
  { name: "Contact", link: "/contact" },
];

const Header = () => {
  const pathname = usePathname();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMouseEnter = (name: string) => setActiveDropdown(name);
  const handleMouseLeave = () => setActiveDropdown(null);

  const isActive = (path?: string) => path && pathname === path;

  return (
    <header className="fixed w-full top-0 z-50 bg-[#fed42a] shadow">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/home/logo1.png"
            alt="Logo"
            width={120}
            height={40}
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-6 relative items-center">
          {navItems.map((item, idx) => (
            <div
              key={idx}
              onMouseEnter={() => handleMouseEnter(item.name)}
              onMouseLeave={handleMouseLeave}
              className="relative group"
            >
              <Link
                href={item.link || "#"}
                className={`flex items-center gap-1 font-medium transition duration-200 ${
                  isActive(item.link)
                    ? "text-white font-bold underline"
                    : "text-gray-800 hover:text-white"
                }`}
              >
                {item.name}
                {(item.dropdown) && (
                  <FaChevronDown className="text-xs mt-1" />
                )}
              </Link>

              {item.dropdown && activeDropdown === item.name && (
                <motion.ul
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="absolute left-0 bg-white border border-[#fed42a] shadow-lg rounded mt-2 py-2 w-48 z-50"
                >
                  {item.dropdown.map((sub, i) => (
                    <li key={i}>
                      <Link
                        href={sub.link}
                        className="block px-4 py-2 hover:bg-yellow-100 text-sm"
                      >
                        {sub.name}
                      </Link>
                    </li>
                  ))}
                </motion.ul>
              )}
            </div>
          ))}

          {/* Book Now Button */}
          <Link
            href="/book_now"
            className="ml-4 bg-black text-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition font-semibold"
          >
            Book Now
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-black text-2xl"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#fed42a] shadow-md">
          <ul className="flex flex-col px-4 py-4 space-y-3">
            {navItems.map((item, idx) => (
              <li key={idx}>
                <Link
                  href={item.link || "#"}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block py-2 text-base font-medium ${
                    isActive(item.link)
                      ? "text-white font-bold underline"
                      : "text-gray-800 hover:text-white"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/book_now"
                className="block py-2 text-center text-lg bg-black text-white rounded-full hover:bg-yellow-500 transition font-semibold"
                onClick={() => setMobileMenuOpen(false)}
              >
                Book Now
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
