'use client';

import { motion } from 'framer-motion';
import { CreditCard, Smartphone, Building2, Wallet } from 'lucide-react';

export type PaymentMethodType = 'card' | 'kakao' | 'transfer' | 'virtual';

interface PaymentMethodProps {
  selectedMethod: PaymentMethodType;
  onChange: (method: PaymentMethodType) => void;
}

const paymentMethods = [
  {
    id: 'card' as PaymentMethodType,
    name: '신용/체크카드',
    icon: CreditCard,
    description: '모든 카드사 사용 가능',
  },
  {
    id: 'kakao' as PaymentMethodType,
    name: '카카오페이',
    icon: Smartphone,
    description: '간편하고 빠른 결제',
  },
  {
    id: 'transfer' as PaymentMethodType,
    name: '실시간 계좌이체',
    icon: Building2,
    description: '은행 계좌로 즉시 이체',
  },
  {
    id: 'virtual' as PaymentMethodType,
    name: '무통장입금',
    icon: Wallet,
    description: '가상계좌 발급',
  },
];

export default function PaymentMethod({ selectedMethod, onChange }: PaymentMethodProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="glass-strong rounded-2xl p-6 md:p-8 space-y-6"
    >
      <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
        <CreditCard className="w-6 h-6 text-purple-600" />
        결제 수단
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {paymentMethods.map((method) => {
          const Icon = method.icon;
          const isSelected = selectedMethod === method.id;

          return (
            <motion.button
              key={method.id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onChange(method.id)}
              className={`
                relative p-6 rounded-xl border-2 transition-all text-left
                ${
                  isSelected
                    ? 'border-purple-500 bg-purple-50 shadow-lg shadow-purple-200'
                    : 'border-gray-200 glass-subtle hover:border-purple-300'
                }
              `}
            >
              {/* Selected Indicator */}
              {isSelected && (
                <motion.div
                  layoutId="payment-selected"
                  className="absolute top-4 right-4 w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center"
                >
                  <svg
                    className="w-4 h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </motion.div>
              )}

              {/* Icon & Content */}
              <div className="flex items-start gap-4">
                <div
                  className={`
                    p-3 rounded-xl
                    ${isSelected ? 'bg-purple-600' : 'bg-gray-100'}
                  `}
                >
                  <Icon
                    className={`w-6 h-6 ${isSelected ? 'text-white' : 'text-gray-600'}`}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3
                    className={`font-bold mb-1 ${
                      isSelected ? 'text-purple-900' : 'text-gray-800'
                    }`}
                  >
                    {method.name}
                  </h3>
                  <p
                    className={`text-sm ${
                      isSelected ? 'text-purple-700' : 'text-gray-600'
                    }`}
                  >
                    {method.description}
                  </p>
                </div>
              </div>
            </motion.button>
          );
        })}
      </div>

      {/* Payment Notice */}
      <div className="bg-yellow-50 rounded-xl p-4 text-sm text-gray-700">
        <p className="font-semibold mb-2 flex items-center gap-2">
          <svg
            className="w-5 h-5 text-yellow-600"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clipRule="evenodd"
            />
          </svg>
          결제 안내
        </p>
        <ul className="space-y-1 text-gray-600">
          <li>• 결제는 안전하게 암호화되어 처리됩니다.</li>
          <li>• 무통장입금 선택 시 24시간 이내 입금해주세요.</li>
          <li>• 결제 완료 후 주문 내역은 이메일로 발송됩니다.</li>
        </ul>
      </div>
    </motion.div>
  );
}
