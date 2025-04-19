"use client";

import React, { useState } from "react";
import Link from "next/link";

// FAQ item type
type FAQItem = {
  question: string;
  answer: string;
  category: string;
};

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set());
  
  // FAQ data
  const faqItems: FAQItem[] = [
    {
      question: "كيف يمكنني حجز سكن عبر منصة مأوى؟",
      answer: "يمكنك تصفح الخيارات المتاحة من خلال صفحة الخريطة أو قائمة الوحدات السكنية، ثم اختيار الوحدة المناسبة والضغط على زر 'حجز'. بعد ذلك، قم بإدخال بياناتك وتفاصيل الحجز واتبع الخطوات المطلوبة لإتمام عملية الحجز.",
      category: "الحجز",
    },
    {
      question: "ما هي المستندات المطلوبة للحجز؟",
      answer: "تحتاج إلى بطاقة هوية سارية (بطاقة شخصية أو جواز سفر) وإثبات أنك طالب (مثل البطاقة الجامعية). قد تطلب بعض الوحدات السكنية مستندات إضافية مثل صورة شخصية حديثة أو عقد إيجار موقع.",
      category: "الحجز",
    },
    {
      question: "هل يمكنني إلغاء الحجز بعد تأكيده؟",
      answer: "نعم، يمكنك إلغاء الحجز وفقًا لسياسة الإلغاء المحددة في صفحة تفاصيل كل وحدة سكنية. تختلف سياسات الإلغاء بين الوحدات السكنية، ولكن بشكل عام، كلما كان الإلغاء مبكرًا، كلما كان استرداد المبلغ أكبر.",
      category: "الحجز",
    },
    {
      question: "ما هي طرق الدفع المتاحة؟",
      answer: "حاليًا، نقبل الدفع النقدي عند الوصول إلى السكن. سنضيف قريبًا خيارات دفع إلكترونية متنوعة مثل بطاقات الائتمان والمحافظ الإلكترونية وخدمات الدفع الإلكتروني.",
      category: "الدفع",
    },
    {
      question: "هل هناك تأمين مسترد؟",
      answer: "نعم، معظم الوحدات السكنية تطلب تأمينًا مستردًا يعادل قيمة إيجار شهر واحد. يتم استرداد هذا المبلغ عند نهاية فترة الإقامة، بشرط عدم وجود أضرار أو مستحقات غير مدفوعة.",
      category: "الدفع",
    },
    {
      question: "ما هي تكلفة السكن الطلابي؟",
      answer: "تختلف تكلفة السكن الطلابي اعتمادًا على عدة عوامل منها: الموقع، نوع السكن (شقة، غرفة، سرير)، المرافق المتاحة، وقرب السكن من الجامعات. يمكنك استخدام خيارات الفلترة في صفحة البحث لتحديد نطاق السعر المناسب لك.",
      category: "الدفع",
    },
    {
      question: "هل المرافق مثل الماء والكهرباء والإنترنت مشمولة في الإيجار؟",
      answer: "هذا يختلف حسب كل وحدة سكنية. في معظم الحالات، تكون المرافق الأساسية مثل الماء والكهرباء مشمولة في سعر الإيجار، بينما قد تكون خدمات مثل الإنترنت والتنظيف خدمات إضافية. يمكنك الاطلاع على تفاصيل ما هو مشمول في الإيجار في صفحة تفاصيل كل وحدة سكنية.",
      category: "المرافق",
    },
    {
      question: "ما هي قواعد الزيارة في السكن الطلابي؟",
      answer: "تختلف قواعد الزيارة حسب كل وحدة سكنية. بعض الوحدات السكنية تسمح بالزيارات خلال ساعات محددة، بينما قد تكون هناك قيود أكثر في وحدات أخرى. يتم توضيح قواعد الزيارة في تفاصيل كل وحدة سكنية.",
      category: "القواعد",
    },
    {
      question: "هل يمكنني البقاء في السكن خلال العطلات الدراسية؟",
      answer: "نعم، في معظم الحالات يمكنك البقاء في السكن طوال فترة العقد، بما في ذلك العطلات الدراسية. ومع ذلك، قد تكون هناك بعض الوحدات السكنية التي لها قواعد خاصة بالإقامة خلال فترات العطلات الطويلة.",
      category: "الإقامة",
    },
    {
      question: "هل يمكنني تجديد عقد الإيجار للعام الدراسي القادم؟",
      answer: "نعم، يمكنك تجديد عقد الإيجار للعام الدراسي القادم، عادةً قبل نهاية العقد الحالي بفترة محددة. سيتم إعلامك بخيارات التجديد وأي تغييرات في الأسعار قبل نهاية العقد الحالي.",
      category: "الإقامة",
    },
    {
      question: "كيف يمكنني الإبلاغ عن مشكلة في السكن؟",
      answer: "يمكنك الإبلاغ عن أي مشكلة في السكن من خلال حسابك على المنصة، أو التواصل مباشرة مع إدارة السكن أو مدير العقار. يتم توفير معلومات الاتصال لحالات الطوارئ في صفحة تفاصيل كل وحدة سكنية.",
      category: "الدعم",
    },
    {
      question: "هل هناك خدمات أمن في السكن الطلابي؟",
      answer: "معظم الوحدات السكنية توفر خدمات أمنية على مدار الساعة. يمكنك الاطلاع على تفاصيل الخدمات الأمنية المتاحة في صفحة تفاصيل كل وحدة سكنية.",
      category: "الأمان",
    },
  ];
  
  // Get unique categories
  const categories = ["all", ...Array.from(new Set(faqItems.map(item => item.category)))];
  
  // Filter FAQs based on active category and search query
  const filteredFAQs = faqItems.filter(item => {
    const matchesCategory = activeCategory === "all" || item.category === activeCategory;
    const matchesSearch = searchQuery === "" || 
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  
  // Toggle FAQ item expansion
  const toggleItem = (index: number) => {
    const newExpandedItems = new Set(expandedItems);
    if (expandedItems.has(index)) {
      newExpandedItems.delete(index);
    } else {
      newExpandedItems.add(index);
    }
    setExpandedItems(newExpandedItems);
  };
  
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">الأسئلة الشائعة</h1>
          <p className="text-xl text-gray-600">إجابات لأكثر استفساراتك شيوعًا</p>
        </div>
        
        {/* Search and Filter */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row md:items-center mb-6 gap-4">
            <div className="flex-1">
              <div className="relative">
                <input
                  type="text"
                  placeholder="ابحث عن سؤال..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full border border-gray-300 rounded-md pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400 absolute right-3 top-2.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
            
            <div className="md:w-auto">
              <select
                value={activeCategory}
                onChange={(e) => setActiveCategory(e.target.value)}
                className="w-full md:w-auto border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category === "all" ? "جميع الفئات" : category}
                  </option>
                ))}
              </select>
            </div>
          </div>
          
          <p className="text-sm text-gray-500">
            {filteredFAQs.length} {filteredFAQs.length === 1 ? "نتيجة" : "نتائج"} {searchQuery && `لـ "${searchQuery}"`}
          </p>
        </div>
        
        {/* FAQ Items */}
        <div className="space-y-4 mb-12">
          {filteredFAQs.length > 0 ? (
            filteredFAQs.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full flex justify-between items-center p-5 text-right focus:outline-none"
                >
                  <span className="text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-5 w-5 transform transition-transform ${
                        expandedItems.has(index) ? "rotate-180" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                  <span className="flex-1 font-medium text-gray-800 mr-4">{item.question}</span>
                </button>
                {expandedItems.has(index) && (
                  <div className="p-5 pt-0 border-t border-gray-100">
                    <p className="text-gray-600">{item.answer}</p>
                    <div className="mt-3 flex justify-between items-center">
                      <span className="text-xs text-gray-500">
                        فئة: {item.category}
                      </span>
                      <button
                        className="text-primary text-sm flex items-center focus:outline-none hover:underline"
                      >
                        <span>هل كان هذا مفيدًا؟</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-gray-400 mx-auto mb-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h3 className="text-xl font-medium text-gray-700 mb-2">
                لم يتم العثور على أي نتائج
              </h3>
              <p className="text-gray-500 mb-4">
                لم نتمكن من العثور على إجابات تطابق بحثك. حاول استخدام كلمات
                مختلفة أو اتصل بنا مباشرة.
              </p>
              <Link
                href="/contact"
                className="bg-primary text-white px-4 py-2 rounded-md inline-block hover:bg-primary-dark transition"
              >
                اتصل بنا
              </Link>
            </div>
          )}
        </div>
        
        {/* Still Have Questions */}
        <div className="bg-primary/10 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            هل لا تزال لديك أسئلة؟
          </h2>
          <p className="text-gray-600 mb-6">
            لا تتردد في التواصل معنا إذا لم تجد إجابة لسؤالك. فريقنا جاهز للمساعدة!
          </p>
          <Link
            href="/contact"
            className="bg-primary text-white px-6 py-3 rounded-md inline-block hover:bg-primary-dark transition"
          >
            اتصل بنا
          </Link>
        </div>
      </div>
    </div>
  );
} 