import { CartItem } from '@/lib/types';

// 장바구니 총 금액 계산
export const calculateCartTotal = (items: CartItem[]): number => {
  return items.reduce((total, item) => {
    return total + (item.product.price * item.quantity);
  }, 0);
};

// 장바구니 총 아이템 수 계산
export const calculateTotalItems = (items: CartItem[]): number => {
  return items.reduce((total, item) => total + item.quantity, 0);
};

// 할인 금액 계산
export const calculateDiscountAmount = (originalPrice: number, discountRate: number): number => {
  return Math.round(originalPrice * (discountRate / 100));
};

// 최종 가격 계산 (할인 적용)
export const calculateFinalPrice = (originalPrice: number, discountRate: number): number => {
  return originalPrice - calculateDiscountAmount(originalPrice, discountRate);
};

// 배송비 계산
export const calculateShippingFee = (totalPrice: number, freeShippingThreshold: number = 30000): number => {
  return totalPrice >= freeShippingThreshold ? 0 : 3000;
};

// 최종 결제 금액 계산 (상품 금액 + 배송비)
export const calculatePaymentTotal = (
  items: CartItem[],
  freeShippingThreshold: number = 30000
): {
  subtotal: number;
  shippingFee: number;
  total: number;
} => {
  const subtotal = calculateCartTotal(items);
  const shippingFee = calculateShippingFee(subtotal, freeShippingThreshold);
  const total = subtotal + shippingFee;

  return {
    subtotal,
    shippingFee,
    total,
  };
};
