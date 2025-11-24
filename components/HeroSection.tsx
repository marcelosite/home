import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

const HERO_IMAGES = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80',
    title: 'Collaborate Globally',
    subtitle: 'Unite with minds from every corner of the world.'
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1600&q=80',
    title: 'Future of Governance',
    subtitle: 'Decentralized decision making at your fingertips.'
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1600&q=80',
    title: 'Innovate with AI',
    subtitle: 'Pushing the boundaries of what is possible.'
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&w=1600&q=80',
    title: 'Community First',
    subtitle: 'Built by the people, for the people.'
  }
];

export const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-advance logic
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_IMAGES.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_IMAGES.length) % HERO_IMAGES.length);
    setIsAutoPlaying(false);
  };

  return (
    <section className="relative bg-white pt-32 pb-20 overflow-hidden">
      {/* Ambient Background Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-electricPurple/5 rounded-full blur-3xl animate-float pointer-events-none"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-harvestGold/10 rounded-full blur-3xl animate-float-delayed pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Top Badge */}
        <ScrollReveal className="inline-block mb-8">
             <span className="py-2 px-4 rounded-full border border-electricPurple/30 text-electricPurple bg-electricPurple/5 text-sm font-medium tracking-wide">
                Welcome to Deep Community
             </span>
        </ScrollReveal>

        {/* Main Headline */}
        <ScrollReveal delay="100">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-deepViolet tracking-tight mb-6 leading-tight">
            Be Part of <span className="text-transparent bg-clip-text bg-brand-gradient">Decentralized AI's Future</span>
          </h1>
        </ScrollReveal>

        {/* Subheadline */}
        <ScrollReveal delay="200">
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
            Connect with a community passionate about AI funding. Together, we can transform ideas into groundbreaking projects with global impact.
          </p>
        </ScrollReveal>

        {/* CTA Buttons */}
        <ScrollReveal delay="300">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button 
              variant="primary" 
              className="w-full sm:w-auto min-w-[160px] hover:scale-105 hover:-translate-y-1 hover:shadow-xl hover:shadow-electricPurple/20 transition-all duration-300 ease-out"
            >
              Open Roles
            </Button>
            <Button 
              variant="secondary" 
              className="w-full sm:w-auto min-w-[160px] hover:scale-105 hover:-translate-y-1 hover:shadow-lg hover:border-electricPurple transition-all duration-300 ease-out"
            >
              About Deep Community
            </Button>
          </div>
        </ScrollReveal>

        {/* Hero Carousel with Glassmorphism */}
        <ScrollReveal delay="400">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl mx-auto max-w-6xl aspect-[4/3] md:aspect-[21/9] group">
            
            {/* Image Stack */}
            {HERO_IMAGES.map((img, index) => (
              <div 
                  key={img.id}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
              >
                  <img 
                    src={img.url} 
                    alt={img.title} 
                    className={`w-full h-full object-cover transition-transform duration-[6000ms] ease-out ${index === currentSlide ? 'scale-110' : 'scale-100'}`}
                  />
                  {/* Gradient Overlay for Text Readability - lighter on mobile */}
                  <div className="absolute inset-0 bg-gradient-to-t from-deepViolet/80 via-transparent to-transparent opacity-60 md:opacity-100"></div>
              </div>
            ))}

            {/* Glass Control Bar & Caption */}
            <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-12 md:right-12 z-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                
                {/* Active Slide Caption (Glass Card) */}
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 md:p-6 rounded-2xl w-full md:max-w-md text-left transform transition-all hover:bg-white/20 shadow-lg">
                  <div className="overflow-hidden">
                      <h3 className="text-white text-lg md:text-2xl font-bold mb-1 drop-shadow-md animate-fade-in">
                        {HERO_IMAGES[currentSlide].title}
                      </h3>
                      {/* Hide subtitle on mobile to save space */}
                      <p className="hidden md:block text-white/80 text-sm md:text-base drop-shadow-sm">
                        {HERO_IMAGES[currentSlide].subtitle}
                      </p>
                  </div>
                </div>

                {/* Controls */}
                <div className="hidden md:flex items-center gap-4 bg-black/20 backdrop-blur-md rounded-full p-2 border border-white/10 ml-auto">
                    <button onClick={prevSlide} className="p-2 rounded-full bg-white/10 text-white hover:bg-white hover:text-deepViolet transition-colors">
                      <ChevronLeft size={20} />
                    </button>
                    
                    <div className="flex gap-2 px-2">
                      {HERO_IMAGES.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => { setCurrentSlide(idx); setIsAutoPlaying(false); }}
                          className={`transition-all duration-300 rounded-full ${idx === currentSlide ? 'w-8 h-2 bg-electricPurple' : 'w-2 h-2 bg-white/50 hover:bg-white'}`}
                        />
                      ))}
                    </div>

                    <button onClick={nextSlide} className="p-2 rounded-full bg-white/10 text-white hover:bg-white hover:text-deepViolet transition-colors">
                      <ChevronRight size={20} />
                    </button>
                </div>

            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};