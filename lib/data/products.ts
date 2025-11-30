import { Product } from '@/lib/types';

export const products: Product[] = [
  {
    id: '1',
    name: '2026 Minimal Daily Diary',
    price: 28000,
    originalPrice: 35000,
    category: '데일리',
    description: '심플하고 미니멀한 데일리 다이어리',
    longDescription: '깔끔한 디자인과 고급스러운 표지로 매일매일 기록하고 싶은 다이어리입니다. 프리미엄 용지를 사용하여 필기감이 우수하며, 하루하루를 소중히 기록할 수 있습니다.',
    images: [
      'https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=800',
      'https://images.unsplash.com/photo-1517842645767-c639042777db?w=800',
    ],
    colors: ['Black', 'Navy', 'Beige'],
    inStock: true,
    featured: true,
    bestseller: true,
    discount: 20,
    rating: 4.8,
    reviewCount: 156,
    tags: ['미니멀', '데일리', '베스트셀러'],
  },
  {
    id: '2',
    name: 'Floral Weekly Planner',
    price: 32000,
    category: '위클리',
    description: '꽃무늬가 아름다운 위클리 플래너',
    longDescription: '섬세한 꽃 패턴이 돋보이는 위클리 플래너로, 일주일 단위로 계획을 세우고 관리하기에 완벽합니다. 넉넉한 메모 공간과 함께 스티커 세트가 포함되어 있습니다.',
    images: [
      'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800',
      'https://images.unsplash.com/photo-1506784365847-bbad939e9335?w=800',
    ],
    colors: ['Pink', 'Lavender', 'Mint'],
    inStock: true,
    featured: true,
    rating: 4.6,
    reviewCount: 89,
    tags: ['플로럴', '위클리', '여성용'],
  },
  {
    id: '3',
    name: 'Modern Monthly Organizer',
    price: 25000,
    category: '먼슬리',
    description: '모던한 디자인의 먼슬리 오거나이저',
    longDescription: '한 달 전체를 한눈에 볼 수 있는 먼슬리 플래너입니다. 깔끔한 레이아웃으로 일정 관리가 편리하며, 월별 목표 설정 페이지가 포함되어 있습니다.',
    images: [
      'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800',
      'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=800',
    ],
    colors: ['Gray', 'White', 'Black'],
    inStock: true,
    bestseller: true,
    rating: 4.7,
    reviewCount: 124,
    tags: ['모던', '먼슬리', '직장인'],
  },
  {
    id: '4',
    name: 'Goal Tracker Diary',
    price: 35000,
    originalPrice: 42000,
    category: '목표',
    description: '목표 달성을 위한 트래커 다이어리',
    longDescription: '체계적인 목표 관리를 위해 설계된 특별한 다이어리입니다. 월별/주별 목표 설정, 습관 트래커, 성취도 체크리스트 등 다양한 템플릿이 포함되어 있습니다.',
    images: [
      'https://images.unsplash.com/photo-1517842645767-c639042777db?w=800',
      'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800',
    ],
    colors: ['Navy', 'Forest Green', 'Burgundy'],
    inStock: true,
    featured: true,
    isNew: true,
    discount: 17,
    rating: 4.9,
    reviewCount: 203,
    tags: ['목표', '자기계발', '신상'],
  },
  {
    id: '5',
    name: 'Gratitude Journal',
    price: 24000,
    category: '감사',
    description: '매일 감사를 기록하는 감사 일기',
    longDescription: '하루의 감사한 일들을 기록하며 긍정적인 마음가짐을 기를 수 있는 특별한 일기장입니다. 아침/저녁 루틴 체크와 감사 일기 템플릿이 마련되어 있습니다.',
    images: [
      'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=800',
      'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800',
    ],
    colors: ['Cream', 'Peach', 'Sky Blue'],
    inStock: true,
    rating: 4.5,
    reviewCount: 67,
    tags: ['감사', '긍정', '힐링'],
  },
  {
    id: '6',
    name: 'Travel Memory Book',
    price: 38000,
    category: '여행',
    description: '여행의 추억을 담는 트래블 다이어리',
    longDescription: '여행의 모든 순간을 기록할 수 있는 특별한 다이어리입니다. 사진을 붙일 수 있는 공간과 여행 경로 맵, 여행 체크리스트가 포함되어 있습니다.',
    images: [
      'https://images.unsplash.com/photo-1506784365847-bbad939e9335?w=800',
      'https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=800',
    ],
    colors: ['Tan', 'Olive', 'Brown'],
    inStock: true,
    isNew: true,
    rating: 4.7,
    reviewCount: 91,
    tags: ['여행', '추억', '포토북'],
  },
  {
    id: '7',
    name: 'Project Management Planner',
    price: 42000,
    originalPrice: 50000,
    category: '업무',
    description: '프로젝트 관리를 위한 전문 플래너',
    longDescription: '프로젝트 매니저와 팀 리더를 위한 전문 플래너입니다. 간트 차트, 업무 분장표, 회의록 템플릿 등 프로젝트 관리에 필요한 모든 것이 준비되어 있습니다.',
    images: [
      'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800',
      'https://images.unsplash.com/photo-1517842645767-c639042777db?w=800',
    ],
    colors: ['Black', 'Gray', 'Navy'],
    inStock: true,
    featured: true,
    discount: 16,
    rating: 4.8,
    reviewCount: 142,
    tags: ['업무', 'PM', '전문가용'],
  },
  {
    id: '8',
    name: 'Vintage Leather Diary',
    price: 55000,
    category: '프리미엄',
    description: '빈티지 가죽 커버의 고급 다이어리',
    longDescription: '최고급 이탈리아산 가죽으로 제작된 프리미엄 다이어리입니다. 시간이 지날수록 멋스러워지는 에이징 효과와 함께 평생 사용할 수 있는 내구성을 자랑합니다.',
    images: [
      'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800',
      'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=800',
    ],
    colors: ['Brown', 'Black', 'Tan'],
    inStock: true,
    featured: true,
    bestseller: true,
    rating: 4.9,
    reviewCount: 178,
    tags: ['프리미엄', '가죽', '빈티지'],
  },
  {
    id: '9',
    name: 'Minimalist Dot Grid Notebook',
    price: 18000,
    category: '노트',
    description: '심플한 도트 그리드 노트',
    longDescription: '5mm 도트 그리드로 자유로운 필기와 드로잉이 가능한 노트입니다. 미니멀한 디자인으로 다양한 용도로 활용할 수 있으며, 180도 펼침이 가능합니다.',
    images: [
      'https://images.unsplash.com/photo-1506784365847-bbad939e9335?w=800',
      'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800',
    ],
    colors: ['White', 'Black', 'Gray'],
    inStock: true,
    rating: 4.4,
    reviewCount: 95,
    tags: ['도트', '노트', '심플'],
  },
  {
    id: '10',
    name: 'Creative Sketchbook Diary',
    price: 29000,
    category: '스케치',
    description: '창작을 위한 스케치북 다이어리',
    longDescription: '아티스트와 디자이너를 위한 고급 스케치북 겸 다이어리입니다. 두꺼운 드로잉 용지를 사용하여 다양한 재료로 작업이 가능하며, 날짜 기록 공간도 마련되어 있습니다.',
    images: [
      'https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=800',
      'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800',
    ],
    colors: ['Black', 'Kraft', 'Navy'],
    inStock: true,
    isNew: true,
    rating: 4.6,
    reviewCount: 73,
    tags: ['스케치', '드로잉', '아티스트'],
  },
];

// 유틸리티 함수들
export const getAllProducts = (): Product[] => {
  return products;
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};

export const getBestsellerProducts = (): Product[] => {
  return products.filter(product => product.bestseller);
};

export const getNewProducts = (): Product[] => {
  return products.filter(product => product.isNew);
};

export const getCategories = (): string[] => {
  const categories = products.map(product => product.category);
  return Array.from(new Set(categories));
};
