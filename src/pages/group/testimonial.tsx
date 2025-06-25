import Image from "next/image";

const testimonials = [
  {
    name: "Christine Eve",
    role: "Founder & CEO",
    image: "/group/testimonial.jpg",
    rating: 5,
    text: "Proin a lacus arcu. Nullam id dui eu orci maximus. Cras at auctor lectus, vel pretium tellus.",
    score: 99,
  },
  {
    name: "Kevin Smith",
    role: "Customer",
    image: "/group/testimonial.jpg",
    rating: 5,
    text: "Class aptent sociosqu ad litora torquent per conubia nostra. Auctor lectus vel pretium tellus.",
    score: 99,
  },
  {
    name: "Emily Johnson",
    role: "Travel Blogger",
    image: "/group/testimonial.jpg",
    rating: 5,
    text: "The experience was amazing! Every detail was perfectly organized and the staff was super friendly.",
    score: 99,
  },
  {
    name: "Michael Brown",
    role: "Frequent Traveller",
    image: "/group/testimonial.jpg",
    rating: 5,
    text: "I've joined multiple group tours and they never disappoint. Highly recommended for travelers!",
    score: 99,
  },
];

const Testimonials = () => {
  return (
    <section className=" bg-white text-center mb-12 mt-5 px-4 md:px-20">
        
      <div className="flex justify-center mb-8">
  <span className="bg-yellow-100 mt-4 hover:bg-yellow-400 text-gray-900 font-semibold py-2 px-6 rounded-md transition duration-300">
    Testimonials
  </span>
</div>
    
      <h2 className="text-3xl font-bold mb-12 text-gray-900">
        Read some of our repeat customers feedback
      </h2>

      <div className="grid md:grid-cols-2 gap-10 pb-4">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="relative bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:bg-[#fff9e6] group"
          >
            {/* Hover background effect */}
            <div className="absolute inset-0 bg-[url('/testimonials/bg.jpg')] bg-cover bg-center opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none" />

            {/* Top corner score badge */}
            <div className="absolute top-0 right-0 bg-[#fed42a] text-white text-lg font-semibold w-12 h-12 rounded-bl-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
              {t.score}
            </div>

            <div className="flex items-start p-6">
              <Image
                src={t.image}
                alt={t.name}
                width={60}
                height={60}
                className="rounded-full object-cover mr-4"
              />
              <div className="text-left">
                <div className="flex gap-1 text-[#fed42a] mb-1">
                  {Array(t.rating).fill("★").map((_, idx) => (
                    <span key={idx} className="text-sm">★</span>
                  ))}
                </div>
                <h3 className="font-bold text-lg text-gray-800">{t.name}</h3>
                <p className="text-sm text-gray-500 mb-2">{t.role}</p>
                <p className="text-gray-700 text-sm">{t.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
