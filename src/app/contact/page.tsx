"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      
      // Reset form after submission
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
    }, 1500);
  };
  
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">اتصل بنا</h1>
          <p className="text-xl text-gray-600">نحن هنا للإجابة على جميع استفساراتك</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">معلومات التواصل</h2>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-primary/10 text-primary rounded-full p-2 ml-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800">الهاتف</h3>
                    <p className="text-gray-600">+2 012 3456 7890</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/10 text-primary rounded-full p-2 ml-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800">البريد الإلكتروني</h3>
                    <p className="text-gray-600">info@mawa-housing.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/10 text-primary rounded-full p-2 ml-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800">العنوان</h3>
                    <p className="text-gray-600">القاهرة، مصر</p>
                    <p className="text-gray-600">شارع الجامعة، المعادي</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">ساعات العمل</h2>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">الأحد - الخميس:</span>
                  <span className="text-gray-800">9:00 ص - 5:00 م</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">الجمعة:</span>
                  <span className="text-gray-800">9:00 ص - 1:00 م</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">السبت:</span>
                  <span className="text-gray-800">مغلق</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">أرسل لنا رسالة</h2>
              
              {submitted ? (
                <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-md mb-6">
                  <div className="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <p className="font-medium">تم إرسال رسالتك بنجاح!</p>
                      <p className="text-sm">سنقوم بالرد عليك في أقرب وقت ممكن.</p>
                    </div>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 mb-1">الاسم</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-gray-700 mb-1">البريد الإلكتروني</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-gray-700 mb-1">رقم الهاتف (اختياري)</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-gray-700 mb-1">الموضوع</label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        required
                      >
                        <option value="" disabled>اختر الموضوع</option>
                        <option value="استفسار عام">استفسار عام</option>
                        <option value="حجز سكن">حجز سكن</option>
                        <option value="شكوى">شكوى</option>
                        <option value="اقتراح">اقتراح</option>
                        <option value="أخرى">أخرى</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-gray-700 mb-1">الرسالة</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      required
                    ></textarea>
                  </div>
                  
                  {error && (
                    <div className="bg-red-50 border border-red-200 text-red-700 p-3 rounded-md">
                      {error}
                    </div>
                  )}
                  
                  <button
                    type="submit"
                    className="bg-primary text-white py-3 px-6 rounded-md hover:bg-primary-dark transition w-full md:w-auto"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin h-5 w-5 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        جاري الإرسال...
                      </span>
                    ) : "إرسال الرسالة"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
        
        {/* Map Section */}
        <div className="mt-10 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">موقعنا</h2>
          <div className="h-96 bg-gray-200 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">خريطة تظهر موقع المكتب الرئيسي</p>
          </div>
        </div>
        
        {/* FAQ Section */}
        <div className="mt-10 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-6">الأسئلة الشائعة</h2>
          
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-md p-4">
              <h3 className="font-medium text-gray-800 mb-2">كيف يمكنني حجز سكن عبر منصة مأوى؟</h3>
              <p className="text-gray-600">يمكنك تصفح الخيارات المتاحة عبر صفحة الخريطة، واختيار السكن المناسب لك، ثم اتباع خطوات الحجز البسيطة.</p>
            </div>
            
            <div className="border border-gray-200 rounded-md p-4">
              <h3 className="font-medium text-gray-800 mb-2">هل يمكنني إلغاء الحجز بعد تأكيده؟</h3>
              <p className="text-gray-600">نعم، يمكنك إلغاء الحجز وفقًا لسياسة الإلغاء المحددة في صفحة تفاصيل كل وحدة سكنية.</p>
            </div>
            
            <div className="border border-gray-200 rounded-md p-4">
              <h3 className="font-medium text-gray-800 mb-2">ما هي طرق الدفع المتاحة؟</h3>
              <p className="text-gray-600">نقبل الدفع النقدي عند الوصول، وسنضيف قريبًا خيارات دفع إلكترونية متنوعة.</p>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <Link href="/faq" className="text-primary hover:underline">
              عرض المزيد من الأسئلة الشائعة
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 