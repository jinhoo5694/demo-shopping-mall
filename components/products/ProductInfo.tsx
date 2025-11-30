'use client';

import { motion } from 'framer-motion';
import { Star, Truck, ShieldCheck, Package } from 'lucide-react';
import { Product } from '@/lib/types';
import { formatPrice } from '@/lib/utils/format';

interface ProductInfoProps {
  product: Product;
}

export default function ProductInfo({ product }: ProductInfoProps) {
  const discountedPrice = product.discount
    ? product.price * (1 - product.discount / 100)
    : product.price;

  return (
    <div className="space-y-6">
      {/* Category */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <span className="inline-block px-4 py-1 bg-gradient-primary text-white text-sm font-semibold rounded-full">
          {product.category}
        </span>
      </motion.div>

      {/* Product Name */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-gray-100 leading-tight"
      >
        {product.name}
      </motion.h1>

      {/* Rating */}
      {product.rating && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex items-center gap-3"
        >
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-5 h-5 ${
                  i < Math.floor(product.rating || 0)
                    ? 'text-yellow-400 fill-yellow-400'
                    : 'text-gray-300 dark:text-gray-600'
                }`}
              />
            ))}
          </div>
          <span className="text-lg font-semibold text-gray-700 dark:text-gray-300">
            {product.rating}
          </span>
          <span className="text-gray-500 dark:text-gray-400">(128 리뷰)</span>
        </motion.div>
      )}

      {/* Price */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="space-y-2"
      >
        {product.discount ? (
          <>
            <div className="flex items-center gap-3">
              <span className="text-4xl font-bold text-gradient-primary">
                {formatPrice(discountedPrice)}
              </span>
              <span className="px-3 py-1 bg-gradient-secondary text-white text-lg font-semibold rounded-full">
                {product.discount}% OFF
              </span>
            </div>
            <div className="text-xl text-gray-400 dark:text-gray-500 line-through">
              {formatPrice(product.price)}
            </div>
          </>
        ) : (
          <div className="text-4xl font-bold text-gradient-primary">
            {formatPrice(product.price)}
          </div>
        )}
      </motion.div>

      {/* Stock Status */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        {product.inStock ? (
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-lg font-semibold">
            <Package className="w-5 h-5" />
            재고 있음
          </span>
        ) : (
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-400 rounded-lg font-semibold">
            <Package className="w-5 h-5" />
            품절
          </span>
        )}
      </motion.div>

      {/* Divider */}
      <div className="border-t border-gray-200 dark:border-gray-700" />

      {/* Description */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="space-y-3"
      >
        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">상품 설명</h2>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
          {product.description}
        </p>
      </motion.div>

      {/* Features */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
      >
        <div className="glass-subtle rounded-xl p-4 flex items-start gap-3">
          <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
            <Truck className="w-5 h-5 text-purple-600 dark:text-purple-400" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-1">무료 배송</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">30,000원 이상 구매 시</p>
          </div>
        </div>

        <div className="glass-subtle rounded-xl p-4 flex items-start gap-3">
          <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
            <ShieldCheck className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-1">품질 보증</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">1년 무상 A/S</p>
          </div>
        </div>

        <div className="glass-subtle rounded-xl p-4 flex items-start gap-3">
          <div className="p-2 bg-pink-100 dark:bg-pink-900/30 rounded-lg">
            <Package className="w-5 h-5 text-pink-600 dark:text-pink-400" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-1">안전 포장</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">파손 방지 포장</p>
          </div>
        </div>
      </motion.div>

      {/* Product Details */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="glass-subtle rounded-xl p-6 space-y-3"
      >
        <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100 mb-4">상세 정보</h3>
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-600 dark:text-gray-400">브랜드</span>
            <span className="font-semibold text-gray-800 dark:text-gray-200">2026 Diary</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600 dark:text-gray-400">원산지</span>
            <span className="font-semibold text-gray-800 dark:text-gray-200">대한민국</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600 dark:text-gray-400">소재</span>
            <span className="font-semibold text-gray-800 dark:text-gray-200">프리미엄 종이</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600 dark:text-gray-400">크기</span>
            <span className="font-semibold text-gray-800 dark:text-gray-200">A5</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
