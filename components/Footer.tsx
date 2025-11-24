import React from 'react';
import { Linkedin, Youtube, Send, Disc } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-offWhite border-t border-gray-200 text-deepViolet pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            
            {/* Brand Col */}
            <div className="col-span-1">
                <div className="flex items-center gap-2 mb-6">
                     {/* Simple CSS Logo for Footer */}
                    <div className="flex flex-col gap-1">
                        <div className="h-3 w-8 bg-brand-gradient rounded-sm"></div>
                        <div className="h-3 w-8 bg-brand-gradient rounded-sm"></div>
                    </div>
                    <span className="font-brand font-bold text-xl tracking-wide">Communities</span>
                </div>
                
                <h4 className="font-bold text-sm mb-4">Subscribe Newsletter</h4>
                <div className="flex gap-2 mb-4">
                    <button className="w-full py-2 px-4 border border-electricPurple/30 text-electricPurple rounded hover:bg-electricPurple hover:text-white transition-colors text-sm">
                        Subscribe Newsletter
                    </button>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed">
                    Receive new articles and resources directly on your inbox. Fill your email below to join our email newsletter today.
                </p>
            </div>

            {/* Links Col 1 */}
            <div>
                <h4 className="font-bold text-sm mb-6">Useful Links</h4>
                <ul className="space-y-3 text-sm text-gray-600">
                    <li><a href="#" className="hover:text-electricPurple transition-colors">Singularity.net</a></li>
                    <li><a href="#" className="hover:text-electricPurple transition-colors">deepfunding.ai</a></li>
                </ul>
            </div>

             {/* Links Col 2 */}
             <div>
                <h4 className="font-bold text-sm mb-6">Connect With Us</h4>
                <ul className="space-y-3 text-sm text-gray-600">
                    <li><a href="#" className="hover:text-electricPurple transition-colors">Community Forum</a></li>
                    <li><a href="#" className="hover:text-electricPurple transition-colors">Events Calendar</a></li>
                    <li><a href="#" className="hover:text-electricPurple transition-colors">Community Circles</a></li>
                    <li><a href="#" className="hover:text-electricPurple transition-colors">Open Roles</a></li>
                </ul>
            </div>

            {/* Social Col */}
             <div>
                <h4 className="font-bold text-sm mb-6">Follow Us</h4>
                <ul className="space-y-3 text-sm text-gray-600">
                    <li><a href="#" className="flex items-center gap-2 hover:text-electricPurple transition-colors"><Linkedin size={16}/> LinkedIn</a></li>
                    <li><a href="#" className="flex items-center gap-2 hover:text-electricPurple transition-colors"><Youtube size={16}/> YouTube</a></li>
                    <li><a href="#" className="flex items-center gap-2 hover:text-electricPurple transition-colors"><Send size={16}/> Telegram</a></li>
                    <li><a href="#" className="flex items-center gap-2 hover:text-electricPurple transition-colors"><Disc size={16}/> Discord</a></li>
                </ul>
            </div>
        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <div className="flex gap-6">
             <a href="#" className="underline hover:text-deepViolet">Circles</a>
             <a href="#" className="underline hover:text-deepViolet">Privacy Policy</a>
          </div>
        </div>

      </div>
    </footer>
  );
};