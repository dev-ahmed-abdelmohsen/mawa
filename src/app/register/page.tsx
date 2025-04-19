"use client";

import { useState } from "react";
import Link from "next/link";
import { validateRegistrationForm } from "@/utils/validation";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    password: "",
    confirmPassword: ""
  });
  
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    
    try {
      // استخدام دالة التحقق من صحة النموذج
      const validationError = validateRegistrationForm(formData);
      
      if (validationError) {
        setError(validationError);
        setIsLoading(false);
        return;
      }
      
      // محاكاة لطلب API
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSuccess(true);
      
    } catch {
      setError("حدث خطأ أثناء التسجيل. الرجاء المحاولة مرة أخرى.");
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <div className="min-h-screen py-12 px-4 flex items-center justify-center">
      <div className="max-w-xl w-full bg-white rounded-lg shadow-md overflow-hidden">
        <div className="px-6 py-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">إنشاء حساب جديد</h1>
            <p className="text-gray-600">انضم إلى مأوى للوصول إلى أفضل خيارات السكن الطلابي</p>
          </div>
          
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 p-3 rounded-md mb-6">
              {error}
            </div>
          )}
          
          {success ? (
            <div className="bg-green-50 border border-green-200 text-green-700 p-6 rounded-md mb-6 text-center">
              <div className="flex justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">تم التسجيل بنجاح!</h3>
              <p className="mb-4">تم إنشاء حسابك بنجاح. يمكنك الآن تسجيل الدخول واستخدام المنصة.</p>
              <Link href="/login" className="bg-primary text-white px-6 py-3 rounded-md inline-block hover:bg-primary-dark transition">
                تسجيل الدخول
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="fullName" className="block text-gray-700 font-medium mb-2">
                  الاسم الرباعي
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="الاسم الأول واسم الأب واسم الجد واسم العائلة"
                  required
                />
                <p className="text-xs text-gray-500 mt-1">مثال: أحمد محمد علي إبراهيم</p>
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                  رقم الهاتف
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="01xxxxxxxxx"
                  required
                />
                <p className="text-xs text-gray-500 mt-1">سيتم استخدام رقم الهاتف لتسجيل الدخول والتواصل معك</p>
              </div>
              
              <div>
                <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
                  كلمة المرور
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="أدخل كلمة المرور (8 أحرف على الأقل)"
                  minLength={8}
                  required
                />
              </div>
              
              <div>
                <label htmlFor="confirmPassword" className="block text-gray-700 font-medium mb-2">
                  تأكيد كلمة المرور
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="أعد إدخال كلمة المرور"
                  minLength={8}
                  required
                />
              </div>
              
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="terms"
                  className="h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary"
                  required
                />
                <label htmlFor="terms" className="mr-2 text-gray-700 text-sm">
                  أوافق على{" "}
                  <Link href="/terms" className="text-primary hover:underline">
                    شروط الاستخدام
                  </Link>{" "}
                  و{" "}
                  <Link href="/privacy" className="text-primary hover:underline">
                    سياسة الخصوصية
                  </Link>
                </label>
              </div>
              
              <button
                type="submit"
                className="w-full bg-primary text-white py-3 rounded-md hover:bg-primary-dark transition focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                disabled={isLoading}
              >
                {isLoading ? (
                  <span className="flex items-center justify-center">
                    <svg
                      className="animate-spin h-5 w-5 ml-2 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    جاري إنشاء الحساب...
                  </span>
                ) : (
                  "إنشاء حساب"
                )}
              </button>
            </form>
          )}
          
          <div className="mt-8 text-center">
            <p className="text-gray-600">
              لديك حساب بالفعل؟{" "}
              <Link
                href="/login"
                className="text-primary hover:text-primary-dark hover:underline"
              >
                تسجيل الدخول
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 