import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import ProductImageGallery from '@/components/products/ProductImageGallery';
import ProductInfo from '@/components/products/ProductInfo';
import ProductOptions from '@/components/products/ProductOptions';
import RelatedProducts from '@/components/products/RelatedProducts';
import { getProductById, getAllProducts } from '@/lib/data/products';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    notFound();
  }

  const allProducts = getAllProducts();

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Breadcrumb */}
      <div className="bg-slate-800/50 backdrop-blur-sm border-b border-slate-700/50">
        <div className="container mx-auto max-w-7xl px-4 py-4">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-gray-300 hover:text-purple-400 transition-smooth"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-semibold">상품 목록으로 돌아가기</span>
          </Link>
        </div>
      </div>

      {/* Product Detail Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Image Gallery */}
            <div>
              <ProductImageGallery images={product.images} productName={product.name} />
            </div>

            {/* Right Column - Product Info & Options */}
            <div className="space-y-8">
              <ProductInfo product={product} />
              <ProductOptions product={product} />
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <RelatedProducts currentProduct={product} allProducts={allProducts} />
    </main>
  );
}
