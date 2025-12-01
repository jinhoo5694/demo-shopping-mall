import HeroSection from '@/components/landing/HeroSection';
import BestsellerSlider from '@/components/landing/BestsellerSlider';
import EventBanners from '@/components/landing/EventBanners';
import CategorySection from '@/components/landing/CategorySection';
import { getBestsellerProducts } from '@/lib/data/products';
import { getActiveEvents } from '@/lib/data/events';

export default function Home() {
  const bestsellerProducts = getBestsellerProducts();
  const activeEvents = getActiveEvents();

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <HeroSection />
      <BestsellerSlider products={bestsellerProducts} />
      <EventBanners events={activeEvents} />
      <CategorySection />
    </main>
  );
}
