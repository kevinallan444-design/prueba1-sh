import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
  withIcon?: boolean;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  fullWidth = false, 
  withIcon = false,
  children, 
  className = '',
  ...props 
}) => {
  // Updated for modern, slightly squarer look (rounded-xl instead of full)
  const baseStyles = "py-4 px-8 rounded-xl font-bold text-lg transition-all duration-300 transform active:scale-95 flex items-center justify-center gap-2 uppercase tracking-wide";
  
  const variants = {
    // Neon background, Black text - High visibility
    primary: "bg-brand-neon text-brand-black hover:bg-white hover:shadow-[0_0_20px_rgba(254,253,127,0.4)]",
    // White background, Black text
    secondary: "bg-white text-brand-black hover:bg-gray-200",
    // Transparent with Neon border
    outline: "border-2 border-brand-neon text-brand-neon hover:bg-brand-neon hover:text-brand-black"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
      {withIcon && <ArrowRight size={20} />}
    </button>
  );
};

export default Button;