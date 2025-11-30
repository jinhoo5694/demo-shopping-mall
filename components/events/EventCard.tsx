'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, Tag, ArrowRight } from 'lucide-react';
import { Event } from '@/lib/types';
import { formatDate } from '@/lib/utils/format';

interface EventCardProps {
  event: Event;
  index?: number;
}

export default function EventCard({ event, index = 0 }: EventCardProps) {
  const isActive = new Date() >= new Date(event.startDate) && new Date() <= new Date(event.endDate);
  const isUpcoming = new Date() < new Date(event.startDate);
  const isEnded = new Date() > new Date(event.endDate);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={`/events/${event.id}`}>
        <motion.div
          whileHover={{ y: -8 }}
          className="group relative glass-subtle rounded-2xl overflow-hidden hover:glass-strong transition-smooth"
        >
          {/* Event Image */}
          <div className="relative aspect-[16/9] overflow-hidden">
            <Image
              src={event.image}
              alt={event.title}
              fill
              className="object-cover group-hover:scale-110 transition-smooth"
            />

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

            {/* Status Badge */}
            <div className="absolute top-4 left-4">
              {isActive && (
                <div className="glass-strong px-4 py-2 rounded-full flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-white font-semibold text-sm">진행중</span>
                </div>
              )}
              {isUpcoming && (
                <div className="glass-strong px-4 py-2 rounded-full">
                  <span className="text-white font-semibold text-sm">오픈 예정</span>
                </div>
              )}
              {isEnded && (
                <div className="bg-gray-500/80 px-4 py-2 rounded-full">
                  <span className="text-white font-semibold text-sm">종료</span>
                </div>
              )}
            </div>

            {/* Discount Badge */}
            {event.discount && (
              <div className="absolute top-4 right-4">
                <div className="bg-gradient-to-br from-pink-500 to-rose-500 px-4 py-2 rounded-full shadow-lg">
                  <span className="text-white font-bold text-lg">
                    {event.discount}% OFF
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Event Info */}
          <div className="p-6">
            {/* Title */}
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-smooth">
              {event.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2 leading-relaxed">
              {event.description}
            </p>

            {/* Event Details */}
            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                <Calendar className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                <span>
                  {formatDate(event.startDate)} - {formatDate(event.endDate)}
                </span>
              </div>
              {event.productIds && event.productIds.length > 0 && (
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <Tag className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                  <span>{event.productIds.length}개 상품 특가 진행</span>
                </div>
              )}
            </div>

            {/* CTA */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-200">
              <span className="text-sm font-semibold text-purple-600">
                이벤트 자세히 보기
              </span>
              <ArrowRight className="w-5 h-5 text-purple-600 group-hover:translate-x-2 transition-transform" />
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}
