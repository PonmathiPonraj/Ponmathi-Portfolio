import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarini',
    role: 'Student',
    content: 'The trainer explained everything patiently and made sure we understood the concepts. I feel more confident now in creating websites. It was a great learning experience.',
    rating: 5
  },
  {
    id: 2,
    name: 'Jeyaram',
    role: 'Student',
    content: 'The mentor was supportive, and the hands-on projects helped me build real-world skills. The course structure was well-organized, and I was able to create responsive websites confidently.',
    rating: 4
  },
  {
    id: 3,
    name: 'Jeyadurga',
    role: 'Student',
    content: 'The instructor was knowledgeable, supportive, and responsive to questions, which made the learning process smooth and engaging.',
    rating: 5
  },
  {
    id: 4,
    name: 'Mathi Kumar',
    role: 'Software Developer',
    content: 'The training was incredibly thorough, and my trainer, Ponmathi mam, was excellent at making complex concepts easy to understand. Although I secured my placement independently, the skills and confidence I gained were invaluable.',
    rating: 5
  },
  {
    id: 5,
    name: 'Shyamala Devi',
    role: 'Frontend Developer',
    content: `I'm especially grateful to my mentor, Ponmathi mam, for her constant encouragement and insightful`,
    rating: 5
  },
  {
    id: 6,
    name: 'Jeya Kumar',
    role: 'Full Stack Developer',
    content: 'The mentorship was exceptional, with clear guidance and real-world project exposure. This helped me secure a placement within 1 month after completing the 3-month internship.',
    rating: 5
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section id="testimonials" className="py-20 bg-dark-900 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Words from My Students</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto"></div>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="relative h-72 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-dark-800 rounded-xl shadow-lg"
              >
                <Quote className="w-6 h-6 text-primary-500 mb-4 opacity-20" />
                <p className="text-lg text-gray-300 italic mb-4">"{testimonials[currentIndex].content}"</p>
                <div className="mt-2">
                  <h3 className="text-xl font-semibold text-white">{testimonials[currentIndex].name}</h3>
                  <p className="text-gray-400">{testimonials[currentIndex].role}</p>
                  <div className="flex justify-center mt-2">
                    {[...Array(5)].map((_, i) => (
                      <span 
                        key={i} 
                        className={`${i < testimonials[currentIndex].rating ? 'text-yellow-400' : 'text-gray-600'}`}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 p-2 rounded-full bg-dark-700 hover:bg-primary-500/20 text-primary-400 hover:text-white transition-colors duration-300"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 p-2 rounded-full bg-dark-700 hover:bg-primary-500/20 text-primary-400 hover:text-white transition-colors duration-300"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-primary-500 w-8' : 'bg-gray-600 hover:bg-gray-500'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
