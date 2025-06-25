import Contactall from "@/component/common/contactall";
import Faq from "@/component/common/faq";
import GetUpdates from "@/component/common/getupdates";
import MeetOurTeam from "@/component/common/meetour_team";
import WhyChooseUsAlt from "@/component/common/whychooseus";
import App_layout from "@/component/layout/app-layout";
import Image from "next/image";
import Head from "next/head";
import React from "react";
import { FaHandshake, FaBuilding, FaGlobeAmericas, FaCheckCircle } from "react-icons/fa";

export default function AboutUs() {
  const cardData = [
    {
      stat: "1000+",
      label: "Partners",
      title: "Our Trusted Network",
      description: "We collaborate with over 1000 reliable partners worldwide.",
      icon: <FaHandshake />, // Added icon here
    },
    {
      stat: "2K+",
      label: "Properties",
      title: "Verified Stays",
      description: "Choose from 2000+ handpicked and verified properties.",
      icon: <FaBuilding />, // Added icon here
    },
    {
      stat: "300K+",
      label: "Destinations",
      title: "Global Reach",
      description: "Explore over 300,000 amazing destinations worldwide.",
      icon: <FaGlobeAmericas />, // Added icon here
    },
    {
      stat: "4K+",
      label: "Bookings",
      title: "Happy Travelers",
      description: "More than 4000 bookings completed with top-notch service.",
      icon: <FaCheckCircle />, // Added icon here
    },
  ];

  const sections = [
    {
      title: "Our Story",
      desc: "Starting as a small team of travel enthusiasts, we've grown into a global platform connecting travelers with seamless tour experiences.",
      img: "/company/our story1.jpg",
    },
    {
      title: "Our Vision",
      desc: "To become the most trusted and comprehensive travel partner, enabling exploration of the world without boundaries.",
      img: "/company/our vision.jpg",
    },
    {
      title: "Our Mission",
      desc: "Deliver exceptional travel solutions, foster global connections, and provide support at every journey step.",
      img: "/company/our mission.jpg",
    },
  ];

  return (
    <App_layout>
       <Head>
        <title>Tripzodo | About</title>
      </Head>
      <div>
        {/* Hero Section */}
        <div className="relative h-[60vh] w-full">
          <Image
            src="/company/about.jpg"
            alt="About Us"
            fill
            className="object-cover mt-16"
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <h1 className="text-white text-5xl font-bold tracking-wide">About Us</h1>
          </div>
        </div>

        <div className="">
          <MeetOurTeam />
          <WhyChooseUsAlt />
        </div>

        {/* Story / Vision / Mission */}
        <div className="py-16 px-6 max-w-6xl mx-auto space-y-24">
          {sections.map((sec, idx) => (
            <div
              key={idx}
              className={`flex flex-col md:flex-row items-center gap-10 ${
                idx % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image + Circle Zoom */}
              <div className="md:w-1/2 relative group">
                <div className="overflow-hidden rounded-xl shadow-lg relative">
                  <Image
                    src={sec.img}
                    alt={sec.title}
                    width={600}
                    height={400}
                    className="rounded-xl object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 w-24 h-24 rounded-full overflow-hidden ring-4 ring-white shadow-lg">
                    <Image
                      src={sec.img}
                      alt="Zoom Highlight"
                      width={96}
                      height={96}
                      className="object-cover scale-110"
                    />
                  </div>
                </div>
              </div>

              {/* Text Content */}
              <div className="md:w-1/2 space-y-4">
                <h2 className="text-4xl font-semibold text-gray-800 tracking-tight">
                  {sec.title}
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed border-l-4 pl-4 border-yellow-400">
                  {sec.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

          
                 
        

        {/* Stats Cards Section */}
        <div className="px-6  bg-white text-gray-800">
          <div className="max-w-6xl mx-auto">
            <div className="">
            <h2 className="text-4xl font-bold text-center py-5 text-[#fed42a]">
              Our <span className="text-gray-900 ">Impact</span>
            </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 py-8 gap-8">
              {cardData.map((card, index) => (
                <div
                  key={index}
                  className="
                    group
                    bg-gradient-to-tr from-yellow-100 to-yellow-50 rounded-xl p-6 shadow-md
                    hover:from-yellow-400 hover:to-yellow-300
                    hover:shadow-xl
                    cursor-pointer
                    transition-all duration-300
                    flex flex-col items-center text-center
                  "
                >
                  {/* Icon with hover shift */}
                  <div
                    className="text-[#fed42a] group-hover:text-white text-4xl mb-4 transition-transform duration-300 group-hover:translate-x-2"
                  >
                    {card.icon}
                  </div>

                  {/* Stat number shifts left on hover */}
                  <h3
                    className="
                      text-4xl font-extrabold text-yellow-600
                      transition-transform duration-300
                      group-hover:-translate-x-1
                    "
                  >
                    {card.stat}
                  </h3>

                  {/* Label text shifts right on hover */}
                  <p
                    className="
                      text-lg font-semibold mt-1 mb-4
                      transition-transform duration-300
                      group-hover:translate-x-1
                    "
                  >
                    {card.label}
                  </p>

                  {/* Description fades and moves up slightly */}
                  <p
                    className="
                      text-gray-700 text-sm max-w-xs
                      transition-all duration-300 opacity-80
                      hover:opacity-100 hover:-translate-y-1
                    "
                  >
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
       
           <div data-aos="fade-up" data-aos-delay="300">
          <Faq />
        </div>
        <div className="" data-aos="fade-up" data-aos-delay="400">
          <Contactall />
        </div>
        <div data-aos="fade-up" data-aos-delay="500">
          <GetUpdates />
        </div>
      </div>
    </App_layout>
  );
}
