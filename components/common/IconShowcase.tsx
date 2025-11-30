'use client';

import {
  ShoppingCart,
  Heart,
  Search,
  Menu,
  X,
  ChevronRight,
  Star,
  Package,
  Truck,
  CreditCard
} from 'lucide-react';

export default function IconShowcase() {
  const icons = [
    { Icon: ShoppingCart, name: 'Shopping Cart' },
    { Icon: Heart, name: 'Heart' },
    { Icon: Search, name: 'Search' },
    { Icon: Menu, name: 'Menu' },
    { Icon: X, name: 'Close' },
    { Icon: ChevronRight, name: 'Chevron' },
    { Icon: Star, name: 'Star' },
    { Icon: Package, name: 'Package' },
    { Icon: Truck, name: 'Truck' },
    { Icon: CreditCard, name: 'Credit Card' }
  ];

  return (
    <div className="grid grid-cols-5 gap-4">
      {icons.map(({ Icon, name }) => (
        <div key={name} className="flex flex-col items-center gap-2 p-4 glass rounded-lg">
          <Icon className="w-8 h-8" />
          <span className="text-xs text-white/70">{name}</span>
        </div>
      ))}
    </div>
  );
}
