'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Tag, ArrowRight } from 'lucide-react';
import { Event } from '@/lib/types';
import { formatDateRange } from '@/lib/utils/format';
import GlassCard from '@/components/glassmorphism/GlassCard';

interface EventBannersProps {
  events: Event[];
}

export default function EventBanners({ events }: EventBannersProps) {
  const activeEvents = events.filter((event) => event.isActive).slice(0, 3);

  return (
    <section className="py-20 bg-gradient-to-b from-purple-50/50 via-white to-pink-50/30 dark:from-slate-800 dark:via-slate-850 dark:to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient-secondary">
            진행 중인 이벤트
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            특별한 혜택과 할인으로 만나는 2026 다이어리
          </p>
        </motion.div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {activeEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link href={`/events/${event.id}`}>
                <GlassCard hover className="overflow-hidden group h-full">
                  {/* Event Image */}
                  <div className="relative h-48 overflow-hidden rounded-t-2xl">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                    {/* Discount Badge */}
                    {event.discount && (
                      <div className="absolute top-4 right-4 bg-gradient-warm px-4 py-2 rounded-full shadow-lg">
                        <div className="flex items-center gap-1">
                          <Tag className="w-4 h-4 text-white" />
                          <span className="text-white font-bold">
                            {event.discount}% OFF
                          </span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Event Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                      {event.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                      {event.description}
                    </p>

                    {/* Event Period */}
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-4">
                      <Calendar className="w-4 h-4" />
                      <span>{formatDateRange(event.startDate, event.endDate)}</span>
                    </div>

                    {/* CTA */}
                    <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400 font-medium group-hover:gap-3 transition-all">
                      <span>자세히 보기</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </GlassCard>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Featured Event (if available) */}
        {activeEvents.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12"
          >
            <Link href={`/events/${activeEvents[0].id}`}>
              <GlassCard hover className="overflow-hidden">
                <div className="grid md:grid-cols-2 gap-8 items-center p-8 md:p-12">
                  {/* Text Content */}
                  <div className="order-2 md:order-1">
                    <div className="inline-block bg-gradient-primary text-white px-4 py-2 rounded-full mb-4">
                      <span className="font-bold">🔥 HOT EVENT</span>
                    </div>

                    <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-gray-100">
                      {activeEvents[0].title}
                    </h3>

                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                      {activeEvents[0].description}
                    </p>

                    <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 mb-6">
                      <Calendar className="w-5 h-5" />
                      <span className="text-sm">
                        {formatDateRange(activeEvents[0].startDate, activeEvents[0].endDate)}
                      </span>
                    </div>

                    {activeEvents[0].discount && (
                      <div className="text-4xl font-bold text-gradient-primary mb-6">
                        최대 {activeEvents[0].discount}% 할인
                      </div>
                    )}

                    <div className="inline-flex items-center gap-2 bg-gradient-primary text-white px-6 py-3 rounded-full font-bold hover:scale-105 transition-transform cursor-pointer">
                      <span>지금 바로 확인하기</span>
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Image */}
                  <div className="order-1 md:order-2 relative h-64 md:h-96 rounded-2xl overflow-hidden">
                    <Image
                      src={activeEvents[0].image}
                      alt={activeEvents[0].title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </GlassCard>
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}
