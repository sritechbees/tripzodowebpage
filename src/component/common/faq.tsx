import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type FAQItem = {
  question: string;
  answer: string;
};

const faqData: FAQItem[] = [
  {
    question: "What services do you offer?",
    answer:
      "We provide a wide range of geospatial and drone-based solutions tailored to various industries.",
  },
  {
    question: "How can I contact customer support?",
    answer:
      "You can reach out to us via our contact form or email us at support@example.com.",
  },
  {
    question: "Is there a free trial available?",
    answer:
      "Yes, we offer a 14-day free trial on selected services. No credit card required.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Absolutely. You can cancel your subscription at any time without any hidden charges.",
  },
];

const Faq: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className=" py-2 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Image Section */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Image
            src="/company/faqimage.jpg"
            height={200}
            width={200}
            alt="BIM FAQ"
            className="w-full rounded-xl mt-16 shadow-md border-l-4 border-yellow-400"
          />
        </motion.div>

        {/* FAQ Section */}
        <div>
          <motion.h2
            className="text-2xl md:text-3xl font-bold text-gray-800 mt-16 mb-6"
            initial={{ x: 80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <span className="text-yellow-500">Frequently Asked</span> Questions
          </motion.h2>

          <div className="space-y-6">
            {faqData.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ x: 80, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
                onClick={() => toggleFAQ(index)}
                className="bg-white p-5 rounded-xl shadow-sm border-l-4 border-yellow-400 cursor-pointer"
              >
                <h4 className="text-lg font-semibold text-gray-800 hover:text-yellow-500 mb-1">
                  {faq.question}
                </h4>
                {activeIndex === index && (
                  <p className="text-sm text-gray-600 hover:text-yellow-500">
                    {faq.answer}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
