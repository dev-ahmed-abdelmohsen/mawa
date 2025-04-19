import Link from "next/link";

export default function GenderHousing() {
  return (
    <section className="py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">سكن الطلبة والطالبات</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          نوفر خيارات سكنية متنوعة ومناسبة لكل من الطلبة والطالبات
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Male Housing */}
        <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-blue-500 to-blue-700 text-white">
          <div className="absolute inset-0 bg-black opacity-30"></div>
          <div className="relative z-10 p-8 md:p-12">
            <h3 className="text-2xl font-bold mb-4">سكن الطلبة</h3>
            <p className="mb-6">
              وحدات سكنية آمنة ومريحة مخصصة للطلاب الذكور، مع مرافق مناسبة وخدمات متميزة.
            </p>
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                شقق
              </span>
              <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                غرف مشتركة
              </span>
              <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                أسرّة
              </span>
            </div>
            <Link 
              href="/map?gender=male" 
              className="inline-block bg-white text-blue-700 px-6 py-2 rounded-md font-semibold hover:bg-blue-50 transition"
            >
              استكشف سكن الطلبة
            </Link>
          </div>
        </div>
        
        {/* Female Housing */}
        <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-pink-500 to-pink-700 text-white">
          <div className="absolute inset-0 bg-black opacity-30"></div>
          <div className="relative z-10 p-8 md:p-12">
            <h3 className="text-2xl font-bold mb-4">سكن الطالبات</h3>
            <p className="mb-6">
              وحدات سكنية آمنة ومريحة مخصصة للطالبات، مع أنظمة أمان متطورة وخصوصية عالية.
            </p>
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                شقق
              </span>
              <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                غرف مشتركة
              </span>
              <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                أسرّة
              </span>
            </div>
            <Link 
              href="/map?gender=female" 
              className="inline-block bg-white text-pink-700 px-6 py-2 rounded-md font-semibold hover:bg-pink-50 transition"
            >
              استكشف سكن الطالبات
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
} 