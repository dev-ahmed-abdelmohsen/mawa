export default function Features() {
  return (
    <section className="py-12 bg-gray-50 rounded-xl">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">مميزات السكن مع مأوي</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            نحرص على توفير تجربة سكن مريحة وآمنة لجميع عملائنا
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Feature 1 */}
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-primary text-white rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold mb-2">أمان وخصوصية</h3>
            <p className="text-gray-600">
              أنظمة أمان متطورة وخصوصية كاملة لجميع المقيمين
            </p>
          </div>
          
          {/* Feature 2 */}
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-primary text-white rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold mb-2">إنترنت فائق السرعة</h3>
            <p className="text-gray-600">
              اتصال إنترنت سريع ومستقر في جميع الوحدات السكنية
            </p>
          </div>
          
          {/* Feature 3 */}
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-primary text-white rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-lg font-bold mb-2">مواقع متميزة</h3>
            <p className="text-gray-600">
              سكن قريب من الجامعات والمراكز التعليمية والخدمية
            </p>
          </div>
          
          {/* Feature 4 */}
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-primary text-white rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <h3 className="text-lg font-bold mb-2">بيئة دراسية</h3>
            <p className="text-gray-600">
              مساحات مخصصة للدراسة وبيئة هادئة تساعد على التركيز
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 