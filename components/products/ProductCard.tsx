'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingCart, Heart, Star } from 'lucide-react';
import { Product } from '@/lib/types';
import { formatPrice } from '@/lib/utils/format';
import { useCart } from '@/context/CartContext';
import { useState } from 'react';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart, isInCart } = useCart();
  const [isLiked, setIsLiked] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product);
  };

  const handleLike = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsLiked(!isLiked);
  };

  const discountedPrice = product.discount
    ? product.price * (1 - product.discount / 100)
    : product.price;

  const inCart = isInCart(product.id);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group"
    >
      <Link href={`/products/${product.id}`}>
        <div className="glass-subtle rounded-2xl overflow-hidden hover:glass-strong transition-smooth-slow bg-slate-800/50">
          {/* Image Container */}
          <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-br from-purple-900/30 to-pink-900/30">
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              className={`object-cover group-hover:scale-110 transition-smooth-slow ${
                imageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              onLoad={() => setImageLoaded(true)}
            />

            {/* Discount Badge */}
            {product.discount && (
              <div className="absolute top-4 left-4 bg-gradient-secondary text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                {product.discount}% OFF
              </div>
            )}

            {/* Featured Badge */}
            {product.featured && (
              <div className="absolute top-4 right-4 bg-gradient-accent text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                Best
              </div>
            )}

            {/* Hover Actions */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-smooth flex items-center justify-center gap-3">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleAddToCart}
                className={`p-3 rounded-full ${
                  inCart ? 'bg-purple-500' : 'bg-slate-800'
                } shadow-lg hover:shadow-xl transition-smooth`}
              >
                <ShoppingCart className={`w-5 h-5 ${inCart ? 'text-white' : 'text-gray-200'}`} />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleLike}
                className={`p-3 rounded-full ${
                  isLiked ? 'bg-pink-500' : 'bg-slate-800'
                } shadow-lg hover:shadow-xl transition-smooth`}
              >
                <Heart className={`w-5 h-5 ${isLiked ? 'text-white fill-white' : 'text-gray-200'}`} />
              </motion.button>
            </div>
          </div>

          {/* Product Info */}
          <div className="p-5">
            {/* Category */}
            <div className="text-xs text-purple-400 font-semibold mb-2 uppercase tracking-wider">
              {product.category}
            </div>

            {/* Name */}
            <h3 className="text-lg font-bold text-gray-100 mb-2 line-clamp-2 group-hover:text-purple-400 transition-smooth">
              {product.name}
            </h3>

            {/* Rating */}
            {product.rating && (
              <div className="flex items-center gap-2 mb-3">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(product.rating || 0)
                          ? 'text-yellow-400 fill-yellow-400'
                          : 'text-gray-600'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-400">({product.rating})</span>
              </div>
            )}

            {/* Price */}
            <div className="flex items-center gap-2">
              {product.discount ? (
                <>
                  <span className="text-xl font-bold text-gradient-primary">
                    {formatPrice(discountedPrice)}
                  </span>
                  <span className="text-sm text-gray-500 line-through">
                    {formatPrice(product.price)}
                  </span>
                </>
              ) : (
                <span className="text-xl font-bold text-gradient-primary">
                  {formatPrice(product.price)}
                </span>
              )}
            </div>

            {/* Stock Status */}
            <div className="mt-3">
              {product.inStock ? (
                <span className="text-xs text-green-400 font-semibold">재고 있음</span>
              ) : (
                <span className="text-xs text-red-400 font-semibold">품절</span>
              )}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
