'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Minus, Plus, X } from 'lucide-react';
import { CartItem as CartItemType } from '@/lib/types';
import { formatPrice } from '@/lib/utils/format';
import { useCart } from '@/context/CartContext';

interface CartItemProps {
  item: CartItemType;
}

export default function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeFromCart } = useCart();

  const handleQuantityChange = (delta: number) => {
    const newQuantity = item.quantity + delta;
    if (newQuantity > 0 && newQuantity <= 10) {
      updateQuantity(item.product.id, newQuantity);
    }
  };

  const handleRemove = () => {
    removeFromCart(item.product.id);
  };

  const itemTotal = item.product.discount
    ? item.product.price * (1 - item.product.discount / 100) * item.quantity
    : item.product.price * item.quantity;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.3 }}
      className="glass-subtle rounded-2xl p-6 hover:glass-strong transition-smooth"
    >
      <div className="flex gap-6">
        {/* Product Image */}
        <Link href={`/products/${item.product.id}`} className="flex-shrink-0">
          <div className="relative w-32 h-32 rounded-xl overflow-hidden group">
            <Image
              src={item.product.images[0]}
              alt={item.product.name}
              fill
              className="object-cover group-hover:scale-110 transition-smooth"
            />
          </div>
        </Link>

        {/* Product Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between mb-3">
            <div className="flex-1 min-w-0 pr-4">
              <Link
                href={`/products/${item.product.id}`}
                className="block hover:text-purple-600 dark:hover:text-purple-400 transition-smooth"
              >
                <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100 mb-1 truncate">
                  {item.product.name}
                </h3>
              </Link>
              <p className="text-sm text-gray-600 dark:text-gray-400">{item.product.category}</p>
            </div>

            {/* Remove Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleRemove}
              className="p-2 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-smooth group"
            >
              <X className="w-5 h-5 text-gray-400 dark:text-gray-500 group-hover:text-red-600 dark:group-hover:text-red-400" />
            </motion.button>
          </div>

          {/* Price & Quantity */}
          <div className="flex items-end justify-between">
            {/* Quantity Controls */}
            <div className="flex items-center gap-3">
              <div className="flex items-center glass-subtle rounded-xl overflow-hidden">
                <button
                  onClick={() => handleQuantityChange(-1)}
                  disabled={item.quantity <= 1}
                  className="p-3 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-smooth disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Minus className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                </button>
                <div className="px-4 py-3 font-bold text-gray-800 dark:text-gray-100 min-w-[60px] text-center">
                  {item.quantity}
                </div>
                <button
                  onClick={() => handleQuantityChange(1)}
                  disabled={item.quantity >= 10}
                  className="p-3 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-smooth disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Plus className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                </button>
              </div>
              <span className="text-sm text-gray-500 dark:text-gray-400">최대 10개</span>
            </div>

            {/* Price */}
            <div className="text-right">
              <div className="text-2xl font-bold text-gradient-primary">
                {formatPrice(itemTotal)}
              </div>
              {item.product.discount ? (
                <div className="flex items-center gap-2 justify-end mt-1">
                  <span className="text-sm text-gray-400 dark:text-gray-500 line-through">
                    {formatPrice(item.product.price * item.quantity)}
                  </span>
                  <span className="text-sm font-semibold text-pink-600 dark:text-pink-400">
                    {item.product.discount}% OFF
                  </span>
                </div>
              ) : (
                <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  {formatPrice(item.product.price)} × {item.quantity}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
