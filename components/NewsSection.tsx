import React from 'react';
import { ARTICLES_DATA } from '../constants';
import { ArrowRight } from 'lucide-react';
import { Button } from './Button';
import { ScrollReveal } from './ScrollReveal';

export const NewsSection: React.FC = () => {
  // Helper to assign a unique, harmonious gradient to each card based on index
  const getGradientTheme = (index: number) => {
    const themes = [
        'bg-gradient-to-br from-harvestGold via-orange-300 to-yellow-200',
        'bg-gradient-to-bl from-skyBlue via-blue-300 to-cyan-200',
        'bg-gradient-to-tr from-electricPurple via-purple-400 to-fuchsia-300'
    ];
    return themes[index % themes.length];
  };

  return (
    <section id="news" className="py-20 bg-offWhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <ScrollReveal>
            <span className="text-electricPurple font-medium mb-2 block text-lg">Community Blog</span>
            <h2 className="text-4xl font-bold text-deepViolet">Explore Our Latest Insights</h2>
            <p className="text-gray-500 mt-3 text-lg">Stay updated with our latest articles</p>
          </ScrollReveal>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
            {ARTICLES_DATA.map((article, idx) => {
              const delayMap = ['0', '100', '200'];
              const delay = (delayMap[idx % 3]) as '0' | '100' | '200';
              
              return (
              <ScrollReveal key={article.id} delay={delay}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group flex flex-col h-full hover:-translate-y-1">
                  
                  {/* Replaced Image with Abstract Branding Pattern */}
                  <div className={`h-60 overflow-hidden relative ${getGradientTheme(idx)}`}>
                    
                    {/* Organic blobs to differentiate from the grid/tech style of Events */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full blur-2xl transform translate-x-10 -translate-y-10 group-hover:translate-x-5 transition-transform duration-700"></div>
                    <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/20 rounded-full blur-3xl transform -translate-x-10 translate-y-10 group-hover:-translate-x-5 transition-transform duration-700"></div>
                    
                    {/* Subtle Noise Texture for Editorial Feel */}
                    <svg className="absolute inset-0 w-full h-full opacity-20 mix-blend-overlay">
                          <filter id="noiseFilter">
                              <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="3" stitchTiles="stitch" />
                          </filter>
                          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
                    </svg>

                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  <div className="p-7 flex flex-col flex-grow">
                    <div className="flex justify-between items-center mb-4">
                      <span className="px-3 py-1.5 bg-gray-100 text-deepViolet text-sm font-bold rounded-full uppercase tracking-wider">
                          {article.category}
                      </span>
                      <span className="text-sm text-gray-400 font-medium">{article.readTime}</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-deepViolet mb-3 leading-tight group-hover:text-electricPurple transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 text-base mb-6 line-clamp-3 flex-grow leading-relaxed">
                      {article.summary}
                    </p>
                    
                    <div className="pt-5 border-t border-gray-50 mt-auto">
                      <button className="text-base font-bold text-deepViolet flex items-center gap-2 hover:gap-3 transition-all">
                          Read more <ArrowRight size={16} className="text-electricPurple" />
                      </button>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            )})}
        </div>

        <div className="flex justify-center">
            <ScrollReveal delay="300">
              <Button variant="outline-dark">View All Blog Posts</Button>
            </ScrollReveal>
        </div>

      </div>
    </section>
  );
};