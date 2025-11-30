import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
  children: ReactNode;
  variant?: 'default' | 'dark' | 'strong' | 'subtle';
  className?: string;
  hover?: boolean;
  animate?: boolean;
  onClick?: () => void;
}

export default function GlassCard({
  children,
  variant = 'default',
  className = '',
  hover = false,
  animate = true,
  onClick,
}: GlassCardProps) {
  const variantClasses = {
    default: 'glass',
    dark: 'glass-dark',
    strong: 'glass-strong',
    subtle: 'glass-subtle',
  };

  const baseClasses = `
    ${variantClasses[variant]}
    rounded-2xl
    transition-smooth
    ${hover ? 'hover:scale-105 hover:shadow-2xl cursor-pointer' : ''}
    ${className}
  `;

  const Component = animate ? motion.div : 'div';

  const animationProps = animate
    ? {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 },
      }
    : {};

  return (
    <Component
      className={baseClasses}
      onClick={onClick}
      {...animationProps}
    >
      {children}
    </Component>
  );
}
