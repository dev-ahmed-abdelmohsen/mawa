import Link from "next/link";

export default function Cards() {
  return (
    <section className="py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">خيارات السكن المتنوعة</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          نقدم مجموعة متنوعة من خيارات السكن لتناسب احتياجاتك وميزانيتك
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Apartments Card */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
          <div className="h-48 bg-gray-200 relative flex items-center justify-center">
            <div className="text-3xl font-bold text-gray-400">شقة</div>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">الشقق</h3>
            <p className="text-gray-600 mb-4">
              شقق مفروشة بالكامل مع جميع الخدمات الأساسية متاحة للإيجار
            </p>
            <Link href="/map?type=apartment&view=list" className="text-primary font-semibold hover:underline">
              استكشف الشقق
            </Link>
          </div>
        </div>
        
        {/* Rooms Card */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
          <div className="h-48 bg-blue-100 relative flex items-center justify-center">
            <div className="text-3xl font-bold text-blue-400">غرفة</div>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">الغرف</h3>
            <p className="text-gray-600 mb-4">
              غرف خاصة في شقق مشتركة مع مرافق مشتركة ومساحة للدراسة
            </p>
            <Link href="/map?type=room&view=list" className="text-primary font-semibold hover:underline">
              استكشف الغرف
            </Link>
          </div>
        </div>

        {/* Beds Card */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
          <div className="h-48 bg-teal-100 relative flex items-center justify-center">
            <div className="text-3xl font-bold text-teal-400">سرير</div>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">سرير في غرفة</h3>
            <p className="text-gray-600 mb-4">
              سرير في غرف مشتركة بأسعار اقتصادية مناسبة للطلاب
            </p>
            <Link href="/map?type=bed&view=list" className="text-primary font-semibold hover:underline">
              استكشف سرير في غرفة
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}