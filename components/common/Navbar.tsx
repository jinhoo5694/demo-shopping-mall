'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ShoppingCart, Menu, X, Package } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { totalItems } = useCart();

  const navLinks = [
    { href: '/', label: '홈' },
    { href: '/products', label: '상품' },
    { href: '/events', label: '이벤트' },
    { href: '/cart', label: '장바구니' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-700 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 transition-smooth hover:opacity-80">
            <Package className="w-8 h-8 text-purple-400" />
            <span className="text-xl font-bold text-gradient-primary">
              2026 Diary
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-200 hover:text-purple-400 transition-smooth font-medium"
              >
                {link.label}
              </Link>
            ))}

            {/* Cart Icon with Badge */}
            <Link
              href="/cart"
              className="relative p-2 hover:bg-purple-900/30 rounded-full transition-smooth"
            >
              <ShoppingCart className="w-6 h-6 text-gray-200" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-gradient-primary text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-purple-900/30 transition-smooth"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-200" />
            ) : (
              <Menu className="w-6 h-6 text-gray-200" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-slate-900/95 backdrop-blur-xl border-t border-slate-700"
          >
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-2 text-gray-200 hover:bg-purple-900/30 rounded-lg transition-smooth font-medium"
                >
                  {link.label}
                </Link>
              ))}

              {/* Mobile Cart Link */}
              <Link
                href="/cart"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-2 px-4 py-2 text-gray-200 hover:bg-purple-900/30 rounded-lg transition-smooth font-medium"
              >
                <ShoppingCart className="w-5 h-5" />
                <span>장바구니 ({totalItems})</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
