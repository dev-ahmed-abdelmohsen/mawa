import type { Metadata } from "next";
import { Geist, Geist_Mono, Cairo } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "مأوي | سكن الطلاب والمغتربين",
  description: "موقع مأوي لسكن الطلاب والمغتربين - شقق، غرف، أسرّة",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body 
        className={`${geistSans.variable} ${geistMono.variable} ${cairo.variable}`}
        suppressHydrationWarning={true}
      >
        <Navbar />
        <main className="container mx-auto px-4">
          {children}
        </main>
        <footer className="bg-gray-100 py-8 mt-16">
          <div className="container mx-auto px-4 text-center">
            <p className="text-gray-600">
              جميع الحقوق محفوظة © {new Date().getFullYear()} - مأوي لسكن الطلاب والمغتربين
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
