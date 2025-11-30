'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { CheckCircle2, Package, Mail, Home, X } from 'lucide-react';
import Button from '@/components/common/Button';
import { formatPrice } from '@/lib/utils/format';

interface CheckoutSuccessProps {
  isOpen: boolean;
  onClose: () => void;
  orderNumber: string;
  totalAmount: number;
  email: string;
}

export default function CheckoutSuccess({
  isOpen,
  onClose,
  orderNumber,
  totalAmount,
  email,
}: CheckoutSuccessProps) {
  const router = useRouter();

  const handleGoHome = () => {
    onClose();
    router.push('/');
  };

  const handleViewProducts = () => {
    onClose();
    router.push('/products');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 flex items-center justify-center z-50 p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="glass-strong rounded-3xl p-8 max-w-md w-full pointer-events-auto relative"
            >
              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="absolute top-6 right-6 p-2 hover:bg-gray-100 rounded-lg transition-smooth"
              >
                <X className="w-5 h-5 text-gray-400" />
              </motion.button>

              {/* Success Icon */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                className="flex justify-center mb-6"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-green-400 rounded-full blur-2xl opacity-50 animate-pulse" />
                  <div className="relative bg-gradient-to-br from-green-400 to-emerald-500 rounded-full p-4">
                    <CheckCircle2 className="w-16 h-16 text-white" />
                  </div>
                </div>
              </motion.div>

              {/* Title */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-3xl font-bold text-gray-800 text-center mb-2"
              >
                주문이 완료되었습니다!
              </motion.h2>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-gray-600 text-center mb-8"
              >
                소중한 주문 감사합니다.
              </motion.p>

              {/* Order Details */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="space-y-4 mb-8"
              >
                <div className="glass-subtle rounded-2xl p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600 flex items-center gap-2">
                      <Package className="w-4 h-4" />
                      주문번호
                    </span>
                    <span className="font-bold text-purple-600">{orderNumber}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">결제 금액</span>
                    <span className="text-lg font-bold text-gray-800">
                      {formatPrice(totalAmount)}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-2 bg-blue-50 p-4 rounded-xl">
                  <Mail className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-gray-700">
                    <p className="font-semibold mb-1">주문 확인 메일 발송</p>
                    <p className="text-gray-600">
                      <span className="font-medium">{email}</span>
                      <br />
                      위 주소로 주문 내역이 발송되었습니다.
                    </p>
                  </div>
                </div>

                <div className="bg-purple-50 rounded-xl p-4 text-sm text-gray-700">
                  <p className="font-semibold mb-2">배송 안내</p>
                  <ul className="space-y-1 text-gray-600">
                    <li>• 2-3일 이내 배송 예정입니다.</li>
                    <li>• 배송 조회는 이메일에서 확인 가능합니다.</li>
                    <li>• 문의사항은 고객센터로 연락주세요.</li>
                  </ul>
                </div>
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-3"
              >
                <Button
                  onClick={handleGoHome}
                  variant="primary"
                  size="lg"
                  className="flex-1 gap-2"
                >
                  <Home className="w-5 h-5" />
                  홈으로
                </Button>
                <Button
                  onClick={handleViewProducts}
                  variant="outline"
                  size="lg"
                  className="flex-1 gap-2 border-purple-300 text-purple-600 hover:bg-purple-50"
                >
                  <Package className="w-5 h-5" />
                  계속 쇼핑하기
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
