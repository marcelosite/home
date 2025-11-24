import React from 'react';
import { NOTIFICATIONS_DATA } from '../constants';
import { ArrowRight, Bell, AlertCircle, Star, Info } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const NotificationsSection: React.FC = () => {

  const getTypeStyles = (type: string) => {
    switch(type) {
        case 'Alert': return 'bg-carrotOrange text-white shadow-carrotOrange/20';
        case 'Highlight': return 'bg-harvestGold text-white shadow-harvestGold/20';
        case 'Update': return 'bg-skyBlue text-white shadow-skyBlue/20';
        default: return 'bg-gray-800 text-white';
    }
  };

  const getTypeIcon = (type: string) => {
     switch(type) {
        case 'Alert': return <AlertCircle size={12} strokeWidth={3} />;
        case 'Highlight': return <Star size={12} strokeWidth={3} />;
        case 'Update': return <Info size={12} strokeWidth={3} />;
        default: return <Bell size={12} strokeWidth={3} />;
    }
  };

  return (
    <section className="py-20 bg-offWhite relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-deepViolet/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none animate-float"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-electricPurple/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none animate-float-delayed"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
            <ScrollReveal>
              <span className="text-electricPurple font-medium mb-2 block text-lg">Stay in the Loop</span>
              <h2 className="text-4xl font-bold text-deepViolet">Community Notifications</h2>
            </ScrollReveal>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
            {NOTIFICATIONS_DATA.map((notif, index) => {
                const delayMap = ['0', '100', '200'];
                const delay = (delayMap[index % 3]) as '0' | '100' | '200';
                return (
                  <ScrollReveal key={notif.id} delay={delay}>
                    <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full group overflow-hidden relative">
                        
                        {/* Image Thumbnail - 16:9 Aspect Ratio */}
                        <div className="w-full aspect-video overflow-hidden relative">
                            <img 
                                src={notif.imageUrl} 
                                alt={notif.title} 
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" 
                            />
                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-deepViolet/80 via-transparent to-transparent opacity-60"></div>
                            
                            {/* Type Badge */}
                            <div className={`absolute top-4 left-4 px-2.5 py-1 rounded-lg text-xs font-bold uppercase tracking-wider shadow-lg flex items-center gap-1.5 ${getTypeStyles(notif.type)}`}>
                                {getTypeIcon(notif.type)}
                                {notif.type}
                            </div>
                            
                            {/* Date Tag */}
                            <div className="absolute bottom-3 right-3 bg-black/40 backdrop-blur-md border border-white/10 px-2 py-1 rounded text-[10px] text-white font-medium uppercase tracking-wide">
                                {notif.date}
                            </div>
                        </div>

                        <div className="p-7 flex flex-col flex-grow">
                            <h3 className="text-xl font-bold text-deepViolet mb-3 leading-tight group-hover:text-electricPurple transition-colors">
                                {notif.title}
                            </h3>
                            <p className="text-gray-600 text-sm mb-6 flex-grow leading-relaxed line-clamp-3">
                                {notif.message}
                            </p>
                            
                            <div className="pt-5 border-t border-gray-50 mt-auto">
                                <button className="text-sm font-bold text-deepViolet flex items-center justify-between w-full group/btn hover:text-electricPurple transition-colors">
                                    <span>{notif.linkText}</span>
                                    <span className="bg-gray-50 p-1.5 rounded-full group-hover/btn:bg-electricPurple/10 transition-colors">
                                        <ArrowRight size={16} className="text-gray-400 group-hover/btn:text-electricPurple group-hover/btn:translate-x-0.5 transition-all" />
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                  </ScrollReveal>
              );
            })}
        </div>

      </div>
    </section>
  );
};