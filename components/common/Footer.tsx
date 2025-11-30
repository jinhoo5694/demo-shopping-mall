import Link from 'next/link';
import { Package, Mail, Phone, MapPin, Github, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { label: '회사 소개', href: '/about' },
      { label: '채용', href: '/careers' },
      { label: '이용약관', href: '/terms' },
      { label: '개인정보처리방침', href: '/privacy' },
    ],
    support: [
      { label: '자주 묻는 질문', href: '/faq' },
      { label: '배송 안내', href: '/shipping' },
      { label: '반품/교환', href: '/returns' },
      { label: '고객센터', href: '/support' },
    ],
    shop: [
      { label: '전체 상품', href: '/products' },
      { label: '베스트셀러', href: '/products?filter=bestseller' },
      { label: '신상품', href: '/products?filter=new' },
      { label: '이벤트', href: '/events' },
    ],
  };

  const socialLinks = [
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
    { icon: Github, href: 'https://github.com', label: 'Github' },
  ];

  return (
    <footer className="mt-20 border-t border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Package className="w-8 h-8 text-purple-500" />
              <span className="text-xl font-bold text-gradient-primary">
                2026 Diary Shop
              </span>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
              새로운 한 해를 위한 완벽한 다이어리를 만나보세요.
              <br />
              당신의 꿈과 계획을 기록할 최고의 파트너입니다.
            </p>

            {/* Contact Info */}
            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>1588-0000</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>support@2026diary.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>서울특별시 강남구 테헤란로 123</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-4">회사</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-smooth text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-4">고객지원</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-smooth text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Shop Links */}
          <div>
            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-4">쇼핑</h3>
            <ul className="space-y-2">
              {footerLinks.shop.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-smooth text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 dark:border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-smooth"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                  </a>
                );
              })}
            </div>

            {/* Copyright */}
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © {currentYear} 2026 Diary Shop. All rights reserved.
            </p>
          </div>
        </div>

        {/* Business Info */}
        <div className="mt-6 pt-6 border-t border-gray-200 dark:border-slate-700">
          <div className="text-xs text-gray-500 dark:text-gray-500 space-y-1">
            <p>상호명: (주)2026다이어리 | 대표: 홍길동 | 사업자등록번호: 123-45-67890</p>
            <p>통신판매업신고: 2026-서울강남-00000 | 개인정보관리책임자: 김철수</p>
            <p className="text-gray-400 dark:text-gray-600 mt-2">
              본 사이트는 데모 프로젝트이며 실제 쇼핑몰이 아닙니다.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
