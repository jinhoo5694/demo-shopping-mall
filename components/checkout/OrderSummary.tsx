'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ShoppingBag, Tag, Truck, Receipt } from 'lucide-react';
import { CartItem } from '@/lib/types';
import { formatPrice } from '@/lib/utils/format';
import { calculateCartTotal, calculateShippingFee } from '@/lib/utils/calculate';

interface OrderSummaryProps {
  items: CartItem[];
}

export default function OrderSummary({ items }: OrderSummaryProps) {
  const { subtotal, discount, total } = calculateCartTotal(items);
  const shippingFee = calculateShippingFee(total);
  const finalTotal = total + shippingFee;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="glass-strong rounded-2xl p-6 md:p-8 space-y-6 sticky top-24"
    >
      <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
        <Receipt className="w-6 h-6 text-purple-600" />
        주문 요약
      </h2>

      {/* Product List */}
      <div className="space-y-3 max-h-64 overflow-y-auto">
        {items.map((item) => {
          const itemPrice = item.product.discount
            ? item.product.price * (1 - item.product.discount / 100)
            : item.product.price;

          return (
            <div
              key={item.product.id}
              className="flex gap-3 p-3 rounded-xl glass-subtle"
            >
              <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                <Image
                  src={item.product.images[0]}
                  alt={item.product.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-gray-800 text-sm truncate">
                  {item.product.name}
                </h4>
                <p className="text-xs text-gray-600 mt-1">
                  수량: {item.quantity}개
                </p>
                <p className="text-sm font-bold text-purple-600 mt-1">
                  {formatPrice(itemPrice * item.quantity)}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="border-t border-gray-200 pt-4" />

      {/* Price Breakdown */}
      <div className="space-y-3">
        <div className="flex items-center justify-between text-gray-700">
          <span className="flex items-center gap-2">
            <ShoppingBag className="w-4 h-4" />
            상품 금액
          </span>
          <span className="font-semibold">{formatPrice(subtotal)}</span>
        </div>

        {discount > 0 && (
          <div className="flex items-center justify-between text-pink-600">
            <span className="flex items-center gap-2">
              <Tag className="w-4 h-4" />
              할인 금액
            </span>
            <span className="font-semibold">-{formatPrice(discount)}</span>
          </div>
        )}

        <div className="flex items-center justify-between text-gray-700">
          <span className="flex items-center gap-2">
            <Truck className="w-4 h-4" />
            배송비
          </span>
          <span className="font-semibold">
            {shippingFee === 0 ? (
              <span className="text-green-600">무료</span>
            ) : (
              formatPrice(shippingFee)
            )}
          </span>
        </div>

        {total < 30000 && (
          <div className="text-xs text-gray-600 bg-blue-50 p-2 rounded-lg">
            {formatPrice(30000 - total)} 더 담으면 무료 배송!
          </div>
        )}
      </div>

      <div className="border-t border-gray-200 pt-4" />

      {/* Final Total */}
      <div className="flex items-center justify-between">
        <span className="text-xl font-bold text-gray-800">최종 결제 금액</span>
        <span className="text-3xl font-bold text-gradient-primary">
          {formatPrice(finalTotal)}
        </span>
      </div>

      {/* Additional Info */}
      <div className="bg-purple-50 rounded-xl p-4 space-y-2 text-sm text-gray-700">
        <div className="flex items-center gap-2">
          <svg
            className="w-4 h-4 text-purple-600 flex-shrink-0"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <span>30,000원 이상 무료 배송</span>
        </div>
        <div className="flex items-center gap-2">
          <svg
            className="w-4 h-4 text-purple-600 flex-shrink-0"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <span>7일 이내 무료 반품/교환</span>
        </div>
        <div className="flex items-center gap-2">
          <svg
            className="w-4 h-4 text-purple-600 flex-shrink-0"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
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
