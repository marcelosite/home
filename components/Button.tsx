import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline-dark' | 'outline-white';
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center justify-center gap-2 transform active:scale-95 shadow-sm";
  
  const variants = {
    primary: "bg-brand-gradient text-white hover:bg-brand-gradient-hover shadow-md hover:shadow-lg border border-transparent",
    secondary: "bg-white text-deepViolet border border-gray-200 hover:border-electricPurple hover:text-electricPurple",
    "outline-dark": "bg-transparent text-deepViolet border border-deepViolet hover:bg-deepViolet hover:text-white",
    "outline-white": "bg-transparent text-white border border-white hover:bg-white/10"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};