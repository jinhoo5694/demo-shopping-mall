'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';

interface EventTimerProps {
  endDate: string;
  startDate?: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function EventTimer({ endDate, startDate }: EventTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isStarted, setIsStarted] = useState(false);
  const [isEnded, setIsEnded] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const start = startDate ? new Date(startDate) : null;
      const end = new Date(endDate);

      // Check if event has started
      if (start && now < start) {
        setIsStarted(false);
        const difference = start.getTime() - now.getTime();

        if (difference > 0) {
          setTimeLeft({
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
          });
        }
        return;
      }

      setIsStarted(true);

      // Calculate time until end
      const difference = end.getTime() - now.getTime();

      if (difference > 0) {
        setIsEnded(false);
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setIsEnded(true);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [endDate, startDate]);

  const timeUnits = [
    { label: '일', value: timeLeft.days },
    { label: '시간', value: timeLeft.hours },
    { label: '분', value: timeLeft.minutes },
    { label: '초', value: timeLeft.seconds },
  ];

  if (isEnded) {
    return (
      <div className="glass-strong rounded-2xl p-6 text-center">
        <div className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-300">
          <Clock className="w-5 h-5" />
          <span className="font-semibold">이벤트가 종료되었습니다</span>
        </div>
      </div>
    );
  }

  return (
    <div className="glass-strong rounded-2xl p-6">
      <div className="flex items-center justify-center gap-2 mb-4">
        <Clock className="w-5 h-5 text-purple-600 dark:text-purple-400" />
        <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100">
          {isStarted ? '이벤트 종료까지' : '이벤트 시작까지'}
        </h3>
      </div>

      <div className="grid grid-cols-4 gap-2 md:gap-4">
        {timeUnits.map((unit, index) => (
          <motion.div
            key={unit.label}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="text-center"
          >
            <div className="glass-subtle rounded-xl p-2 md:p-4 mb-1 md:mb-2">
              <motion.div
                key={unit.value}
                initial={{ scale: 1.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="text-2xl md:text-4xl font-bold text-gradient-primary"
              >
                {unit.value.toString().padStart(2, '0')}
              </motion.div>
            </div>
            <div className="text-xs md:text-sm font-semibold text-gray-600 dark:text-gray-400">
              {unit.label}
            </div>
          </motion.div>
        ))}
      </div>

      {isStarted && timeLeft.days === 0 && timeLeft.hours < 24 && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 bg-pink-50 dark:bg-pink-900/30 rounded-xl p-3 text-center"
        >
          <p className="text-sm font-semibold text-pink-600 dark:text-pink-400">
            ⚡ 마감 임박! 서둘러 주세요!
          </p>
        </motion.div>
      )}
    </div>
  );
}
