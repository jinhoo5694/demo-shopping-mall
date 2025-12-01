'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function Button({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  className = ''
}: ButtonProps) {
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const baseStyles = 'rounded-lg font-semibold transition-all duration-200 inline-flex items-center justify-center';

  const variants = {
    primary: 'bg-gradient-primary text-white hover:shadow-lg hover:shadow-purple-500/50',
    secondary: 'bg-gradient-secondary text-white hover:shadow-lg hover:shadow-pink-500/50',
    outline: 'border-2 border-purple-400 text-purple-300 hover:border-purple-300 hover:bg-purple-900/20',
    ghost: 'text-gray-300 hover:bg-gray-800'
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${sizes[size]} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}
