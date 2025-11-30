'use client';

import { Info } from 'lucide-react';

export default function DemoBanner() {
  return (
    <div className="fixed top-16 left-0 right-0 z-40 bg-gradient-primary text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex items-center justify-center gap-2 text-sm sm:text-base">
          <Info className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
          <p className="font-medium">
            본 사이트는 데모 프로젝트이며 실제 쇼핑몰이 아닙니다.
          </p>
        </div>
      </div>
    </div>
  );
}
