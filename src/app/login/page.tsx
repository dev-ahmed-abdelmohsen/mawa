"use client";

import React, { useState } from "react";
import Link from "next/link";
import { isValidEgyptianPhone } from "@/utils/validation";

export default function LoginPage() {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    // التحقق من صحة الإدخال
    if (!phone) {
      setError("الرجاء إدخال رقم الهاتف");
      return;
    }

    if (!isValidEgyptianPhone(phone)) {
      setError("الرجاء إدخال رقم هاتف مصري صحيح (يبدأ بـ 01 ويتكون من 11 رقم)");
      return;
    }

    if (!password) {
      setError("الرجاء إدخال كلمة المرور");
      return;
    }

    setLoading(true);

    try {
      // محاكاة لنداء واجهة برمجة التطبيقات لتسجيل الدخول
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // التحقق من صحة بيانات الدخول (هذا مجرد محاكاة)
      if (phone === "01123456789" && password === "password123") {
        setSuccess(true);
        // هنا يمكن توجيه المستخدم إلى الصفحة الرئيسية بعد تسجيل الدخول
      } else {
        setError("بيانات الدخول غير صحيحة");
      }
    } catch {
      setError("حدث خطأ أثناء تسجيل الدخول. الرجاء المحاولة مرة أخرى");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen py-12 px-4 flex flex-col justify-center">
      <div className="max-w-md mx-auto w-full">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">تسجيل الدخول</h1>
          <p className="text-gray-600 mt-2">أدخل بياناتك للوصول إلى حسابك</p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md">
          {success ? (
            <div className="text-center py-8">
              <div className="bg-green-100 text-green-700 p-4 rounded-md mb-6">
                تم تسجيل الدخول بنجاح!
              </div>
              <Link href="/" className="text-primary hover:underline">
                الذهاب إلى الصفحة الرئيسية
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="bg-red-100 text-red-700 p-4 rounded-md">
                  {error}
                </div>
              )}

              <div>
                <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                  رقم الهاتف
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="أدخل رقم الهاتف (مثال: 01123456789)"
                  className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  dir="ltr"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
                  كلمة المرور
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="أدخل كلمة المرور"
                  className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="remember"
                    className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                  />
                  <label htmlFor="remember" className="mr-2 block text-sm text-gray-700">
                    تذكرني
                  </label>
                </div>
                <Link href="/forgot-password" className="text-sm text-primary hover:underline">
                  نسيت كلمة المرور؟
                </Link>
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-white py-3 rounded-md hover:bg-primary-dark transition duration-300 flex justify-center"
                disabled={loading}
              >
                {loading ? (
                  <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  "تسجيل الدخول"
                )}
              </button>

              <div className="text-center mt-4">
                <p className="text-gray-600">
                  ليس لديك حساب؟{" "}
                  <Link href="/register" className="text-primary hover:underline">
                    إنشاء حساب جديد
                  </Link>
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
} 