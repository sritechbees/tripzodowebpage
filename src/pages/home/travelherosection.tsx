import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function TravelHeroSection() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="w-full px-4 md:py-8 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center items-center gap-10">
        {/* Left Side - Images */}
        <div data-aos="fade-right" className="relative flex justify-center items-center w-full md:w-1/2">
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/home/travelhero1.jpg"
              alt="Mountain View"
              width={500}
              height={350}
              className="rounded-3xl object-cover"
            />
          </div>

          <div className="absolute bottom-0 left-0 -mb-10 w-48 h-36 rounded-xl overflow-hidden shadow-xl border-4 border-white animate-bounce">
            <Image
              src="/home/travelhero1.jpg"
              alt="Cave View"
              width={200}
              height={200}
              className="object-cover h-full w-full"
            />
          </div>

          <div className="absolute bottom-6 right-6 bg-white px-4 py-2 rounded-xl shadow-md border border-[#fed42a] text-center animate-pulse">
            <p className="text-[#fed42a] text-3xl font-bold leading-none">28</p>
            <p className="text-xs text-gray-500">Years of experience</p>
          </div>
        </div>

        {/* Right Side - Content */}
        <div data-aos="fade-left" className="flex flex-col justify-center w-full md:w-1/2 space-y-6">
          <span className="inline-block bg-[#fed42a]/20 w-32 text-[#fed42a] text-sm px-3 py-1 rounded-full">
            About Company
          </span>

          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
           <span className="text-[#fed42a]">Great opportunity</span>  for <br /> adventure & travels
          </h1>

          <ul className="space-y-4">
            {[
              {
                title: "Safety first always",
                desc: "Set perspiciatis unde omnis estenatus voluptatem totarem aperiae. We ensure your safety at every step of the journey.",
              },
              {
                title: "Low price & friendly",
                desc: "Quis autem vel eum iure voluptate velit esse nihil consequantur. Enjoy affordable adventures with no hidden charges.",
              },
              {
                title: "Trusted travel guide",
                desc: "At vero accusamus dignissimos ducimus blanditiis deleniti atque quos. Our guides are certified and highly experienced.",
              },
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-4 group">
                <div className="w-6 h-6 mt-1 rounded-full bg-[#fed42a] flex items-center justify-center">
                  <span className="text-white font-bold text-sm">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-md group-hover:text-[#fed42a] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 group-hover:text-gray-700 transition-colors duration-300">{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
