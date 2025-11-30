# 프로젝트 구조

```
demo-shoppingmall/
├── app/                          # Next.js App Router 페이지
│   ├── layout.tsx               # 루트 레이아웃
│   ├── page.tsx                 # 랜딩 페이지 (/)
│   ├── globals.css              # 글로벌 스타일
│   ├── products/                # 상품 관련 페이지
│   │   ├── page.tsx            # 상품 목록 (/products)
│   │   └── [id]/               # 동적 라우트
│   │       └── page.tsx        # 상품 상세 (/products/[id])
│   ├── cart/                    # 장바구니
│   │   └── page.tsx            # 장바구니 페이지 (/cart)
│   ├── checkout/                # 주문하기
│   │   └── page.tsx            # 주문하기 페이지 (/checkout)
│   └── events/                  # 이벤트
│       ├── page.tsx            # 이벤트 목록 (/events)
│       └── [id]/               # 동적 라우트
│           └── page.tsx        # 이벤트 상세 (/events/[id])
│
├── components/                   # React 컴포넌트
│   ├── common/                  # 공통 컴포넌트
│   │   ├── Navbar.tsx          # 네비게이션 바
│   │   ├── Footer.tsx          # 푸터
│   │   └── ...                 # 기타 공통 컴포넌트
│   └── glassmorphism/           # 글래스모피즘 컴포넌트
│       ├── Card.tsx            # 글래스 카드
│       ├── Container.tsx       # 글래스 컨테이너
│       └── ...                 # 기타 글래스모피즘 컴포넌트
│
├── lib/                         # 라이브러리 및 유틸리티
│   ├── data/                    # 정적 데이터
│   │   ├── products.ts         # 상품 데이터
│   │   └── events.ts           # 이벤트 데이터
│   ├── types/                   # TypeScript 타입 정의
│   │   └── index.ts            # Product, CartItem 등
│   └── utils/                   # 유틸리티 함수
│       ├── format.ts           # 포맷팅 함수
│       └── calculate.ts        # 계산 함수
│
├── context/                     # React Context
│   └── CartContext.tsx         # 장바구니 상태 관리
│
├── public/                      # 정적 파일
│   └── images/                  # 이미지 파일
│
├── tailwind.config.ts           # Tailwind CSS 설정
├── next.config.ts               # Next.js 설정
├── tsconfig.json                # TypeScript 설정
├── package.json                 # 의존성 및 스크립트
├── .gitignore                   # Git 제외 파일
│
├── PRD.md                       # 제품 요구사항 문서
├── Task.md                      # 작업 진행 현황
└── CLAUDE.md                    # Claude Code 가이드
```

## 라우팅 구조

| 경로 | 파일 | 설명 |
|------|------|------|
| `/` | `app/page.tsx` | 랜딩 페이지 |
| `/products` | `app/products/page.tsx` | 상품 목록 |
| `/products/[id]` | `app/products/[id]/page.tsx` | 상품 상세 |
| `/cart` | `app/cart/page.tsx` | 장바구니 |
| `/checkout` | `app/checkout/page.tsx` | 주문하기 |
| `/events` | `app/events/page.tsx` | 이벤트 목록 |
| `/events/[id]` | `app/events/[id]/page.tsx` | 이벤트 상세 |

## 컴포넌트 계층

### 공통 컴포넌트 (components/common/)
- Navbar - 네비게이션 바 (모든 페이지)
- Footer - 푸터 (모든 페이지)
- Button - 버튼 컴포넌트
- Loading - 로딩 스피너

### 글래스모피즘 컴포넌트 (components/glassmorphism/)
- Card - 글래스 효과 카드
- Container - 글래스 효과 컨테이너
- Modal - 글래스 효과 모달

## 데이터 흐름

1. 정적 데이터: `lib/data/` → 페이지/컴포넌트
2. 타입 정의: `lib/types/` → 전역 사용
3. 장바구니 상태: `context/CartContext` → LocalStorage ↔ 컴포넌트
