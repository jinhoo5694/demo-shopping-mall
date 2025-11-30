'use client';

import { motion } from 'framer-motion';
import { Product } from '@/lib/types';
import ProductCard from './ProductCard';
import ScrollReveal from '@/components/common/ScrollReveal';

interface RelatedProductsProps {
  currentProduct: Product;
  allProducts: Product[];
}

export default function RelatedProducts({ currentProduct, allProducts }: RelatedProductsProps) {
  // Get related products (same category, excluding current product)
  const relatedProducts = allProducts
    .filter(
      (p) => p.category === currentProduct.category && p.id !== currentProduct.id
    )
    .slice(0, 3);

  // If not enough products in same category, fill with other products
  if (relatedProducts.length < 3) {
    const otherProducts = allProducts
      .filter((p) => p.id !== currentProduct.id && !relatedProducts.includes(p))
      .slice(0, 3 - relatedProducts.length);
    relatedProducts.push(...otherProducts);
  }

  if (relatedProducts.length === 0) {
    return null;
  }

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="container mx-auto max-w-7xl">
        <ScrollReveal>
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4"
            >
              이런 상품은 어떠세요?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-gray-600 dark:text-gray-400"
            >
              {currentProduct.category} 카테고리의 인기 상품들
            </motion.p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {relatedProducts.map((product, index) => (
            <ScrollReveal key={product.id} delay={index * 0.1}>
              <ProductCard product={product} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
