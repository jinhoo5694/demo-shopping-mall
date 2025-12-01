'use client';

import { motion } from 'framer-motion';
import { Minus, Plus, ShoppingCart, Heart } from 'lucide-react';
import { useState } from 'react';
import Button from '@/components/common/Button';
import { Product } from '@/lib/types';
import { useCart } from '@/context/CartContext';

interface ProductOptionsProps {
  product: Product;
}

export default function ProductOptions({ product }: ProductOptionsProps) {
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0] || '');
  const [quantity, setQuantity] = useState(1);
  const [isLiked, setIsLiked] = useState(false);
  const { addToCart, isInCart } = useCart();

  const handleQuantityChange = (delta: number) => {
    setQuantity((prev) => Math.max(1, Math.min(10, prev + delta)));
  };

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
  };

  const inCart = isInCart(product.id);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.9 }}
      className="space-y-6"
    >
      {/* Color Selection */}
      {product.colors && product.colors.length > 0 && (
        <div className="space-y-3">
          <h3 className="text-lg font-bold text-gray-100">색상 선택</h3>
          <div className="flex flex-wrap gap-3">
            {product.colors.map((color) => (
              <button
                key={color}
                onClick={() => setSelectedColor(color)}
                className={`px-6 py-3 rounded-lg font-semibold transition-smooth ${
                  selectedColor === color
                    ? 'bg-gradient-primary text-white shadow-lg'
                    : 'glass-subtle text-gray-200 hover:glass-strong'
                }`}
              >
                {color}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Quantity Selection */}
      <div className="space-y-3">
        <h3 className="text-lg font-bold text-gray-100">수량 선택</h3>
        <div className="flex items-center gap-4">
          <div className="flex items-center glass-subtle rounded-xl overflow-hidden">
            <button
              onClick={() => handleQuantityChange(-1)}
              disabled={quantity <= 1}
              className="p-4 hover:bg-purple-900/20 transition-smooth disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Minus className="w-5 h-5 text-gray-300" />
            </button>
            <div className="px-8 py-4 font-bold text-xl text-gray-100 min-w-[80px] text-center">
              {quantity}
            </div>
            <button
              onClick={() => handleQuantityChange(1)}
              disabled={quantity >= 10}
              className="p-4 hover:bg-purple-900/20 transition-smooth disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Plus className="w-5 h-5 text-gray-300" />
            </button>
          </div>
          <span className="text-gray-400">최대 10개까지 구매 가능</span>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700" />

      {/* Total Price */}
      <div className="glass-subtle rounded-xl p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-lg text-gray-400">총 상품 금액</span>
          <div className="text-right">
            <div className="text-3xl font-bold text-gradient-primary">
              {((product.discount
                ? product.price * (1 - product.discount / 100)
                : product.price) * quantity).toLocaleString()}원
            </div>
            {quantity > 1 && (
              <div className="text-sm text-gray-400 mt-1">
                ({(product.discount
                  ? product.price * (1 - product.discount / 100)
                  : product.price).toLocaleString()}원 × {quantity}개)
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3">
        <Button
          onClick={handleAddToCart}
          variant={inCart ? 'secondary' : 'primary'}
          className="flex-1 gap-2"
          size="lg"
        >
          <ShoppingCart className="w-5 h-5" />
          {inCart ? '장바구니에 추가됨' : '장바구니 담기'}
        </Button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsLiked(!isLiked)}
          className={`p-4 rounded-lg transition-smooth ${
            isLiked
              ? 'bg-gradient-secondary text-white'
              : 'glass-subtle text-gray-300 hover:glass-strong'
          }`}
        >
          <Heart className={`w-6 h-6 ${isLiked ? 'fill-white' : ''}`} />
        </motion.button>
      </div>

      {/* Additional Info */}
      <div className="glass-subtle rounded-xl p-4 space-y-2 text-sm text-gray-400">
        <div className="flex items-center gap-2">
          <svg className="w-4 h-4 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span>오늘 주문 시 내일 도착 (서울/경기 지역)</span>
        </div>
        <div className="flex items-center gap-2">
          <svg className="w-4 h-4 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span>7일 이내 무료 반품/교환</span>
        </div>
      </div>
    </motion.div>
  );
}
