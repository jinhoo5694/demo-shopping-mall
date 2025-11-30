'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowUpDown } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

export interface SortOption {
  id: string;
  label: string;
  value: string;
}

interface ProductSortProps {
  options: SortOption[];
  selectedSort: string;
  onSortChange: (sortValue: string) => void;
}

export default function ProductSort({ options, selectedSort, onSortChange }: ProductSortProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find((opt) => opt.value === selectedSort);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className="relative">
      {/* Sort Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 glass-subtle rounded-xl px-4 py-3 hover:glass-strong transition-smooth min-w-[200px] justify-between"
      >
        <div className="flex items-center gap-2">
          <ArrowUpDown className="w-5 h-5 text-purple-600" />
          <span className="font-semibold text-gray-700 text-sm">
            {selectedOption?.label || '정렬'}
          </span>
        </div>
        <ChevronDown
          className={`w-5 h-5 text-gray-600 transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full mt-2 left-0 right-0 glass-strong rounded-xl overflow-hidden shadow-xl z-10"
          >
            {options.map((option, index) => (
              <motion.button
                key={option.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => {
                  onSortChange(option.value);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-4 py-3 transition-smooth ${
                  selectedSort === option.value
                    ? 'bg-gradient-primary text-white'
                    : 'hover:bg-purple-50 text-gray-700'
                } ${index !== 0 ? 'border-t border-white/20' : ''}`}
              >
                <span className="text-sm font-medium">{option.label}</span>
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
