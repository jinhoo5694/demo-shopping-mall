import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  text?: string;
  fullScreen?: boolean;
}

export default function LoadingSpinner({
  size = 'md',
  text,
  fullScreen = false,
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
  };

  const textSizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
  };

  const spinner = (
    <div className="flex flex-col items-center justify-center gap-4">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
      >
        <Loader2 className={`${sizeClasses[size]} text-purple-500`} />
      </motion.div>
      {text && (
        <p className={`${textSizeClasses[size]} text-gray-600 font-medium`}>
          {text}
        </p>
      )}
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white/80 backdrop-blur-sm z-50">
        {spinner}
      </div>
    );
  }

  return spinner;
}

// Alternative spinner variants for different use cases

export function DotSpinner({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const dotSizes = {
    sm: 'w-2 h-2',
    md: 'w-3 h-3',
    lg: 'w-4 h-4',
  };

  const containerSizes = {
    sm: 'gap-1',
    md: 'gap-2',
    lg: 'gap-3',
  };

  return (
    <div className={`flex items-center ${containerSizes[size]}`}>
      {[0, 1, 2].map((index) => (
        <motion.div
          key={index}
          className={`${dotSizes[size]} bg-purple-500 rounded-full`}
          animate={{
            y: [0, -10, 0],
            opacity: [1, 0.5, 1],
          }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            delay: index * 0.2,
          }}
        />
      ))}
    </div>
  );
}

export function PulseSpinner({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
  };

  return (
    <div className="relative flex items-center justify-center">
      <motion.div
        className={`${sizeClasses[size]} bg-purple-500 rounded-full absolute`}
        animate={{
          scale: [1, 2],
          opacity: [0.8, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
        }}
      />
      <motion.div
        className={`${sizeClasses[size]} bg-purple-500 rounded-full`}
        animate={{
          scale: [1, 0.8, 1],
          opacity: [1, 0.6, 1],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
        }}
      />
    </div>
  );
}
