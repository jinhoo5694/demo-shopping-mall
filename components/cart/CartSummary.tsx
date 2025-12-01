'use client';

import { motion } from 'framer-motion';
import { ShoppingBag, Tag, Truck } from 'lucide-react';
import Button from '@/components/common/Button';
import { formatPrice } from '@/lib/utils/format';
import { calculateCartTotal, calculateShippingFee } from '@/lib/utils/calculate';
import { CartItem } from '@/lib/types';

interface CartSummaryProps {
  items: CartItem[];
}

export default function CartSummary({ items }: CartSummaryProps) {
  const subtotal = calculateCartTotal(items);
  const discount = 0; // TODO: 이벤트 할인 로직 추가 시 구현
  const total = subtotal - discount;
  const shippingFee = calculateShippingFee(total);
  const finalTotal = total + shippingFee;

  const handleCheckout = () => {
    // 결제 페이지로 이동 (디자인만, 실제 구현 X)
    alert('결제 페이지로 이동합니다. (데모 버전)');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="glass-strong rounded-2xl p-6 sticky top-24"
    >
      <h2 className="text-2xl font-bold text-gray-100 mb-6 flex items-center gap-2">
        <ShoppingBag className="w-6 h-6 text-purple-400" />
        주문 요약
      </h2>

      {/* Summary Items */}
      <div className="space-y-4 mb-6">
        <div className="flex items-center justify-between text-gray-300">
          <span>상품 금액</span>
          <span className="font-semibold">{formatPrice(subtotal)}</span>
        </div>

        {discount > 0 && (
          <div className="flex items-center justify-between text-pink-400">
            <span className="flex items-center gap-2">
              <Tag className="w-4 h-4" />
              할인 금액
            </span>
            <span className="font-semibold">-{formatPrice(discount)}</span>
          </div>
        )}

        <div className="flex items-center justify-between text-gray-300">
          <span className="flex items-center gap-2">
            <Truck className="w-4 h-4" />
            배송비
          </span>
          <span className="font-semibold">
            {shippingFee === 0 ? (
              <span className="text-green-400">무료</span>
            ) : (
              formatPrice(shippingFee)
            )}
          </span>
        </div>

        {total < 30000 && (
          <div className="text-sm text-gray-300 bg-blue-900/30 p-3 rounded-lg">
            {formatPrice(30000 - total)} 더 담으면 무료 배송!
          </div>
        )}
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mb-6" />

      {/* Total */}
      <div className="flex items-center justify-between mb-6">
        <span className="text-xl font-bold text-gray-100">총 결제 금액</span>
        <span className="text-3xl font-bold text-gradient-primary">
          {formatPrice(finalTotal)}
        </span>
      </div>

      {/* Checkout Button */}
      <Button onClick={handleCheckout} variant="primary" size="lg" className="w-full gap-2">
        <ShoppingBag className="w-5 h-5" />
        결제하기
      </Button>

      {/* Additional Info */}
      <div className="mt-6 space-y-2 text-sm text-gray-400">
        <div className="flex items-center gap-2">
          <svg className="w-4 h-4 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <span>30,000원 이상 무료 배송</span>
        </div>
        <div className="flex items-center gap-2">
          <svg className="w-4 h-4 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <span>7일 이내 무료 반품/교환</span>
        </div>
        <div className="flex items-center gap-2">
          <svg className="w-4 h-4 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <span>안전한 결제 보장</span>
        </div>
      </div>
    </motion.div>
  );
}
