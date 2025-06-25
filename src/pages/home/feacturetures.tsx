import Image from "next/image";
import React from "react";
import {
  FaStar,
  FaCamera,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaShieldAlt,
  FaWifi,
  FaSun,
  FaBiking,
  FaSwimmer,
  FaDumbbell,
  FaSpa,
} from "react-icons/fa";

const data = [
  {
    id: 1,
    image: "/home/Luxury Beach Villa.jpg",
    title: "Luxury Beach Villa",
    location: "Goa, India",
    price: "From ₹7,500",
  },
  {
    id: 2,
    image: "/home/hero2.jpg",
    title: "Mountain Retreat",
    location: "Manali, Himachal",
    price: "From ₹5,200",
  },
  {
    id: 3,
    image: "/home/hero3.jpg",
    title: "Urban City Apartment",
    location: "Mumbai, India",
    price: "From ₹6,800",
  },
  {
    id: 4,
    image: "/home/hero4.jpg",
    title: "Peaceful Forest Cabin",
    location: "Ooty, Tamil Nadu",
    price: "From ₹4,999",
  },
  {
    id: 5,
    image: "/home/hero5.jpg",
    title: "Desert Palace",
    location: "Jaisalmer, Rajasthan",
    price: "From ₹5,500",
  },
  {
    id: 6,
    image: "/home/hero2.jpg",
    title: "Backwater Bungalow",
    location: "Alleppey, Kerala",
    price: "From ₹6,000",
  },
  {
    id: 7,
    image: "/home/hero1.jpg",
    title: "Tea Garden Retreat",
    location: "Munnar, Kerala",
    price: "From ₹5,800",
  },
  {
  id: 8,
  image: "/home/hero3.jpg",
  title: "Lakeside Cottage",
  location: "Nainital, Uttarakhand",
  price: "From ₹6,200",
}

];

const facilities = [
  {
    title: "Best Security",
    description: "24/7 monitored surveillance to ensure your safety.",
    icon: <FaShieldAlt className="text-orange-500 text-3xl" />,
  },
  {
    title: "Free Internet",
    description: "High-speed Wi-Fi available across all areas.",
    icon: <FaWifi className="text-blue-500 text-3xl" />,
  },
  {
    title: "Solar Energy",
    description: "Eco-friendly solar-powered infrastructure.",
    icon: <FaSun className="text-yellow-500 text-3xl" />,
  },
  {
    title: "Mountain Biking",
    description: "Thrilling trails designed for adventurous rides.",
    icon: <FaBiking className="text-green-600 text-3xl" />,
  },
  {
    title: "Swimming & Fishing",
    description: "Relax in serene waters and enjoy recreational fishing.",
    icon: <FaSwimmer className="text-cyan-500 text-3xl" />,
  },
  {
    title: "GYM and Yoga",
    description: "Well-equipped fitness center and calming yoga studio.",
    icon: (
      <div className="flex space-x-1">
        <FaDumbbell className="text-orange-500 text-3xl" />
        <FaSpa className="text-purple-500 text-3xl" />
      </div>
    ),
  },
];

const FeaturesSection = () => {
  return (
    <div>
      {/* Header */}
     <div className="text-center bg-white py-6">
  {/* Centered Yellow Badge */}
  <div className="flex justify-center">
    <div className="bg-yellow-100 px-4 py-1 rounded-2xl">
      <p className="text-gray-900 text-sm uppercase tracking-wide font-medium">
        Featured Tours
      </p>
    </div>
  </div>

  {/* Heading */}
  <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mt-5">
    Amazing Tour Places <span className="text-[#fed42a]">Around the World</span> 
  </h1>
</div>


      {/* Marquee Scroll Cards */}
      <div className="overflow-hidden relative py-5 bg-white">
  <div className="marquee-track flex gap-6 w-max">
    {[...data, ...data].map((item, index) => (
      <div
        key={index}
        className="relative group rounded-xl overflow-hidden shadow-lg w-[350px] h-[270px] bg-white"
      >
        {/* Image */}
        <Image
          src={item.image}
          alt={item.title}
          width={300}
          height={250}
          className="w-full h-[270px] object-cover"
        />

        {/* Bottom Overlay */}
        <div className="absolute bottom-0 w-full h-[40%] bg-white translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-in-out p-3">
          <div className="flex items-center justify-between text-[#fed42a] text-sm mb-1">
            <div className="flex space-x-1">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <div className="flex text-gray-700 space-x-2 text-base">
              <FaCamera />
              <FaWhatsapp />
            </div>
          </div>

          <h3 className="text-gray-800 font-semibold text-sm truncate">{item.title}</h3>

          <div className="flex items-center text-gray-600 text-xs">
            <FaMapMarkerAlt className="mr-1" />
            <span className="truncate">{item.location}</span>
          </div>

          <p className="text-orange-600 text-sm font-bold mt-1">{item.price}</p>
        </div>
      </div>
    ))}
  </div>
</div>


      {/* Key Facilities */}
      <section className="bg-white py-9 px-4 md:px-10">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800"><span className="text-[#fed42a]">Key</span> Facilities</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className="bg-white border border-[#fed42a] shadow-md rounded-xl p-6 flex items-start space-x-4 hover:bg-gradient-to-r hover:from-yellow-100 hover:via-yellow-200 hover:to-yellow-300 hover:shadow-xl transition duration-300 ease-in-out"
            >
              <div className="text-[#fed42a] text-3xl">{facility.icon}</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-1">{facility.title}</h3>
                <p className="text-gray-600">{facility.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Marquee CSS */}
      <style jsx>{`
        .marquee-track {
          animation: scroll-marquee 60s linear infinite;
        }
        @keyframes scroll-marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
};

export default FeaturesSection;
