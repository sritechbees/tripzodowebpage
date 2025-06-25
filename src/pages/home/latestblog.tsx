import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';

const blogCategories = [
  {
    id: 1,
    image: '/home/breathtakingbeach_escapes.jpg',
    title: 'Breathtaking Beach Escapes',
    description: 'Sandy shores, crystal waters, and tropical serenity await you.',
    button: 'Explore Beaches',
  },
  {
    id: 2,
    image: '/home/majesticmountain_adventures.jpg',
    title: 'Majestic Mountain Adventures',
    description: 'Conquer peaks and explore breathtaking highland trails.',
    button: 'Discover Mountains',
  },
  {
    id: 3,
    image: '/home/trending1.jpg',
    title: 'Cultural Heritage Tours',
    description: 'Uncover stories woven in the ancient stones of history.',
    button: 'See Heritage Tours',
  },
  {
    id: 4,
    image: '/home/Honeymoon_Spots.jpg',
    title: 'Honeymoon Spots',
    description: 'Plan your dream escape with luxurious scenic spots.',
    button: 'Plan Your Escape',
  },
  {
    id: 5,
    image: '/home/exotic_wildlife.jpg',
    title: 'Exotic Wildlife & Nature Safaris',
    description: 'Get close to nature with unforgettable safari journeys.',
    button: 'Join a Safari',
  },
  {
    id: 6,
    image: '/home/travelhero1.jpg',
    title: 'Latest Blogs',
    description: 'Catch up on trends, stories, and expert travel tips Blogs.',
    button: 'Read Blogs',
  },
];

const BlogCategoryCards = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="py-2 px-6 bg-white">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800" data-aos="fade-up">Explore by<span className='text-[#fed42a]'> Travel Category</span> </h2>
        <p className="text-gray-600 mt-2" data-aos="fade-up" data-aos-delay="100">
          Discover experiences tailored to every type of traveler.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 px-5 lg:grid-cols-3 gap-10 mb-5 max-w-7xl mx-auto">
        {blogCategories.map((category, index) => (
          <div
            key={category.id}
            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <Image
              src={category.image}
              alt={category.title}
              width={500}
              height={300}
              className="w-full h-56 object-cover"
            />
            <div className="p-6 text-left">
              <h3 className="text-xl font-bold text-gray-800 mb-2">{category.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{category.description}</p>
             
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogCategoryCards;
