import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../constants';
import { Button } from './Button';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 z-50 w-full transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-white py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer gap-3" onClick={() => window.scrollTo(0,0)}>
            {/* 
              Replaced gradients with solid colors for maximum reliability 
              across all browsers and routing states.
            */}
            <svg width="36" height="36" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-10 w-10">
              {/* D - Top Left (Orange) */}
              <path fillRule="evenodd" clipRule="evenodd" d="M0 0H22C34 0 45 10 45 22.5C45 35 34 45 22 45H0V0ZM13 13V32H22C27 32 31 28 31 22.5C31 17 27 13 22 13H13Z" fill="#F3AB10" />
              
              {/* E - Top Right (Lines) (Purple) */}
              <rect x="55" y="0" width="45" height="9" rx="4" fill="#B620E0" />
              <rect x="55" y="18" width="45" height="9" rx="4" fill="#B620E0" />
              <rect x="55" y="36" width="45" height="9" rx="4" fill="#B620E0" />

              {/* E - Bottom Left (Lines) (Purple) */}
              <rect x="0" y="55" width="45" height="9" rx="4" fill="#B620E0" />
              <rect x="0" y="73" width="45" height="9" rx="4" fill="#B620E0" />
              <rect x="0" y="91" width="45" height="9" rx="4" fill="#B620E0" />

              {/* P - Bottom Right (Blue) */}
              <path fillRule="evenodd" clipRule="evenodd" d="M55 55H78C89 55 98 62 98 71C98 80 89 87 78 87H68V100H55V55ZM68 76H76C79 76 82 74 82 71C82 68 79 66 76 66H68V76Z" fill="#32C6FF" />
            </svg>
            <span className="font-brand font-bold text-2xl tracking-wide text-deepViolet pt-1">
              Communities
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-600 hover:text-electricPurple hover:bg-deepViolet/5 font-semibold text-base transition-all duration-200 px-4 py-2 rounded-full tracking-tight"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex gap-3 items-center ml-4">
                <Button variant="secondary" className="py-2.5 px-6 text-sm border-none hover:bg-gray-50 text-gray-600">
                    Log in
                </Button>
                <Button variant="primary" className="py-2.5 px-6 text-sm">
                    Sign Up
                </Button>
            </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-deepViolet hover:text-electricPurple p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="lg:hidden bg-white border-b border-gray-100 absolute w-full shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-4 py-3 text-lg font-medium text-gray-700 hover:text-electricPurple hover:bg-gray-50 rounded-lg"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 grid grid-cols-2 gap-4">
               <Button variant="secondary" className="w-full justify-center">
                Log In
              </Button>
               <Button variant="primary" className="w-full justify-center">
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};