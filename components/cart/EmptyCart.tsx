'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ShoppingCart, Sparkles } from 'lucide-react';
import Button from '@/components/common/Button';

export default function EmptyCart() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center py-20"
    >
      <div className="glass-strong rounded-3xl p-12 max-w-md text-center">
        {/* Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          className="inline-flex items-center justify-center w-24 h-24 bg-gradient-primary rounded-full mb-6"
        >
          <ShoppingCart className="w-12 h-12 text-white" />
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4"
        >
          장바구니가 비어있습니다
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
        >
          마음에 드는 상품을 장바구니에 담아보세요.
          <br />
          2026년을 특별하게 만들어줄 다이어리가 기다리고 있습니다.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col gap-4"
        >
          <Link href="/products" className="w-full">
            <Button variant="primary" size="lg" className="w-full gap-2 whitespace-nowrap bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all">
              <Sparkles className="w-5 h-5" />
              상품 둘러보기
            </Button>
          </Link>

          <Link href="/" className="w-full">
            <Button variant="outline" size="lg" className="w-full whitespace-nowrap bg-white dark:bg-slate-800 border-2 border-purple-400 dark:border-purple-500 !text-purple-700 dark:!text-purple-300 hover:bg-purple-50 dark:hover:bg-purple-900/30 hover:border-purple-500 font-semibold transition-all shadow-md">
              홈으로 가기
            </Button>
          </Link>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-20 left-20 w-32 h-32 bg-purple-200/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
          className="absolute bottom-20 right-20 w-40 h-40 bg-pink-200/30 rounded-full blur-3xl"
        />
      </div>
    </motion.div>
  );
}
