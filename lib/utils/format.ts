// 가격 포맷팅 (원화)
export const formatPrice = (price: number): string => {
  return price.toLocaleString('ko-KR') + '원';
};

// 할인율 계산
export const calculateDiscountRate = (originalPrice: number, price: number): number => {
  return Math.round(((originalPrice - price) / originalPrice) * 100);
};

// 날짜 포맷팅
export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

// 날짜 범위 포맷팅
export const formatDateRange = (startDate: string, endDate: string): string => {
  return `${formatDate(startDate)} ~ ${formatDate(endDate)}`;
};

// 전화번호 포맷팅
export const formatPhoneNumber = (phone: string): string => {
  const cleaned = phone.replace(/\D/g, '');
  const match = cleaned.match(/^(\d{3})(\d{4})(\d{4})$/);
  if (match) {
    return `${match[1]}-${match[2]}-${match[3]}`;
  }
  return phone;
};

// 우편번호 포맷팅
export const formatZipCode = (zipCode: string): string => {
  const cleaned = zipCode.replace(/\D/g, '');
  return cleaned.substring(0, 5);
};

// 텍스트 자르기
export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
};

// 별점 포맷팅
export const formatRating = (rating: number): string => {
  return rating.toFixed(1);
};

// 리뷰 수 포맷팅
export const formatReviewCount = (count: number): string => {
  if (count >= 1000) {
    return (count / 1000).toFixed(1) + 'k';
  }
  return count.toString();
};
