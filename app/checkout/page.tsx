'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { ShoppingBag, ArrowLeft, Lock } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import CheckoutForm, {
  CheckoutFormData,
} from '@/components/checkout/CheckoutForm';
import PaymentMethod, {
  PaymentMethodType,
} from '@/components/checkout/PaymentMethod';
import OrderSummary from '@/components/checkout/OrderSummary';
import CheckoutSuccess from '@/components/checkout/CheckoutSuccess';
import Button from '@/components/common/Button';
import Link from 'next/link';
import { calculateCartTotal, calculateShippingFee } from '@/lib/utils/calculate';

export default function CheckoutPage() {
  const router = useRouter();
  const { cart, clearCart } = useCart();

  const [formData, setFormData] = useState<CheckoutFormData>({
    name: '',
    email: '',
    phone: '',
    zipCode: '',
    address: '',
    detailAddress: '',
    message: '',
  });

  const [paymentMethod, setPaymentMethod] = useState<PaymentMethodType>('card');
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  // Redirect if cart is empty
  useEffect(() => {
    if (cart.length === 0 && !isSuccessModalOpen) {
      router.push('/cart');
    }
  }, [cart, router, isSuccessModalOpen]);

  const handleFormChange = (data: CheckoutFormData) => {
    setFormData(data);
  };

  const handlePaymentMethodChange = (method: PaymentMethodType) => {
    setPaymentMethod(method);
  };

  const validateForm = (): boolean => {
    if (!formData.name.trim()) {
      alert('이름을 입력해주세요.');
      return false;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      alert('올바른 이메일 주소를 입력해주세요.');
      return false;
    }
    if (!formData.phone.trim()) {
      alert('전화번호를 입력해주세요.');
      return false;
    }
    if (!formData.zipCode.trim() || !formData.address.trim()) {
      alert('우편번호 검색을 통해 주소를 입력해주세요.');
      return false;
    }
    if (!formData.detailAddress.trim()) {
      alert('상세주소를 입력해주세요.');
      return false;
    }
    if (!agreedToTerms) {
      alert('구매 조건 및 개인정보 처리에 동의해주세요.');
      return false;
    }
    return true;
  };

  const handleCheckout = () => {
    if (!validateForm()) {
      return;
    }

    // Generate order number
    const orderNum = `ORDER-${Date.now()}-${Math.random().toString(36).substring(2, 9).toUpperCase()}`;
    setOrderNumber(orderNum);

    // Clear cart and show success modal
    clearCart();
    setIsSuccessModalOpen(true);
  };

  const handleCloseSuccessModal = () => {
    setIsSuccessModalOpen(false);
    router.push('/');
  };

  const { total } = calculateCartTotal(cart);
  const shippingFee = calculateShippingFee(total);
  const finalTotal = total + shippingFee;

  // Don't render main content if cart is empty
  if (cart.length === 0 && !isSuccessModalOpen) {
    return null;
  }

  return (
    <>
      <main className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
        {/* Header */}
        <section className="relative bg-gradient-primary py-12 px-4">
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
            >
              {/* Back Button */}
              <Link
                href="/cart"
                className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-6 transition-smooth"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>장바구니로 돌아가기</span>
              </Link>

              <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <ShoppingBag className="w-8 h-8 text-white" />
                  <h1 className="text-4xl md:text-5xl font-bold text-white">
                    주문/결제
                  </h1>
                </div>
                <p className="text-lg text-white/90">
                  안전하고 빠른 결제를 진행해주세요
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Checkout Content */}
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column - Forms */}
              <div className="lg:col-span-2 space-y-6">
                {/* Checkout Form */}
                <CheckoutForm formData={formData} onChange={handleFormChange} />

                {/* Payment Method */}
                <PaymentMethod
                  selectedMethod={paymentMethod}
                  onChange={handlePaymentMethodChange}
                />

                {/* Terms Agreement */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="glass-strong rounded-2xl p-6"
                >
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={agreedToTerms}
                      onChange={(e) => setAgreedToTerms(e.target.checked)}
                      className="mt-1 w-5 h-5 rounded border-gray-300 text-purple-600 focus:ring-purple-500 cursor-pointer"
                    />
                    <div className="flex-1">
                      <p className="font-semibold text-gray-800 group-hover:text-purple-600 transition-smooth">
                        구매 조건 및 개인정보 처리에 동의합니다 (필수)
                      </p>
                      <p className="text-sm text-gray-600 mt-1">
                        주문 내용을 확인하였으며, 결제 진행에 동의합니다.
                      </p>
                    </div>
                  </label>
                </motion.div>

                {/* Checkout Button - Mobile */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="lg:hidden"
                >
                  <Button
                    onClick={handleCheckout}
                    variant="primary"
                    size="lg"
                    className="w-full gap-2"
                  >
                    <Lock className="w-5 h-5" />
                    {finalTotal.toLocaleString()}원 결제하기
                  </Button>
                </motion.div>
              </div>

              {/* Right Column - Order Summary */}
              <div className="lg:col-span-1">
                <OrderSummary items={cart} />

                {/* Checkout Button - Desktop */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="hidden lg:block mt-6"
                >
                  <Button
                    onClick={handleCheckout}
                    variant="primary"
                    size="lg"
                    className="w-full gap-2"
                  >
                    <Lock className="w-5 h-5" />
                    {finalTotal.toLocaleString()}원 결제하기
                  </Button>
                </motion.div>

                {/* Security Notice */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="hidden lg:block mt-6 glass-subtle rounded-xl p-4 text-sm text-gray-600"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Lock className="w-4 h-4 text-green-600" />
                    <span className="font-semibold text-gray-800">
                      안전한 결제
                    </span>
                  </div>
                  <p className="text-xs leading-relaxed">
                    모든 결제 정보는 SSL로 암호화되어 안전하게 처리됩니다.
                    개인정보는 주문 처리 목적으로만 사용됩니다.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Success Modal */}
      <CheckoutSuccess
        isOpen={isSuccessModalOpen}
        onClose={handleCloseSuccessModal}
        orderNumber={orderNumber}
        totalAmount={finalTotal}
        email={formData.email}
      />
    </>
  );
}
