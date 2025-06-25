import React from "react";
import { FaBell } from "react-icons/fa";

function GetUpdates() {
  return (
    <section className="bg-[#f4f4f4] mt-10 py-10 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-around gap-6">
        {/* Left - Icon and Text */}
        <div className="flex items-center gap-4">
          <div className="text-4xl text-gray-500">
            <FaBell />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-800">Get Updates & More</h2>
            <p className="text-gray-500 text-sm">Thoughtful thoughts to your inbox</p>
          </div>
        </div>

        {/* Right - Email Input */}
        <div className="flex w-full md:w-auto">
          <input
            type="email"
            placeholder="Your Email"
            className="w-full md:w-72 px-4 py-3 rounded-l-md border border-gray-300 focus:outline-none"
          />
          <button className="bg-black text-white px-6 py-3 rounded-r-md hover:bg-gray-800 transition-all duration-200">
            SUBSCRIBE
          </button>
        </div>
      </div>
      
    </section>
    
  );
}

export default GetUpdates;
