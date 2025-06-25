import Image from "next/image";
import React, { useState } from "react";
import {
  FaCampground,
  FaBiking,
  FaSwimmer,
  FaHiking,
  FaGlobe,
  FaMapMarkedAlt,
} from "react-icons/fa";

const topics = [
  {
    id: 1,
    title: "Tent camping",
    icon: <FaCampground />,
    description: "Enjoy peaceful tent camping in scenic spots.",
  },
  {
    id: 2,
    title: "Adventure travel",
    icon: <FaMapMarkedAlt />,
    description: "Explore thrilling destinations and offbeat paths.",
  },
  {
    id: 3,
    title: "Mountain biking",
    icon: <FaBiking />,
    description: "Conquer terrains with high-adrenaline rides.",
  },
  {
    id: 4,
    title: "Discovery world",
    icon: <FaGlobe />,
    description: "Discover hidden gems around the world.",
  },
  {
    id: 5,
    title: "Fishing & swimming",
    icon: <FaSwimmer />,
    description: "Relax with nature activities like fishing and swimming.",
  },
  {
    id: 6,
    title: "Mountain hiking",
    icon: <FaHiking />,
    description: "Hike through majestic mountain trails.",
  },
];

const AdventureSection = () => {
  const [activeTopic, setActiveTopic] = useState(topics[0]);

  return (
    <div className="max-w-7xl mx-auto px-9">
    <section className="bg-[#0d1d18] rounded-lg text-white py-8 mt-10 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-center items-start gap-10">
        {/* Left: List */}
        <div className="flex-1 flex justify-center">
          <div className="bg-white rounded-xl p-5 space-y-5 py-4 text-black w-full max-w-xs">
            {topics.map((topic) => (
              <div
                key={topic.id}
                onClick={() => setActiveTopic(topic)}
                className={`flex items-center p-3 rounded-md cursor-pointer transition-all duration-200 ${
                  activeTopic.id === topic.id
                    ? "bg-[#fed42a] text-white"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                <span className="text-xl mr-3">{topic.icon}</span>
                <span className="font-medium">{topic.title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Center: Content */}
        <div className="flex-1 flex flex-col justify-center space-y-6 max-w-md">
         <div className="text-gray-900 bg-[#fed42a] rounded-full w-20 h-20 text-4xl flex items-center justify-center">
  {activeTopic.icon}
</div>
  <h2 className="text-3xl md:text-4xl font-bold leading-tight text-[#fed42a]">
            Discover real thrills & make <span className="text-white">memories that last forever</span>
          </h2>
          <p className="text-gray-300">{activeTopic.description}</p>

          {/* Stats */}
          <div>
            <div className="mb-2 flex justify-between text-sm text-gray-400">
              <span>Satisfied Clients</span>
              <span className="text-[#fed42a] font-bold">89%</span>
            </div>
            <div className="w-full bg-gray-700 h-2 rounded">
              <div className="bg-[#fed42a] h-2 w-[89%] rounded"></div>
            </div>
            <div className="mt-4 mb-2 flex justify-between text-sm text-gray-400">
              <span>Success Rate</span>
              <span className="text-[#fed42a] font-bold">86%</span>
            </div>
            <div className="w-full bg-gray-700 h-2 rounded">
              <div className="bg-[#fed42a] h-2 w-[86%] rounded"></div>
            </div>
          </div>
        </div>

        {/* Right: Image */}
        <div className="flex-1 flex justify-center">
          <Image
            src="/home/Adventure2.jpg"
            alt="Adventure"
            height={200}
            width={200}
            className="rounded-xl shadow-md w-full max-w-xs"
          />
        </div>
      </div>
    </section>
    </div>
  );
};

export default AdventureSection;
