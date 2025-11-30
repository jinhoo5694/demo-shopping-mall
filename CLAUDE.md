# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**2026 다이어리 쇼핑몰** - A demo e-commerce website for 2026 diary products. This is a **frontend-only demo** with no actual backend functionality.

**Tech Stack:**
- Next.js 16 (App Router)
- TypeScript 5.9+
- Tailwind CSS v4 (latest version with new config format)
- Framer Motion 12 (animations)
- React 19
- Context API (cart state management)
- LocalStorage (cart persistence)

**Design Philosophy:**
- Glassmorphism design with gradient colors
- Purple-Pink-Blue gradient palette
- Mobile-first responsive design
- Smooth animations and transitions

## Development Commands

```bash
# Start development server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Run production build
npm start

# Run linter
npm run lint
```

## Task Management

**CRITICAL:** Always reference and update [Task.md](Task.md) when working on this project.

- Check Task.md before starting any work to understand the current phase
- Update Task.md after completing each task
- **Work on multiple tasks at once:** Complete as many tasks as possible in one session before asking the user about the next steps
- Ask the user before proceeding to the next phase or major milestone
- The project follows a 9-phase development approach (see Task.md for details)

## Architecture Overview

### State Management Architecture
- **CartContext** (`context/CartContext.tsx`): Global cart state using React Context API
  - Manages cart items, quantities, and totals
  - Automatically syncs with LocalStorage on changes
  - Provides `useCart()` hook for components
  - LocalStorage key: `diary-cart`

- **ThemeContext** (`context/ThemeContext.tsx`): Dark mode toggle
  - Syncs with system preferences
  - LocalStorage key: `theme-preference`

### Component Organization
- **Landing components** (`components/landing/`): Hero, sliders, category sections
- **Product components** (`components/products/`): Cards, filters, galleries, options
- **Checkout components** (`components/checkout/`): Forms, payment UI, order summary
- **Event components** (`components/events/`): Event cards, timers
- **Common components** (`components/common/`): Navbar, Footer, Loading, Buttons, Page transitions
- **Glassmorphism components** (`components/glassmorphism/`): Reusable glass-effect wrappers

### Data Layer
- **Static product data** (`lib/data/products.ts`): 10 predefined diary products
- **Static event data** (`lib/data/events.ts`): 3 predefined marketing events
- **Type definitions** (`lib/types/index.ts`): Product, CartItem, Event interfaces
- **Utility functions** (`lib/utils/`): Formatting (prices, dates) and calculations

### Route Structure
```
/                       → Landing page (app/page.tsx)
/products               → Product list (app/products/page.tsx)
/products/[id]          → Product detail (app/products/[id]/page.tsx)
/cart                   → Shopping cart (app/cart/page.tsx)
/checkout               → Checkout flow (app/checkout/page.tsx)
/events                 → Event list (app/events/page.tsx)
/events/[id]            → Event detail (app/events/[id]/page.tsx)
```

## Development Workflow

### Phase-Based Development
The project is divided into 9 phases:
1. Project setup and basic layout
2. Common components and layout
3. Landing page
4. Product list page
5. Product detail page
6. Cart page
7. Checkout page
8. Event pages
9. Animations and polishing

### Important Notes
- **No backend implementation** - all data is static
- **No real payment processing** - checkout shows success modal only
- **Cart uses LocalStorage** - data persists in browser only
- **Demo images** - use Unsplash or placeholder images

## Tailwind CSS v4 Configuration

**IMPORTANT:** This project uses Tailwind CSS v4 with the new configuration format.

### Custom Gradient Backgrounds (defined in tailwind.config.ts)
```typescript
// Use these predefined gradients via bg-gradient-* classes
'bg-gradient-primary'    // Purple gradient: #667eea → #764ba2
'bg-gradient-secondary'  // Pink gradient: #f093fb → #f5576c
'bg-gradient-accent'     // Blue gradient: #4facfe → #00f2fe
'bg-gradient-warm'       // Warm gradient: #fa709a → #fee140
```

### Glassmorphism Pattern
Standard glassmorphism effect used throughout:
```tsx
className="backdrop-blur-md bg-white/10 border border-white/20 shadow-lg"
```

### Custom Animations (available in config)
- `animate-fade-in`: Simple fade in (0.5s)
- `animate-fade-in-up`: Fade in with upward movement (0.6s)
- `animate-slide-in-right`: Slide from left (0.5s)
- `animate-scale-in`: Scale up animation (0.3s)
- `animate-float`: Continuous floating effect (3s loop)

### Dark Mode
Uses `class` strategy. Toggle via ThemeContext.

## Key Implementation Details

### Framer Motion Usage
- **PageTransition component** (`components/common/PageTransition.tsx`): Wraps page content for transitions
- **ScrollReveal component** (`components/common/ScrollReveal.tsx`): Reveals elements on scroll
- Use `whileHover`, `whileTap`, `initial`, `animate`, `exit` props throughout
- Wrap route changes with `<AnimatePresence mode="wait">`

### Cart Implementation Pattern
```typescript
// Always use the useCart hook from CartContext
import { useCart } from '@/context/CartContext';

const { items, addItem, updateQuantity, removeItem, clearCart, total } = useCart();

// Adding to cart
addItem({
  id: product.id,
  name: product.name,
  price: product.price,
  quantity: 1,
  image: product.images[0]
});
```

### Image Handling
- Uses Next.js `<Image>` component for optimization
- External images from Unsplash require `remotePatterns` in next.config.ts
- Format: `https://images.unsplash.com/photo-*`

### Form Validation (Checkout)
- Client-side only validation
- Check required fields before submission
- Display success modal without actual payment processing
- Generate mock order number: `ORD-${Date.now()}`

### Responsive Design Breakpoints
- Mobile: < 768px (1 column layouts)
- Tablet: 768px - 1024px (2 column layouts)
- Desktop: > 1024px (3-4 column layouts)
- Use Tailwind responsive prefixes: `sm:`, `md:`, `lg:`, `xl:`

## What NOT to Implement

- Real payment processing (checkout shows modal only)
- Backend API integration (all data is static)
- User authentication/login
- Database connections
- Actual order processing
- Email sending
- Real-time inventory management
- Server-side validation

## Common Patterns & Conventions

### Naming Conventions
- Components: PascalCase (e.g., `ProductCard.tsx`)
- Utilities: camelCase (e.g., `formatPrice()`)
- Constants: UPPER_SNAKE_CASE (e.g., `SHIPPING_COST`)
- Context files: PascalCase with "Context" suffix (e.g., `CartContext.tsx`)

### Import Aliases
- `@/components/*` → `components/*`
- `@/lib/*` → `lib/*`
- `@/context/*` → `context/*`
- Configured in `tsconfig.json` paths

### Client vs Server Components
- **Client components** (use `"use client"`): All components using hooks, Context, or browser APIs
- **Server components** (default): Simple layout wrappers, static pages (minimal usage in this app)

## Reference Documents

- [PRD.md](PRD.md) - Complete product requirements document
- [Task.md](Task.md) - Development task tracking (ALWAYS update after completing tasks)
- [PROJECT_STRUCTURE.md](PROJECT_STRUCTURE.md) - Detailed file structure diagram
