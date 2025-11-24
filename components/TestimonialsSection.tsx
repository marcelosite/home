import React from 'react';
import { TESTIMONIALS_DATA } from '../constants';
import { Quote } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-cornflowerBlue to-deepViolet text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Voices from Our Community</h2>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Real stories from the people building the future of AI.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((item) => (
            <div 
              key={item.id}
              className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl relative hover:bg-white/15 transition-colors duration-300"
            >
              <div className="absolute -top-5 -left-2 text-white/20">
                <Quote size={60} fill="currentColor" />
              </div>
              
              <p className="text-xl leading-relaxed mb-8 relative z-10 font-medium">
                "{item.quote}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="relative">
                   <img 
                    src={item.imageUrl} 
                    alt={item.name} 
                    className="w-14 h-14 rounded-full border-2 border-white/50 object-cover"
                  />
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-deepBlue"></div>
                </div>
                <div>
                  <h4 className="font-bold text-lg text-white">{item.name}</h4>
                  {item.role && <p className="text-base text-blue-200">{item.role}</p>}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};