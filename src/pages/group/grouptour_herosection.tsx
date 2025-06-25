import React from "react";
import Image from "next/image";
import Head from "next/head";
import App_layout from "@/component/layout/app-layout";
import GroupTourCards from "./grouptour_cards";
import Testimonials from "./testimonial";
import Contactall from "@/component/common/contactall";
import GetUpdates from "@/component/common/getupdates";

const GroupTourHeroSection = () => {
  return (
    <App_layout>
     
       <Head>
        <title>Tripzodo |  Explore Destinations</title>
      </Head>
    <div className="relative w-full h-[500px] mt-16">
      {/* Background Image */}
      <Image
        src="/group/one.jpg"
        alt="Group Tour Banner"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Text Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-white text-4xl md:text-5xl font-bold drop-shadow-lg">
          Explore the World Together
        </h1>
        <p className="text-white text-lg md:text-xl mt-4 max-w-xl drop-shadow-md">
          Join our expertly curated <span className="font-semibold text-yellow-300">Group Tours</span> for unforgettable experiences across the globe.
        </p>
      </div>
    </div>
     <GroupTourCards/>
     <Testimonials/>
     <Contactall/>
     <GetUpdates/>
    </App_layout>
  );
};

export default GroupTourHeroSection;
