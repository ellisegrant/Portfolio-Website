import React from 'react';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      text: "Ellise is an exceptional engineer who consistently delivers high-quality work. Her ability to architect scalable systems and lead technical discussions has been invaluable to our team. I highly recommend her for any senior engineering role.",
      author: 'Sarah Chen',
      role: 'VP of Engineering',
      company: 'TechCorp'
    },
    {
      text: "Working with Ellise was a game-changer for our startup. She not only built a robust platform but also helped establish our engineering culture and best practices. Her mentorship significantly improved our entire team's capabilities.",
      author: 'Michael Rodriguez',
      role: 'CTO',
      company: 'StartupX'
    },
    {
      text: "Ellise's technical expertise and problem-solving skills are outstanding. She led the migration of our legacy system to a modern microservices architecture, reducing our infrastructure costs by 40% while improving performance.",
      author: 'Jennifer Park',
      role: 'Engineering Manager',
      company: 'Enterprise Solutions Inc'
    }
  ];

  return (
    <section id="testimonials" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Client <span className="text-primary">Testimonials</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            Feedback from clients and colleagues I've had the pleasure of working with.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gray-900 border border-gray-800 rounded-lg p-8 hover:border-gray-700 transition-all"
            >
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-primary/30 mb-4" />
              
              {/* Testimonial Text */}
              <p className="text-gray-300 leading-relaxed mb-6">
                "{testimonial.text}"
              </p>

              {/* Author Info */}
              <div className="pt-4 border-t border-gray-800">
                <p className="font-semibold text-white">{testimonial.author}</p>
                <p className="text-sm text-gray-400">{testimonial.role}</p>
                <p className="text-sm text-gray-500">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;