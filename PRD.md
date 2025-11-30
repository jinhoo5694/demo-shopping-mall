# 2026 다이어리 쇼핑몰 - Product Requirements Document (PRD)

## 프로젝트 개요

**프로젝트 명:** 2026 다이어리 쇼핑몰 데모 웹사이트
**목적:** 2026년 다이어리 제품을 판매하는 쇼핑몰의 프론트엔드 데모 페이지
**기술 스택:** Next.js, Tailwind CSS, TypeScript
**디자인 철학:** 글래스모피즘(Glassmorphism) + 그라데이션

> ⚠️ **중요:** 본 프로젝트는 데모 페이지로, 실제 결제 및 백엔드 기능은 구현되지 않습니다.

---

## 주요 기능 요구사항

### 1. 랜딩 페이지 (Landing Page)
- **목적:** 방문자의 첫 인상을 결정하는 메인 페이지
- **구성 요소:**
  - Hero Section: 2026 다이어리 메인 비주얼 및 캐치프레이즈
  - 베스트셀러 상품 슬라이더
  - 이벤트 배너/섹션
  - 카테고리 소개
  - CTA (Call-to-Action) 버튼
- **디자인:**
  - 글래스모피즘 카드
  - 부드러운 스크롤 애니메이션
  - 그라데이션 배경 (보라-핑크-파랑 계열 추천)

### 2. 상품 목록 페이지 (Product List)
- **목적:** 다이어리 제품들을 그리드 형태로 보여주는 페이지
- **구성 요소:**
  - 정적 상품 데이터 (최소 8-12개)
  - 상품 카드 (이미지, 제목, 가격, 간단한 설명)
  - 필터/카테고리 (디자인만, 실제 동작 불필요)
  - 정렬 옵션 UI (디자인만)
- **상품 카테고리 예시:**
  - 다이어리 타입: 데일리, 위클리, 먼슬리
  - 디자인: 미니멀, 플로럴, 모던, 빈티지
  - 특수 기능: 목표 플래너, 감사 일기, 프로젝트 다이어리
- **애니메이션:**
  - 카드 호버 효과
  - 페이지 진입 시 페이드인 애니메이션

### 3. 상품 상세 페이지 (Product Detail)
- **목적:** 개별 상품의 상세 정보 제공
- **구성 요소:**
  - 상품 이미지 갤러리 (메인 이미지 + 썸네일)
  - 상품명, 가격
  - 상세 설명
  - 옵션 선택 UI (색상, 수량 등 - 디자인만)
  - '장바구니 담기' 버튼
  - 관련 상품 추천 섹션
- **디자인:**
  - 글래스모피즘 정보 카드
  - 이미지 확대/슬라이드 기능

### 4. 장바구니 페이지 (Cart)
- **목적:** 선택한 상품 목록 및 주문 요약 표시
- **구성 요소:**
  - 장바구니 아이템 목록 (LocalStorage 활용)
  - 수량 조절 버튼 (+/-)
  - 개별 아이템 삭제 기능
  - 총 금액 계산 (프론트엔드 계산)
  - '주문하기' 버튼
- **기능:**
  - LocalStorage를 활용한 장바구니 상태 관리
  - 실시간 가격 업데이트

### 5. 주문하기 페이지 (Checkout)
- **목적:** 주문 정보 입력 페이지 (데모용)
- **구성 요소:**
  - 주문자 정보 입력 폼 (이름, 연락처, 주소)
  - 배송 정보
  - 결제 방법 선택 UI
  - 주문 상품 요약
  - '결제하기' 버튼 (클릭 시 성공 모달만 표시)
- **기능:**
  - 폼 유효성 검사 (프론트엔드)
  - 주문 완료 모달 (실제 처리는 없음)

### 6. 이벤트 페이지
- **6-1. 이벤트 로고/배너**
  - 랜딩 페이지 및 상단 네비게이션에 이벤트 배너 표시
  - 예: "신년 특가 이벤트", "조기 예약 할인"

- **6-2. 이벤트 상세 페이지**
  - 이벤트 소개 및 혜택 설명
  - 이벤트 상품 목록
  - 타이머 UI (디자인만, 실제 카운트다운 불필요)
  - 참여 방법 안내

### 7. 공통 컴포넌트

#### 7-1. 네비게이션 바
- 로고
- 메뉴: Home, Products, Events, Cart
- 장바구니 아이콘 (아이템 개수 뱃지)
- 반응형 햄버거 메뉴 (모바일)

#### 7-2. Footer
- 회사 정보 (데모 정보)
- 고객 센터 정보
- 소셜 미디어 링크 (아이콘)
- 저작권 표시
- 이용약관/개인정보처리방침 링크 (디자인만)

---

## 디자인 요구사항

### 글래스모피즘 (Glassmorphism)
- 반투명 배경 (`backdrop-blur`, `bg-opacity`)
- 미세한 테두리 효과
- 부드러운 그림자
- 레이어링을 통한 깊이감

### 그라데이션 색상 팔레트
```css
/* 추천 색상 조합 */
- Primary Gradient: #667eea → #764ba2 (보라)
- Secondary Gradient: #f093fb → #f5576c (핑크)
- Accent Gradient: #4facfe → #00f2fe (블루)
- Warm Gradient: #fa709a → #fee140 (핑크-옐로우)
```

### 반응형 디자인
- **모바일 우선 접근**
- 브레이크포인트:
  - Mobile: < 768px
  - Tablet: 768px - 1024px
  - Desktop: > 1024px

### 애니메이션
- 페이지 전환: Fade in/out
- 스크롤 애니메이션: Parallax, Reveal on scroll
- 호버 효과: Scale, Glow, Lift
- 로딩 스피너 (글래스모피즘 스타일)

---

## 페이지 구조

```
/                   → 랜딩 페이지
/products           → 상품 목록
/products/[id]      → 상품 상세
/cart               → 장바구니
/checkout           → 주문하기
/events             → 이벤트 페이지
/events/[id]        → 이벤트 상세
```

---

## 기술 스펙

### 프레임워크 & 라이브러리
- **Next.js 14+** (App Router)
- **React 18+**
- **TypeScript**
- **Tailwind CSS**

### 추가 라이브러리 (선택)
- `framer-motion`: 애니메이션
- `swiper` 또는 `react-slick`: 이미지 슬라이더
- `lucide-react` 또는 `react-icons`: 아이콘
- `react-hook-form`: 폼 관리 (선택)

### 상태 관리
- **Context API** 또는 **Zustand** (장바구니 상태)
- **LocalStorage** (장바구니 데이터 영속성)

### 이미지
- **Placeholder 이미지 사용:**
  - Unsplash: `https://source.unsplash.com/featured/?diary,notebook`
  - Picsum: `https://picsum.photos/400/600`
  - 또는 정적 이미지 파일 (`/public/images`)

---

## 정적 데이터 구조

### 상품 데이터 예시
```typescript
interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  description: string;
  images: string[];
  colors?: string[];
  inStock: boolean;
  featured?: boolean;
}
```

### 샘플 상품 목록 (최소 10개)
1. 2026 Minimal Daily Diary - 미니멀 데일리
2. Floral Weekly Planner - 플로럴 위클리
3. Modern Monthly Organizer - 모던 먼슬리
4. Goal Tracker Diary - 목표 달성 다이어리
5. Gratitude Journal - 감사 일기
6. Travel Memory Book - 여행 다이어리
7. Project Management Planner - 프로젝트 플래너
8. Vintage Leather Diary - 빈티지 가죽 다이어리
9. Minimalist Dot Grid Notebook - 미니멀 도트 노트
10. Creative Sketchbook Diary - 크리에이티브 스케치북

---

## 성공 기준

1. ✅ 모든 페이지가 반응형으로 동작
2. ✅ 글래스모피즘 디자인이 일관되게 적용
3. ✅ 부드러운 애니메이션 구현
4. ✅ 장바구니 기능이 LocalStorage로 동작
5. ✅ 최신 웹 디자인 트렌드 반영
6. ✅ 주요 페이지 로딩 시간 < 2초
7. ✅ 접근성 기본 준수 (시맨틱 HTML, alt 텍스트)

---

## 제외 사항

- ❌ 실제 결제 처리
- ❌ 백엔드 API 연동
- ❌ 회원가입/로그인 기능
- ❌ 데이터베이스 연동
- ❌ 실제 주문 처리
- ❌ 이메일 발송
- ❌ SEO 최적화 (데모용이므로 선택적)

---

## 프로젝트 타임라인 (참고)

이 프로젝트는 데모 목적이므로 빠른 개발을 목표로 합니다.

- **Phase 1:** 프로젝트 셋업 및 기본 레이아웃
- **Phase 2:** 랜딩 페이지 및 네비게이션
- **Phase 3:** 상품 목록 및 상세 페이지
- **Phase 4:** 장바구니 및 주문 페이지
- **Phase 5:** 이벤트 페이지
- **Phase 6:** 애니메이션 및 폴리싱

---

## 참고 자료

- [Glassmorphism CSS Generator](https://hype4.academy/tools/glassmorphism-generator)
- [Tailwind CSS Gradients](https://tailwindcss.com/docs/gradient-color-stops)
- [Next.js Documentation](https://nextjs.org/docs)
- [Framer Motion Examples](https://www.framer.com/motion/)

---

**작성일:** 2025-11-30
**버전:** 1.0
**작성자:** Demo Project Team
