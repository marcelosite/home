import React from 'react';
import { Button } from './Button';
import { Trophy, Calendar, Users, ArrowRight, Timer, ExternalLink, Sparkles } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const HackathonSection: React.FC = () => {
  return (
    <section id="hackathon" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Decorative Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-[-100px] w-96 h-96 bg-electricPurple/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-[-100px] w-80 h-80 bg-harvestGold/10 rounded-full blur-3xl animate-float-delayed"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <span className="text-electricPurple font-medium mb-2 block text-lg flex items-center gap-2">
                <Sparkles size={18} /> Build the Future
              </span>
              <h2 className="text-4xl font-bold text-deepViolet">Global Hackathons</h2>
              <p className="text-gray-600 mt-3 text-lg">
                Join thousands of developers competing to build the next generation of Decentralized AI.
              </p>
            </div>
            <Button variant="outline-dark" className="hidden md:flex">
              View All Challenges
            </Button>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-12 gap-8">
            
            {/* FEATURED MAIN CARD (Span 7 cols) */}
            <div className="lg:col-span-7 flex flex-col">
              <ScrollReveal delay="100" className="h-full">
                <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 flex flex-col h-full group hover:shadow-2xl transition-all duration-300">
                    {/* Image Area */}
                    <div className="h-64 sm:h-80 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-t from-deepViolet/90 via-transparent to-transparent z-10"></div>
                        <img 
                            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80" 
                            alt="Hackathon Main" 
                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute top-4 left-4 z-20">
                            <span className="bg-green-500 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider animate-pulse flex items-center gap-1">
                                <span className="w-2 h-2 bg-white rounded-full"></span> Live Now
                            </span>
                        </div>
                        <div className="absolute bottom-6 left-6 z-20 text-white">
                             <h3 className="text-3xl md:text-4xl font-bold mb-2">Nigeria National AI Hackathon</h3>
                             <p className="text-white/80 flex items-center gap-2 text-sm md:text-base">
                                <Calendar size={16} /> Dec 06 - Dec 09, 2025 • In Person
                             </p>
                        </div>
                    </div>

                    {/* Content Area */}
                    <div className="p-8 flex-grow flex flex-col">
                        <div className="flex flex-wrap gap-6 mb-8 border-b border-gray-100 pb-8">
                            <div>
                                <span className="block text-sm text-gray-500 mb-1">Prize Pool</span>
                                <span className="text-2xl font-bold text-deepViolet">$50,000</span>
                            </div>
                            <div>
                                <span className="block text-sm text-gray-500 mb-1">Participants</span>
                                <span className="text-2xl font-bold text-deepViolet flex items-center gap-2">
                                    450+ <span className="text-xs font-normal bg-gray-100 px-2 py-0.5 rounded-full text-gray-600">Registered</span>
                                </span>
                            </div>
                            <div>
                                <span className="block text-sm text-gray-500 mb-1">Track</span>
                                <span className="text-xl font-bold text-deepViolet">General AI</span>
                            </div>
                        </div>

                        <div className="flex items-center justify-between mt-auto">
                            <div className="flex -space-x-3">
                                {[1,2,3,4].map(i => (
                                    <img key={i} src={`https://picsum.photos/40/40?random=${i}`} className="w-10 h-10 rounded-full border-2 border-white" alt="Participant" />
                                ))}
                                <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-500">
                                    +400
                                </div>
                            </div>
                            <Button variant="primary" className="px-8 shadow-lg shadow-electricPurple/20">
                                Register Now
                            </Button>
                        </div>
                    </div>
                </div>
              </ScrollReveal>
            </div>

            {/* SIDEBAR LIST (Span 5 cols) */}
            <div className="lg:col-span-5 flex flex-col gap-6">
                
                {/* Secondary Card 1 */}
                <ScrollReveal delay="200">
                  <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:border-electricPurple/30 transition-colors group">
                      <div className="flex justify-between items-start mb-4">
                          <div className="bg-blue-50 text-blue-600 p-2 rounded-lg">
                              <Trophy size={24} />
                          </div>
                          <span className="bg-gray-100 text-gray-600 text-xs font-bold px-2 py-1 rounded text-center">
                              Upcoming
                          </span>
                      </div>
                      <h4 className="text-xl font-bold text-deepViolet mb-2 group-hover:text-electricPurple transition-colors">Global DeFi x AI Sprint</h4>
                      <p className="text-gray-500 text-sm mb-4">
                          Build financial agents that operate autonomously.
                      </p>
                      <div className="flex items-center justify-between text-sm">
                          <span className="font-bold text-gray-700">$100,000 in Grants</span>
                          <span className="text-gray-400">Starts Jan 15</span>
                      </div>
                  </div>
                </ScrollReveal>

                {/* Secondary Card 2 */}
                <ScrollReveal delay="300">
                  <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:border-electricPurple/30 transition-colors group">
                      <div className="flex justify-between items-start mb-4">
                          <div className="bg-purple-50 text-purple-600 p-2 rounded-lg">
                              <Timer size={24} />
                          </div>
                          <span className="bg-gray-100 text-gray-600 text-xs font-bold px-2 py-1 rounded text-center">
                              Registration Open
                          </span>
                      </div>
                      <h4 className="text-xl font-bold text-deepViolet mb-2 group-hover:text-electricPurple transition-colors">Generative Agents Challenge</h4>
                      <p className="text-gray-500 text-sm mb-4">
                          Create diverse personas for the next-gen RPGs.
                      </p>
                      <div className="flex items-center justify-between text-sm">
                          <span className="font-bold text-gray-700">$25,000 Prize</span>
                          <span className="text-gray-400">Starts Feb 01</span>
                      </div>
                  </div>
                </ScrollReveal>

                {/* Stats / Call to Action Box */}
                <ScrollReveal delay="400" className="flex-grow flex flex-col">
                  <div className="bg-gradient-to-r from-deepViolet to-deepPurple rounded-2xl p-8 text-white flex flex-col justify-center flex-grow shadow-lg relative overflow-hidden h-full">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl transform translate-x-10 -translate-y-10"></div>
                      
                      <h4 className="text-2xl font-bold mb-2 relative z-10">Have an idea?</h4>
                      <p className="text-white/70 mb-6 text-sm relative z-10">
                          We support community-led hackathons. Apply for a grant to host your own event.
                      </p>
                      <button className="flex items-center gap-2 font-bold text-harvestGold hover:text-white transition-colors relative z-10">
                          Apply to Host <ExternalLink size={16} />
                      </button>
                  </div>
                </ScrollReveal>

            </div>
        </div>

        {/* Bottom Stats Strip */}
        <ScrollReveal delay="500">
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-gray-200 pt-8">
              <div className="text-center md:text-left">
                  <span className="block text-3xl font-bold text-deepViolet">$2.5M+</span>
                  <span className="text-sm text-gray-500">Total Funding Awarded</span>
              </div>
              <div className="text-center md:text-left">
                  <span className="block text-3xl font-bold text-deepViolet">120+</span>
                  <span className="text-sm text-gray-500">Projects Launched</span>
              </div>
              <div className="text-center md:text-left">
                  <span className="block text-3xl font-bold text-deepViolet">5k+</span>
                  <span className="text-sm text-gray-500">Global Builders</span>
              </div>
              <div className="text-center md:text-left">
                  <span className="block text-3xl font-bold text-deepViolet">15</span>
                  <span className="text-sm text-gray-500">Countries Represented</span>
              </div>
          </div>
        </ScrollReveal>
        
        <div className="mt-8 md:hidden">
             <Button variant="outline-dark" className="w-full justify-center">
                View All Challenges
            </Button>
        </div>

      </div>
    </section>
  );
};