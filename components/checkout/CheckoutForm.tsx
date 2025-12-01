'use client';

import { motion } from 'framer-motion';
import { User, Mail, Phone, MapPin, Home } from 'lucide-react';
import { useState } from 'react';

export interface CheckoutFormData {
  name: string;
  email: string;
  phone: string;
  zipCode: string;
  address: string;
  detailAddress: string;
  message?: string;
}

interface CheckoutFormProps {
  formData: CheckoutFormData;
  onChange: (data: CheckoutFormData) => void;
}

export default function CheckoutForm({ formData, onChange }: CheckoutFormProps) {
  const handleChange = (field: keyof CheckoutFormData, value: string) => {
    onChange({ ...formData, [field]: value });
  };

  const handleZipCodeSearch = () => {
    // 실제 우편번호 검색 API 대신 데모용 알림
    alert('우편번호 검색 기능 (데모 버전)');
    handleChange('zipCode', '12345');
    handleChange('address', '서울시 강남구 테헤란로 123');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="glass-strong rounded-2xl p-6 md:p-8 space-y-6"
    >
      <h2 className="text-2xl font-bold text-gray-100 flex items-center gap-2">
        <User className="w-6 h-6 text-purple-400" />
        배송 정보
      </h2>

      <div className="space-y-4">
        {/* 이름 */}
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-2">
            이름 <span className="text-pink-600">*</span>
          </label>
          <div className="relative">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => handleChange('name', e.target.value)}
              placeholder="홍길동"
              required
              className="w-full pl-12 pr-4 py-3 glass-subtle rounded-xl border border-gray-700 focus:border-purple-400 focus:ring-2 focus:ring-purple-900 transition-smooth outline-none text-gray-100 placeholder-gray-500"
            />
          </div>
        </div>

        {/* 이메일 */}
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2">
            이메일 <span className="text-pink-600">*</span>
          </label>
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
              placeholder="example@email.com"
              required
              className="w-full pl-12 pr-4 py-3 glass-subtle rounded-xl border border-gray-700 focus:border-purple-400 focus:ring-2 focus:ring-purple-900 transition-smooth outline-none text-gray-100 placeholder-gray-500"
            />
          </div>
        </div>

        {/* 전화번호 */}
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-gray-300 mb-2">
            전화번호 <span className="text-pink-600">*</span>
          </label>
          <div className="relative">
            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="tel"
              id="phone"
              value={formData.phone}
              onChange={(e) => handleChange('phone', e.target.value)}
              placeholder="010-1234-5678"
              required
              className="w-full pl-12 pr-4 py-3 glass-subtle rounded-xl border border-gray-700 focus:border-purple-400 focus:ring-2 focus:ring-purple-900 transition-smooth outline-none text-gray-100 placeholder-gray-500"
            />
          </div>
        </div>

        {/* 우편번호 */}
        <div>
          <label htmlFor="zipCode" className="block text-sm font-semibold text-gray-300 mb-2">
            우편번호 <span className="text-pink-600">*</span>
          </label>
          <div className="flex gap-2">
            <div className="relative flex-1">
              <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                id="zipCode"
                value={formData.zipCode}
                onChange={(e) => handleChange('zipCode', e.target.value)}
                placeholder="12345"
                required
                readOnly
                className="w-full pl-12 pr-4 py-3 glass-subtle rounded-xl border border-gray-700 bg-slate-800/50 outline-none text-gray-100"
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleZipCodeSearch}
              className="px-6 py-3 bg-gradient-primary text-white font-semibold rounded-xl hover:shadow-lg transition-smooth"
            >
              검색
            </motion.button>
          </div>
        </div>

        {/* 주소 */}
        <div>
          <label htmlFor="address" className="block text-sm font-semibold text-gray-300 mb-2">
            주소 <span className="text-pink-600">*</span>
          </label>
          <div className="relative">
            <Home className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              id="address"
              value={formData.address}
              onChange={(e) => handleChange('address', e.target.value)}
              placeholder="서울시 강남구 테헤란로 123"
              required
              readOnly
              className="w-full pl-12 pr-4 py-3 glass-subtle rounded-xl border border-gray-700 bg-slate-800/50 outline-none text-gray-100"
            />
          </div>
        </div>

        {/* 상세주소 */}
        <div>
          <label htmlFor="detailAddress" className="block text-sm font-semibold text-gray-300 mb-2">
            상세주소 <span className="text-pink-600">*</span>
          </label>
          <input
            type="text"
            id="detailAddress"
            value={formData.detailAddress}
            onChange={(e) => handleChange('detailAddress', e.target.value)}
            placeholder="101동 1001호"
            required
            className="w-full px-4 py-3 glass-subtle rounded-xl border border-gray-700 focus:border-purple-400 focus:ring-2 focus:ring-purple-900 transition-smooth outline-none text-gray-100 placeholder-gray-500"
          />
        </div>

        {/* 배송 메시지 */}
        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-2">
            배송 메시지 (선택)
          </label>
          <textarea
            id="message"
            value={formData.message}
            onChange={(e) => handleChange('message', e.target.value)}
            placeholder="배송 시 요청사항을 입력해주세요."
            rows={3}
            className="w-full px-4 py-3 glass-subtle rounded-xl border border-gray-700 focus:border-purple-400 focus:ring-2 focus:ring-purple-900 transition-smooth outline-none text-gray-100 placeholder-gray-500 resize-none"
          />
        </div>
      </div>

      {/* 안내 메시지 */}
      <div className="bg-blue-900/30 rounded-xl p-4 text-sm text-gray-300">
        <p className="font-semibold mb-1">배송 안내</p>
        <ul className="space-y-1 text-gray-400">
          <li>• 배송은 결제 완료 후 2-3일 소요됩니다.</li>
          <li>• 제주도 및 도서산간 지역은 추가 배송비가 발생할 수 있습니다.</li>
          <li>• 배송 완료 후 7일 이내 무료 반품/교환이 가능합니다.</li>
        </ul>
      </div>
    </motion.div>
  );
}
