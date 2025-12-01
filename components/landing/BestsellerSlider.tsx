'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Star, ShoppingCart } from 'lucide-react';
import { Product } from '@/lib/types';
import { formatPrice } from '@/lib/utils/format';
import GlassCard from '@/components/glassmorphism/GlassCard';
import Button from '@/components/common/Button';

interface BestsellerSliderProps {
  products: Product[];
}

export default function BestsellerSlider({ products }: BestsellerSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;
  const maxIndex = Math.max(0, products.length - itemsPerPage);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  const visibleProducts = products.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 via-slate-800/50 to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient-primary">
            베스트셀러
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            가장 많은 사랑을 받고 있는 인기 다이어리 컬렉션
          </p>
        </motion.div>

        {/* Slider */}
        <div className="relative">
          {/* Navigation Buttons */}
          {currentIndex > 0 && (
            <button
              onClick={handlePrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 glass-strong p-3 rounded-full hover:scale-110 transition-smooth hidden md:block"
            >
              <ChevronLeft className="w-6 h-6 text-purple-400" />
            </button>
          )}
          {currentIndex < maxIndex && (
            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 glass-strong p-3 rounded-full hover:scale-110 transition-smooth hidden md:block"
            >
              <ChevronRight className="w-6 h-6 text-purple-400" />
            </button>
          )}

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatePresence>
              {visibleProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <GlassCard hover className="overflow-hidden h-full">
                    <Link href={`/products/${product.id}`} className="block">
                      {/* Product Image */}
                      <div className="relative h-64 overflow-hidden rounded-t-2xl">
                        <Image
                          src={product.images[0]}
                          alt={product.name}
                          fill
                          className="object-cover transition-transform duration-500 hover:scale-110"
                        />
                        {product.discount && (
                          <div className="absolute top-4 right-4 bg-gradient-secondary px-3 py-1 rounded-full">
                            <span className="text-white font-bold text-sm">
                              -{product.discount}%
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Product Info */}
                      <div className="p-6">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-sm text-purple-400 font-medium">
                            {product.category}
                          </span>
                          {product.rating && (
                            <div className="flex items-center gap-1 text-yellow-500">
                              <Star className="w-4 h-4 fill-current" />
                              <span className="text-sm font-medium text-gray-300">
                                {product.rating}
                              </span>
                            </div>
                          )}
                        </div>

                        <h3 className="text-xl font-bold text-gray-100 mb-2 line-clamp-2">
                          {product.name}
                        </h3>

                        <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                          {product.description}
                        </p>

                        <div className="flex items-center justify-between">
                          <div>
                            {product.originalPrice && (
                              <div className="text-sm text-gray-500 line-through">
                                {formatPrice(product.originalPrice)}
                              </div>
                            )}
                            <div className="text-2xl font-bold text-gradient-primary">
                              {formatPrice(product.price)}
                            </div>
                          </div>

                          <Button variant="primary" size="sm" className="group">
                            <ShoppingCart className="w-4 h-4 group-hover:scale-110 transition-transform" />
                          </Button>
                        </div>
                      </div>
                    </Link>
                  </GlassCard>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? 'w-8 bg-gradient-primary'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link href="/products?filter=bestseller">
            <Button variant="outline" size="lg" className="bg-slate-800 border-2 border-purple-500 !text-purple-300 hover:bg-purple-900/30 hover:border-purple-500 shadow-md">
              전체 베스트셀러 보기
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
