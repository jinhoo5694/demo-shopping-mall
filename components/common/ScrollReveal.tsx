'use client';

import { ReactNode } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  once?: boolean;
}

export default function ScrollReveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  once = true,
}: ScrollRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount: 0.3 });

  const directions = {
    up: { y: 50, x: 0 },
    down: { y: -50, x: 0 },
    left: { y: 0, x: 50 },
    right: { y: 0, x: -50 },
  };

  const initial = {
    opacity: 0,
    ...directions[direction],
  };

  const animate = isInView
    ? {
        opacity: 1,
        x: 0,
        y: 0,
      }
    : initial;

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={animate}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.4, 0, 0.2, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Parallax scroll effect component
interface ParallaxProps {
  children: ReactNode;
  offset?: number;
  className?: string;
}

export function Parallax({ children, offset = 50, className = '' }: ParallaxProps) {
  const ref = useRef(null);

  return (
    <motion.div
      ref={ref}
      initial={{ y: 0 }}
      whileInView={{ y: -offset }}
      viewport={{ once: false }}
      transition={{ duration: 0.8 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
