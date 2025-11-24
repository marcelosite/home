import React from 'react';
import { FAQ_DATA } from '../constants';
import { Button } from './Button';
import { Linkedin, Twitter, MessageCircle, Send } from 'lucide-react';

export const NewsletterSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Left: Newsletter & Social */}
          <div className="space-y-10">
            <div>
              <h2 className="text-3xl font-bold text-deepBlue mb-4">Stay Informed & Connected</h2>
              <p className="text-gray-600 text-lg">
                Subscribe to get updates about events and opportunities. No spam, just pure community signal.
              </p>
            </div>

            <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="your@email.com" 
                className="flex-grow px-5 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-vibrantBlue focus:border-transparent transition-shadow"
                required
              />
              <Button variant="primary" type="submit">
                Subscribe
              </Button>
            </form>

            <div>
              <h4 className="font-bold text-deepBlue mb-4">Follow us</h4>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 bg-lightGray rounded-full flex items-center justify-center text-deepBlue hover:bg-vibrantBlue hover:text-white transition-all duration-200">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="w-12 h-12 bg-lightGray rounded-full flex items-center justify-center text-deepBlue hover:bg-vibrantBlue hover:text-white transition-all duration-200">
                  <Twitter size={20} />
                </a>
                <a href="#" className="w-12 h-12 bg-lightGray rounded-full flex items-center justify-center text-deepBlue hover:bg-vibrantBlue hover:text-white transition-all duration-200">
                  <MessageCircle size={20} />
                </a>
                <a href="#" className="w-12 h-12 bg-lightGray rounded-full flex items-center justify-center text-deepBlue hover:bg-vibrantBlue hover:text-white transition-all duration-200">
                  <Send size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Right: FAQ */}
          <div className="bg-lightGray p-8 rounded-2xl border border-gray-100">
            <h3 className="text-xl font-bold text-deepBlue mb-6">Frequently Asked Questions</h3>
            <div className="space-y-6">
              {FAQ_DATA.map((item, index) => (
                <div key={index} className="border-b border-gray-200 last:border-0 pb-4 last:pb-0">
                  <h4 className="font-semibold text-deepBlue mb-2">{item.question}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};