"use client";

import React from "react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">عن مأوى</h1>
          <p className="text-xl text-gray-600">منصة متخصصة في توفير خدمات السكن الطلابي</p>
        </div>
        
        {/* Mission Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">مهمتنا</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            نسعى في مأوى إلى تبسيط تجربة البحث عن سكن طلابي ملائم عبر توفير منصة سهلة الاستخدام تجمع بين مختلف خيارات السكن المتاحة وتعرضها بطريقة شفافة وموثوقة. هدفنا هو مساعدة الطلاب على إيجاد السكن المناسب لاحتياجاتهم وميزانيتهم بسهولة وأمان.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-4">
              <div className="bg-blue-50 text-blue-600 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">الثقة والأمان</h3>
              <p className="text-gray-600 text-sm">نتحقق من جميع الوحدات السكنية المعروضة على منصتنا لنضمن سلامة وراحة الطلاب</p>
            </div>
            <div className="p-4">
              <div className="bg-green-50 text-green-600 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">خيارات متنوعة</h3>
              <p className="text-gray-600 text-sm">نوفر مجموعة متنوعة من خيارات السكن تناسب مختلف الميزانيات والاحتياجات</p>
            </div>
            <div className="p-4">
              <div className="bg-purple-50 text-purple-600 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">سهولة الاستخدام</h3>
              <p className="text-gray-600 text-sm">واجهة سهلة الاستخدام تتيح للطلاب العثور على السكن المناسب وحجزه بسرعة</p>
            </div>
          </div>
        </div>
        
        {/* Our Story */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">قصتنا</h2>
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <p className="text-gray-700 leading-relaxed mb-4">
                تأسست منصة مأوى عام 2023 بهدف تسهيل حياة الطلاب الجامعيين وحل مشكلة البحث عن سكن مناسب. بدأت الفكرة عندما واجه مؤسسو المنصة صعوبات في العثور على سكن طلابي ملائم خلال فترة دراستهم الجامعية.
              </p>
              <p className="text-gray-700 leading-relaxed">
                اليوم، أصبحت مأوى المنصة الرائدة في مجال السكن الطلابي بفضل شراكاتنا مع العديد من الجامعات ومقدمي خدمات السكن. نفخر بأننا استطعنا مساعدة آلاف الطلاب في العثور على بيتهم الثاني بعيداً عن منازلهم.
              </p>
            </div>
            <div className="md:w-1/2 h-64 bg-gray-200 rounded-lg flex items-center justify-center">
              <span className="text-gray-500 text-lg">صورة عن قصة مأوى</span>
            </div>
          </div>
        </div>
        
        {/* Team Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">فريق العمل</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-gray-500">صورة</span>
              </div>
              <h3 className="text-xl font-semibold">أحمد محمد</h3>
              <p className="text-gray-600">المؤسس والرئيس التنفيذي</p>
            </div>
            
            {/* Team Member 2 */}
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-gray-500">صورة</span>
              </div>
              <h3 className="text-xl font-semibold">سارة خالد</h3>
              <p className="text-gray-600">مديرة التسويق</p>
            </div>
            
            {/* Team Member 3 */}
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-gray-500">صورة</span>
              </div>
              <h3 className="text-xl font-semibold">محمد عبدالله</h3>
              <p className="text-gray-600">مدير العمليات</p>
            </div>
          </div>
        </div>
        
        {/* CTA */}
        <div className="bg-primary rounded-lg p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">ابدأ رحلة البحث عن سكنك المثالي</h2>
          <p className="mb-6">انضم إلى آلاف الطلاب الذين وجدوا سكنهم المثالي من خلال منصة مأوى</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/map" className="bg-white text-primary px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition">
              استكشف الخريطة
            </Link>
            <Link href="/register" className="bg-primary-dark text-white border border-white px-6 py-3 rounded-md font-semibold hover:bg-primary-darker transition">
              إنشاء حساب
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 