import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: '0' | '100' | '200' | '300' | '400' | '500';
  threshold?: number;
  width?: 'full' | 'auto';
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({ 
  children, 
  className = '', 
  delay = '0',
  threshold = 0.1,
  width = 'full'
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Only animate once
        }
      },
      {
        threshold: threshold,
        rootMargin: '0px 0px -50px 0px' // Trigger slightly before element is fully in view
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  const delayClass = delay !== '0' ? `delay-${delay}` : '';
  const widthClass = width === 'full' ? 'w-full' : 'w-auto';

  return (
    <div 
      ref={ref}
      className={`reveal ${isVisible ? 'is-visible' : ''} ${delayClass} ${widthClass} ${className}`}
    >
      {children}
    </div>
  );
};