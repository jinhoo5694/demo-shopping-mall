import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import { ThemeProvider } from "@/context/ThemeContext";
import Navbar from "@/components/common/Navbar";
import DemoBanner from "@/components/common/DemoBanner";
import Footer from "@/components/common/Footer";

export const metadata: Metadata = {
  title: "2026 다이어리 쇼핑몰 - 새로운 한 해의 시작",
  description: "2026년을 위한 프리미엄 다이어리와 플래너를 만나보세요. 데일리, 위클리, 먼슬리 다양한 다이어리 제품을 특별한 가격에 제공합니다.",
  keywords: "다이어리, 플래너, 2026, 다이어리 쇼핑몰, 데일리 다이어리, 위클리 플래너",
  icons: {
    icon: '/icon',
    apple: '/apple-icon',
  },
  openGraph: {
    title: "2026 다이어리 쇼핑몰",
    description: "새로운 한 해를 위한 완벽한 다이어리",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="dark">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="antialiased bg-slate-900 text-white">
        <ThemeProvider>
          <CartProvider>
            <Navbar />
            <DemoBanner />
            <main className="min-h-screen pt-24">
              {children}
            </main>
            <Footer />
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
