import React from 'react';
import { Button } from './Button';

export const CirclesSection: React.FC = () => {
  return (
    <section id="circles" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Content */}
            <div className="relative">
                <div className="absolute -top-10 -left-10 w-32 h-32 bg-harvestGold/10 rounded-full blur-2xl"></div>
                <div className="absolute bottom-0 right-0 w-40 h-40 bg-electricPurple/10 rounded-full blur-2xl"></div>
                
                <div className="relative z-10 grid grid-cols-2 gap-4">
                   <div className="space-y-4 mt-8">
                        <img src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&w=400&q=80" className="rounded-2xl shadow-lg w-full h-40 object-cover" alt="Community" />
                        <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=400&q=80" className="rounded-2xl shadow-lg w-full h-56 object-cover" alt="Meeting" />
                   </div>
                   <div className="space-y-4">
                        <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=400&q=80" className="rounded-2xl shadow-lg w-full h-56 object-cover" alt="Collaboration" />
                        <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=400&q=80" className="rounded-2xl shadow-lg w-full h-40 object-cover" alt="Tech" />
                   </div>
                </div>
            </div>

            {/* Right Text */}
            <div>
                <span className="text-electricPurple font-medium mb-2 block text-lg">Get Involved</span>
                <h2 className="text-4xl font-bold text-deepViolet mb-6">Community Organization</h2>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                    Deep Initiatives organizes its work across three collaborative layers.
                    Circles set direction, Workgroups execute focused tasks, and Hubs expand community reach worldwide.
                    Together, they ensure clarity, speed, and shared ownership across the entire ecosystem.
                </p>

                <div className="flex flex-wrap gap-4">
                    <Button variant="outline-dark" className="w-auto inline-flex text-base px-6">
                        View All Circles
                    </Button>
                    <Button variant="outline-dark" className="w-auto inline-flex text-base px-6">
                        Workgroups
                    </Button>
                    <Button variant="outline-dark" className="w-auto inline-flex text-base px-6">
                        Hubs
                    </Button>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};