import React from 'react';
import { JOBS_DATA } from '../constants';
import { Button } from './Button';
import { ArrowRight } from 'lucide-react';

export const OpportunitiesSection: React.FC = () => {
  return (
    <section id="open-roles" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
            <span className="text-electricPurple font-medium mb-2 block text-lg">Join the Team</span>
            <h2 className="text-4xl font-bold text-deepViolet mb-4">Open Positions</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
                Help us build the decentralized future of AI. Find your role in our ecosystem.
            </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
            {JOBS_DATA.map((job) => (
                <div key={job.id} className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full group relative overflow-hidden">
                    {/* Hover Gradient Top Line */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-electricPurple to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                    
                    <div className="mb-6">
                        <span className="inline-block px-3 py-1 rounded-full bg-electricPurple/5 text-electricPurple text-xs font-bold uppercase tracking-wider mb-3">
                            {job.type}
                        </span>
                        <h3 className="text-2xl font-bold text-deepViolet group-hover:text-electricPurple transition-colors">
                            {job.role}
                        </h3>
                    </div>

                    <p className="text-gray-600 mb-8 leading-relaxed flex-grow">
                        {job.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-8">
                        {job.tags.map((tag, idx) => (
                            <span key={idx} className="text-xs font-medium text-gray-500 bg-gray-50 px-2 py-1 rounded-md border border-gray-100">
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* CTA Container - Pushed to bottom for alignment */}
                    <div className="pt-6 border-t border-gray-50 mt-auto">
                        <button className="w-full flex items-center justify-between text-base font-bold text-deepViolet group-hover:text-electricPurple transition-all">
                            <span>Read More</span>
                            <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>
            ))}
        </div>

        <div className="mt-16 flex justify-center">
            <Button variant="outline-dark" className="px-10 py-3 text-base">View All Positions</Button>
        </div>

      </div>
    </section>
  );
};