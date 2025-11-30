'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Calendar,
  CalendarDays,
  CalendarRange,
  Target,
  Heart,
  Plane,
  Briefcase,
  Gem,
  BookOpen,
  Palette
} from 'lucide-react';
import GlassCard from '@/components/glassmorphism/GlassCard';

const categories = [
  {
    name: '데일리',
    icon: Calendar,
    description: '매일의 소중한 순간을 기록하세요',
    color: 'from-purple-400 to-pink-400',
    href: '/products?category=데일리',
  },
  {
    name: '위클리',
    icon: CalendarDays,
    description: '주 단위로 계획을 관리하세요',
    color: 'from-pink-400 to-rose-400',
    href: '/products?category=위클리',
  },
  {
    name: '먼슬리',
    icon: CalendarRange,
    description: '한 달을 한눈에 파악하세요',
    color: 'from-blue-400 to-cyan-400',
    href: '/products?category=먼슬리',
  },
  {
    name: '목표',
    icon: Target,
    description: '체계적인 목표 달성을 위해',
    color: 'from-green-400 to-emerald-400',
    href: '/products?category=목표',
  },
  {
    name: '감사',
    icon: Heart,
    description: '감사한 마음을 담아내세요',
    color: 'from-red-400 to-pink-400',
    href: '/products?category=감사',
  },
  {
    name: '여행',
    icon: Plane,
    description: '여행의 추억을 기록하세요',
    color: 'from-orange-400 to-yellow-400',
    href: '/products?category=여행',
  },
  {
    name: '업무',
    icon: Briefcase,
    description: '프로젝트와 업무를 관리하세요',
    color: 'from-gray-600 to-gray-800',
    href: '/products?category=업무',
  },
  {
    name: '프리미엄',
    icon: Gem,
    description: '최고급 소재의 럭셔리 다이어리',
    color: 'from-yellow-500 to-amber-600',
    href: '/products?category=프리미엄',
  },
  {
    name: '노트',
    icon: BookOpen,
    description: '자유로운 필기와 메모를 위해',
    color: 'from-indigo-400 to-purple-400',
    href: '/products?category=노트',
  },
  {
    name: '스케치',
    icon: Palette,
    description: '창작과 드로잉을 위한 공간',
    color: 'from-teal-400 to-cyan-400',
    href: '/products?category=스케치',
  },
];

export default function CategorySection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white via-purple-50/30 to-white dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient-primary">카테고리</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            당신의 라이프스타일에 맞는 완벽한 다이어리를 찾아보세요
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Link href={category.href}>
                  <GlassCard
                    hover
                    className="text-center p-6 group cursor-pointer h-full flex flex-col items-center justify-center"
                  >
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-bold text-gray-800 dark:text-gray-100 mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                      {category.description}
                    </p>
                  </GlassCard>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Featured Categories */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/products?filter=bestseller">
              <GlassCard hover className="p-8 text-center group">
                <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-xl">
                  <span className="text-4xl">🏆</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">베스트셀러</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  가장 많은 사랑을 받는 인기 상품
                </p>
              </GlassCard>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Link href="/products?filter=new">
              <GlassCard hover className="p-8 text-center group">
                <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-xl">
                  <span className="text-4xl">✨</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">신상품</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  새롭게 출시된 최신 다이어리
                </p>
              </GlassCard>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link href="/events">
              <GlassCard hover className="p-8 text-center group">
                <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-pink-400 to-rose-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-xl">
                  <span className="text-4xl">🎁</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">특가 이벤트</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  한정 기간 특별 할인 혜택
                </p>
              </GlassCard>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
