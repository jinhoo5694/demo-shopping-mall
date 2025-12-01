'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, X, Filter } from 'lucide-react';
import { useState } from 'react';

interface FilterOption {
  id: string;
  label: string;
  value: string;
}

interface ProductFilterProps {
  categories: FilterOption[];
  priceRanges: FilterOption[];
  selectedCategory?: string;
  selectedPriceRange?: string;
  onCategoryChange?: (category: string) => void;
  onPriceRangeChange?: (priceRange: string) => void;
  onClearFilters?: () => void;
}

export default function ProductFilter({
  categories,
  priceRanges,
  selectedCategory,
  selectedPriceRange,
  onCategoryChange,
  onPriceRangeChange,
  onClearFilters,
}: ProductFilterProps) {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isPriceOpen, setIsPriceOpen] = useState(false);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  const hasActiveFilters = selectedCategory || selectedPriceRange;

  return (
    <>
      {/* Mobile Filter Button */}
      <div className="md:hidden mb-6">
        <button
          onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
          className="w-full flex items-center justify-center gap-2 glass-strong rounded-xl px-4 py-3 hover:scale-105 transition-smooth"
        >
          <Filter className="w-5 h-5 text-purple-600" />
          <span className="font-semibold text-gray-200">필터</span>
          {hasActiveFilters && (
            <span className="bg-purple-500 text-white text-xs px-2 py-1 rounded-full">
              {[selectedCategory, selectedPriceRange].filter(Boolean).length}
            </span>
          )}
        </button>
      </div>

      {/* Desktop Filter Sidebar */}
      <div className="hidden md:block">
        <FilterContent
          categories={categories}
          priceRanges={priceRanges}
          selectedCategory={selectedCategory}
          selectedPriceRange={selectedPriceRange}
          onCategoryChange={onCategoryChange}
          onPriceRangeChange={onPriceRangeChange}
          onClearFilters={onClearFilters}
          isCategoryOpen={isCategoryOpen}
          isPriceOpen={isPriceOpen}
          setIsCategoryOpen={setIsCategoryOpen}
          setIsPriceOpen={setIsPriceOpen}
        />
      </div>

      {/* Mobile Filter Modal */}
      <AnimatePresence>
        {isMobileFilterOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileFilterOpen(false)}
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
            />

            {/* Filter Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25 }}
              className="fixed right-0 top-0 bottom-0 w-[80%] max-w-sm bg-slate-900 z-50 overflow-y-auto md:hidden shadow-2xl"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-gray-100">필터</h2>
                  <button
                    onClick={() => setIsMobileFilterOpen(false)}
                    className="p-2 hover:bg-slate-800 rounded-lg transition-smooth"
                  >
                    <X className="w-5 h-5 text-gray-400" />
                  </button>
                </div>

                <FilterContent
                  categories={categories}
                  priceRanges={priceRanges}
                  selectedCategory={selectedCategory}
                  selectedPriceRange={selectedPriceRange}
                  onCategoryChange={onCategoryChange}
                  onPriceRangeChange={onPriceRangeChange}
                  onClearFilters={onClearFilters}
                  isCategoryOpen={isCategoryOpen}
                  isPriceOpen={isPriceOpen}
                  setIsCategoryOpen={setIsCategoryOpen}
                  setIsPriceOpen={setIsPriceOpen}
                />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

interface FilterContentProps {
  categories: FilterOption[];
  priceRanges: FilterOption[];
  selectedCategory?: string;
  selectedPriceRange?: string;
  onCategoryChange?: (category: string) => void;
  onPriceRangeChange?: (priceRange: string) => void;
  onClearFilters?: () => void;
  isCategoryOpen: boolean;
  isPriceOpen: boolean;
  setIsCategoryOpen: (open: boolean) => void;
  setIsPriceOpen: (open: boolean) => void;
}

function FilterContent({
  categories,
  priceRanges,
  selectedCategory,
  selectedPriceRange,
  onCategoryChange,
  onPriceRangeChange,
  onClearFilters,
  isCategoryOpen,
  isPriceOpen,
  setIsCategoryOpen,
  setIsPriceOpen,
}: FilterContentProps) {
  const hasActiveFilters = selectedCategory || selectedPriceRange;

  return (
    <div className="space-y-6">
      {/* Clear Filters Button */}
      {hasActiveFilters && (
        <motion.button
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          onClick={onClearFilters}
          className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-gradient-secondary text-white rounded-lg hover:shadow-lg transition-smooth"
        >
          <X className="w-4 h-4" />
          <span className="text-sm font-semibold">필터 초기화</span>
        </motion.button>
      )}

      {/* Category Filter */}
      <div className="glass-subtle rounded-xl p-4">
        <button
          onClick={() => setIsCategoryOpen(!isCategoryOpen)}
          className="w-full flex items-center justify-between mb-3"
        >
          <span className="font-semibold text-gray-100">카테고리</span>
          <ChevronDown
            className={`w-5 h-5 text-gray-400 transition-transform ${
              isCategoryOpen ? 'rotate-180' : ''
            }`}
          />
        </button>

        <AnimatePresence>
          {isCategoryOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="space-y-2 overflow-hidden"
            >
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => onCategoryChange?.(category.value)}
                  className={`w-full text-left px-3 py-2 rounded-lg transition-smooth ${
                    selectedCategory === category.value
                      ? 'bg-gradient-primary text-white'
                      : 'hover:bg-purple-900/20 text-gray-300'
                  }`}
                >
                  <span className="text-sm">{category.label}</span>
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Price Range Filter */}
      <div className="glass-subtle rounded-xl p-4">
        <button
          onClick={() => setIsPriceOpen(!isPriceOpen)}
          className="w-full flex items-center justify-between mb-3"
        >
          <span className="font-semibold text-gray-100">가격대</span>
          <ChevronDown
            className={`w-5 h-5 text-gray-400 transition-transform ${
              isPriceOpen ? 'rotate-180' : ''
            }`}
          />
        </button>

        <AnimatePresence>
          {isPriceOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="space-y-2 overflow-hidden"
            >
              {priceRanges.map((range) => (
                <button
                  key={range.id}
                  onClick={() => onPriceRangeChange?.(range.value)}
                  className={`w-full text-left px-3 py-2 rounded-lg transition-smooth ${
                    selectedPriceRange === range.value
                      ? 'bg-gradient-primary text-white'
                      : 'hover:bg-purple-900/20 text-gray-300'
                  }`}
                >
                  <span className="text-sm">{range.label}</span>
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
