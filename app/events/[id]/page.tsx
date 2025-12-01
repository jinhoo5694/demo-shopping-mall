'use client';

import { motion } from 'framer-motion';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Calendar, Tag, Sparkles } from 'lucide-react';
import { getEventById } from '@/lib/data/events';
import { getAllProducts } from '@/lib/data/products';
import EventTimer from '@/components/events/EventTimer';
import ProductCard from '@/components/products/ProductCard';
import { formatDate } from '@/lib/utils/format';
import { use } from 'react';

export default function EventDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const event = getEventById(id);

  if (!event) {
    notFound();
  }

  const allProducts = getAllProducts();
  const eventProducts = event.productIds
    ? allProducts.filter((p) => event.productIds?.includes(p.id))
    : [];

  const isActive =
    new Date() >= new Date(event.startDate) &&
    new Date() <= new Date(event.endDate);
  const isUpcoming = new Date() < new Date(event.startDate);

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-primary py-12 px-4">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl animate-float" />
          <div
            className="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full blur-3xl animate-float"
            style={{ animationDelay: '1s' }}
          />
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Back Button */}
            <Link
              href="/events"
              className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-6 transition-smooth"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>이벤트 목록으로</span>
            </Link>

            {/* Status Badge */}
            <div className="mb-4">
              {isActive && (
                <div className="inline-flex items-center gap-2 glass-strong px-4 py-2 rounded-full">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-white font-semibold">진행중</span>
                </div>
              )}
              {isUpcoming && (
                <div className="inline-flex glass-strong px-4 py-2 rounded-full">
                  <span className="text-white font-semibold">오픈 예정</span>
                </div>
              )}
              {!isActive && !isUpcoming && (
                <div className="inline-flex bg-gray-500/80 px-4 py-2 rounded-full">
                  <span className="text-white font-semibold">종료</span>
                </div>
              )}
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {event.title}
            </h1>

            {/* Event Info */}
            <div className="flex flex-wrap gap-4 text-white/90">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>
                  {formatDate(event.startDate)} - {formatDate(event.endDate)}
                </span>
              </div>
              {event.discount && (
                <div className="flex items-center gap-2">
                  <Tag className="w-5 h-5" />
                  <span className="font-bold">최대 {event.discount}% 할인</span>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Event Content */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Event Image */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="glass-strong rounded-2xl overflow-hidden"
              >
                <div className="relative aspect-video">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>

              {/* Event Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="glass-strong rounded-2xl p-6 md:p-8"
              >
                <h2 className="text-2xl font-bold text-gray-100 mb-4 flex items-center gap-2">
                  <Sparkles className="w-6 h-6 text-purple-400" />
                  이벤트 소개
                </h2>
                <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                  {event.description}
                </p>
              </motion.div>

              {/* Event Products */}
              {eventProducts.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <h2 className="text-2xl font-bold text-gray-100 mb-6 flex items-center gap-2">
                    <Tag className="w-6 h-6 text-purple-400" />
                    이벤트 상품 ({eventProducts.length}개)
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {eventProducts.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>
                </motion.div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Timer */}
                {(isActive || isUpcoming) && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <EventTimer
                      endDate={event.endDate}
                      startDate={event.startDate}
                    />
                  </motion.div>
                )}

                {/* Event Benefits */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="glass-strong rounded-2xl p-6"
                >
                  <h3 className="text-lg font-bold text-gray-100 mb-4">
                    이벤트 혜택
                  </h3>
                  <div className="space-y-3">
                    {event.discount && (
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-purple-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Tag className="w-4 h-4 text-purple-400" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-100">
                            특별 할인
                          </p>
                          <p className="text-sm text-gray-400">
                            최대 {event.discount}% 할인 혜택
                          </p>
                        </div>
                      </div>
                    )}
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-green-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg
                          className="w-4 h-4 text-green-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-100">무료 배송</p>
                        <p className="text-sm text-gray-400">
                          30,000원 이상 구매 시
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-blue-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg
                          className="w-4 h-4 text-blue-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-100">
                          빠른 배송
                        </p>
                        <p className="text-sm text-gray-400">
                          2-3일 이내 배송 완료
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Notice */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="glass-subtle rounded-2xl p-6"
                >
                  <h3 className="text-sm font-bold text-gray-100 mb-3">
                    유의사항
                  </h3>
                  <ul className="space-y-2 text-xs text-gray-400">
                    <li>• 이벤트 기간 동안에만 할인이 적용됩니다.</li>
                    <li>• 일부 상품은 조기 품절될 수 있습니다.</li>
                    <li>• 중복 할인은 불가능합니다.</li>
                    <li>• 이벤트 종료 후 정상가로 판매됩니다.</li>
                  </ul>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
