'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Trash2 } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import CartItem from '@/components/cart/CartItem';
import CartSummary from '@/components/cart/CartSummary';
import EmptyCart from '@/components/cart/EmptyCart';
import Button from '@/components/common/Button';

export default function CartPage() {
  const { cart, clearCart } = useCart();

  const handleClearCart = () => {
    if (confirm('장바구니를 비우시겠습니까?')) {
      clearCart();
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <section className="relative bg-gradient-primary py-16 px-4">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl animate-float" />
          <div
            className="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full blur-3xl animate-float"
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
              <ShoppingCart className="w-8 h-8 text-white" />
              <h1 className="text-4xl md:text-5xl font-bold text-white">장바구니</h1>
            </div>
            <p className="text-lg text-white/90">
              {cart.length > 0
                ? `${cart.length}개의 상품이 담겨있습니다`
                : '장바구니가 비어있습니다'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Cart Content */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-7xl">
          {cart.length === 0 ? (
            <EmptyCart />
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-6">
                {/* Clear Cart Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center justify-between"
                >
                  <h2 className="text-2xl font-bold text-gray-100">
                    상품 목록 ({cart.length})
                  </h2>
                  <Button
                    onClick={handleClearCart}
                    variant="ghost"
                    size="sm"
                    className="gap-2 hover:text-red-400"
                  >
                    <Trash2 className="w-4 h-4" />
                    전체 삭제
                  </Button>
                </motion.div>

                {/* Cart Items List */}
                <AnimatePresence mode="popLayout">
                  {cart.map((item) => (
                    <CartItem key={item.product.id} item={item} />
                  ))}
                </AnimatePresence>
              </div>

              {/* Cart Summary */}
              <div className="lg:col-span-1">
                <CartSummary items={cart} />
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
