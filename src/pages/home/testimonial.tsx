import React from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';

const testimonials = [
  {
    name: 'Alice Johnson',
    role: 'Architect',
    message: 'This course transformed the way I visualize architecture!',
    image: 'https://randomuser.me/api/portraits/women/1.jpg',
  },
  {
    name: 'Brian Smith',
    role: 'Interior Designer',
    message: 'Very clear instructions and stunning output.',
    image: 'https://randomuser.me/api/portraits/men/2.jpg',
  },
  {
    name: 'Carlos Mendes',
    role: '3D Artist',
    message: 'I loved the workflow and project-based approach.',
    image: 'https://randomuser.me/api/portraits/men/3.jpg',
  },
  {
    name: 'Diana Lee',
    role: 'Urban Planner',
    message: 'Best investment for learning visualization tools!',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    name: 'Ethan Brown',
    role: 'Student',
    message: 'Easy to follow and beautifully explained concepts.',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    name: 'Farah Khan',
    role: 'Architectural Intern',
    message: 'Practical, professional, and perfect for my career growth.',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

const Testimonial = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="py-12 bg-white  to-white px-4 md:px-10">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10"><span className='text-[#fed42a]'>What Our</span> Clients Say</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3  gap-8 max-w-7xl mx-auto">
        {testimonials.map((t, i) => (
          <div
            key={i}
            data-aos="fade-up"
            data-aos-delay={i * 100}
            className="bg-white border border-[#fed42a] rounded-3xl shadow-lg p-6 text-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl group"
          >
            <div className="relative w-24 h-24 mx-auto mb-4">
              <Image
                src={t.image}
                alt={t.name}
                fill
                className="rounded-full object-cover border-4 border-[#fed42a] group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <p className="text-gray-600 text-sm italic mb-4 px-2">“{t.message}”</p>
            <h4 className="text-lg font-semibold text-[#fed42a]">{t.name}</h4>
            <p className="text-sm text-gray-900">{t.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
