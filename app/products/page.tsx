'use client';

import { motion } from 'framer-motion';
import { useState, useMemo } from 'react';
import ProductCard from '@/components/products/ProductCard';
import ProductFilter from '@/components/products/ProductFilter';
import ProductSort, { SortOption } from '@/components/products/ProductSort';
import ScrollReveal from '@/components/common/ScrollReveal';
import { getAllProducts } from '@/lib/data/products';
import { Sparkles } from 'lucide-react';

const CATEGORIES = [
  { id: 'all', label: '전체', value: '' },
  { id: 'daily', label: '데일리 다이어리', value: '데일리' },
  { id: 'weekly', label: '위클리 플래너', value: '위클리' },
  { id: 'monthly', label: '먼슬리 오거나이저', value: '먼슬리' },
  { id: 'goal', label: '목표 다이어리', value: '목표' },
  { id: 'gratitude', label: '감사 일기', value: '감사' },
  { id: 'travel', label: '여행 기록', value: '여행' },
  { id: 'project', label: '프로젝트 플래너', value: '프로젝트' },
  { id: 'premium', label: '프리미엄', value: '프리미엄' },
  { id: 'note', label: '노트', value: '노트' },
];

const PRICE_RANGES = [
  { id: 'all', label: '전체', value: '' },
  { id: 'under20', label: '20,000원 미만', value: '0-20000' },
  { id: '20to40', label: '20,000원 ~ 40,000원', value: '20000-40000' },
  { id: '40to60', label: '40,000원 ~ 60,000원', value: '40000-60000' },
  { id: 'over60', label: '60,000원 이상', value: '60000-999999' },
];

const SORT_OPTIONS: SortOption[] = [
  { id: 'newest', label: '최신순', value: 'newest' },
  { id: 'popular', label: '인기순', value: 'popular' },
  { id: 'price-low', label: '낮은 가격순', value: 'price-low' },
  { id: 'price-high', label: '높은 가격순', value: 'price-high' },
  { id: 'rating', label: '평점순', value: 'rating' },
];

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedPriceRange, setSelectedPriceRange] = useState('');
  const [selectedSort, setSelectedSort] = useState('newest');

  const allProducts = getAllProducts();

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let products = [...allProducts];

    // Filter by category
    if (selectedCategory) {
      products = products.filter((p) => p.category === selectedCategory);
    }

    // Filter by price range
    if (selectedPriceRange) {
      const [min, max] = selectedPriceRange.split('-').map(Number);
      products = products.filter((p) => {
        const price = p.discount ? p.price * (1 - p.discount / 100) : p.price;
        return price >= min && price <= max;
      });
    }

    // Sort products
    switch (selectedSort) {
      case 'popular':
        products.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        break;
      case 'price-low':
        products.sort((a, b) => {
          const priceA = a.discount ? a.price * (1 - a.discount / 100) : a.price;
          const priceB = b.discount ? b.price * (1 - b.discount / 100) : b.price;
          return priceA - priceB;
        });
        break;
      case 'price-high':
        products.sort((a, b) => {
          const priceA = a.discount ? a.price * (1 - a.discount / 100) : a.price;
          const priceB = b.discount ? b.price * (1 - b.discount / 100) : b.price;
          return priceB - priceA;
        });
        break;
      case 'rating':
        products.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        break;
      case 'newest':
      default:
        // Keep original order (assumed newest first)
        break;
    }

    return products;
  }, [allProducts, selectedCategory, selectedPriceRange, selectedSort]);

  const handleClearFilters = () => {
    setSelectedCategory('');
    setSelectedPriceRange('');
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-900 via-pink-900 to-blue-900 py-20 px-4">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-40 h-40 bg-purple-300 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-10 right-10 w-60 h-60 bg-pink-300 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="w-6 h-6 text-yellow-300" />
              <span className="text-white/90 font-semibold">2026 다이어리 컬렉션</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              모든 상품
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              당신의 새해를 특별하게 만들어줄 완벽한 다이어리를 찾아보세요
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Filter Sidebar */}
            <aside className="w-full md:w-64 flex-shrink-0">
              <ScrollReveal direction="left">
                <ProductFilter
                  categories={CATEGORIES}
                  priceRanges={PRICE_RANGES}
                  selectedCategory={selectedCategory}
                  selectedPriceRange={selectedPriceRange}
                  onCategoryChange={setSelectedCategory}
                  onPriceRangeChange={setSelectedPriceRange}
                  onClearFilters={handleClearFilters}
                />
              </ScrollReveal>
            </aside>

            {/* Products Grid */}
            <div className="flex-1">
              {/* Header with Sort */}
              <ScrollReveal>
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-100 mb-2">
                      {selectedCategory || '전체 상품'}
                    </h2>
                    <p className="text-gray-400">
                      {filteredProducts.length}개의 상품
                    </p>
                  </div>
                  <ProductSort
                    options={SORT_OPTIONS}
                    selectedSort={selectedSort}
                    onSortChange={setSelectedSort}
                  />
                </div>
              </ScrollReveal>

              {/* Products Grid */}
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredProducts.map((product, index) => (
                    <ScrollReveal key={product.id} delay={index * 0.1}>
                      <ProductCard product={product} />
                    </ScrollReveal>
                  ))}
                </div>
              ) : (
                <ScrollReveal>
                  <div className="text-center py-20">
                    <div className="glass-subtle rounded-2xl p-12 inline-block bg-slate-800/50">
                      <p className="text-xl text-gray-300 mb-4">
                        검색 결과가 없습니다
                      </p>
                      <p className="text-gray-400">
                        다른 필터를 선택해보세요
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
