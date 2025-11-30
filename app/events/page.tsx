'use client';

import { motion } from 'framer-motion';
import { Calendar, Sparkles, Clock } from 'lucide-react';
import { getActiveEvents, getAllEvents } from '@/lib/data/events';
import EventCard from '@/components/events/EventCard';

export default function EventsPage() {
  const activeEvents = getActiveEvents();
  const allEvents = getAllEvents();
  const upcomingEvents = allEvents.filter(
    (event) => new Date() < new Date(event.startDate)
  );
  const endedEvents = allEvents.filter(
    (event) => new Date() > new Date(event.endDate)
  );

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50/40 via-white to-pink-50/40 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 dark:from-purple-900 dark:via-pink-900 dark:to-blue-900 py-16 px-4">
        <div className="absolute inset-0 opacity-10 dark:opacity-20">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white dark:bg-purple-300 rounded-full blur-3xl animate-float" />
          <div
            className="absolute bottom-10 right-10 w-40 h-40 bg-white dark:bg-pink-300 rounded-full blur-3xl animate-float"
            style={{ animationDelay: '1s' }}
          />
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Sparkles className="w-8 h-8 text-yellow-300" />
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                특별 이벤트
              </h1>
            </div>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              2026 다이어리를 특별한 가격에 만나보세요
              <br />
              기간 한정 특가 이벤트가 진행중입니다
            </p>
          </motion.div>
        </div>
      </section>

      {/* Active Events Section */}
      {activeEvents.length > 0 && (
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">진행중인 이벤트</h2>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                지금 바로 참여하실 수 있는 이벤트입니다
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {activeEvents.map((event, index) => (
                <EventCard key={event.id} event={event} index={index} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Upcoming Events Section */}
      {upcomingEvents.length > 0 && (
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <div className="flex items-center gap-3 mb-2">
                <Clock className="w-7 h-7 text-blue-600 dark:text-blue-400" />
                <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">오픈 예정 이벤트</h2>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                곧 시작될 특별한 이벤트를 미리 확인하세요
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingEvents.map((event, index) => (
                <EventCard key={event.id} event={event} index={index} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Ended Events Section */}
      {endedEvents.length > 0 && (
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <div className="flex items-center gap-3 mb-2">
                <Calendar className="w-7 h-7 text-gray-600 dark:text-gray-400" />
                <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">종료된 이벤트</h2>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                놓치신 이벤트는 다음 기회를 기다려주세요
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {endedEvents.map((event, index) => (
                <EventCard key={event.id} event={event} index={index} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* No Events Message */}
      {allEvents.length === 0 && (
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="glass-strong rounded-3xl p-12 max-w-md mx-auto text-center"
            >
              <Sparkles className="w-16 h-16 text-purple-600 dark:text-purple-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">
                준비중인 이벤트
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                곧 멋진 이벤트로 찾아뵙겠습니다
              </p>
            </motion.div>
          </div>
        </section>
      )}
    </main>
  );
}
