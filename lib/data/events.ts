import { Event } from '@/lib/types';

export const events: Event[] = [
  {
    id: 'event-1',
    title: '🎊 신년 특가 이벤트',
    description: '2026년을 맞이하여 전 상품 최대 30% 할인!',
    image: 'https://images.unsplash.com/photo-1467810563316-b5476525c0f9?w=1200',
    startDate: '2026-01-01',
    endDate: '2026-01-31',
    discount: 30,
    productIds: ['1', '3', '4', '7', '8'],
    isActive: true,
  },
  {
    id: 'event-2',
    title: '💝 조기 예약 할인',
    description: '얼리버드 고객님께만 드리는 특별 혜택',
    image: 'https://images.unsplash.com/photo-1513128034602-7814ccaddd4e?w=1200',
    startDate: '2025-12-01',
    endDate: '2025-12-31',
    discount: 20,
    productIds: ['2', '5', '6', '9', '10'],
    isActive: true,
  },
  {
    id: 'event-3',
    title: '🎁 프리미엄 에디션 출시',
    description: '한정판 프리미엄 다이어리 컬렉션',
    image: 'https://images.unsplash.com/photo-1506784365847-bbad939e9335?w=1200',
    startDate: '2026-01-15',
    endDate: '2026-02-28',
    productIds: ['8'],
    isActive: true,
  },
];

export const getAllEvents = (): Event[] => {
  return events;
};

export const getEventById = (id: string): Event | undefined => {
  return events.find(event => event.id === id);
};

export const getActiveEvents = (): Event[] => {
  return events.filter(event => event.isActive);
};
