// Product Types
export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number; // 할인 전 가격
  category: string;
  description: string;
  longDescription?: string;
  images: string[];
  colors?: string[];
  inStock: boolean;
  featured?: boolean;
  bestseller?: boolean;
  isNew?: boolean;
  discount?: number; // 할인율 (%)
  rating?: number; // 평점 (0-5)
  reviewCount?: number; // 리뷰 수
  tags?: string[];
}

// Cart Types
export interface CartItem {
  product: Product;
  quantity: number;
  selectedColor?: string;
}

export interface Cart {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
}

// Event Types
export interface Event {
  id: string;
  title: string;
  description: string;
  image: string;
  startDate: string;
  endDate: string;
  discount?: number;
  productIds?: string[]; // 이벤트 대상 상품 ID들
  isActive: boolean;
}

// Order Types
export interface ShippingInfo {
  name: string;
  phone: string;
  email: string;
  address: string;
  addressDetail: string;
  zipCode: string;
  deliveryMessage?: string;
}

export interface PaymentMethod {
  type: 'card' | 'bank' | 'virtual' | 'phone';
  label: string;
}

export interface Order {
  id: string;
  items: CartItem[];
  shippingInfo: ShippingInfo;
  paymentMethod: PaymentMethod;
  totalPrice: number;
  createdAt: string;
  status: 'pending' | 'completed' | 'cancelled';
}

// Filter & Sort Types
export type SortOption = 'latest' | 'price-low' | 'price-high' | 'popular' | 'rating';

export interface FilterOptions {
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  inStockOnly?: boolean;
  featured?: boolean;
}

// UI Component Types
export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  disabled?: boolean;
  loading?: boolean;
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
}
