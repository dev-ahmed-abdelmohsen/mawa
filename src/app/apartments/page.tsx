export default function ApartmentsPage() {
  return (
    <div className="py-8">
      <h1 className="text-3xl font-bold mb-6">الشقق</h1>
      <p className="text-gray-600 mb-8">
        استكشف مجموعتنا المتنوعة من الشقق المناسبة للطلاب والمغتربين
      </p>
      
      {/* Apartments listing would go here */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <p className="col-span-full text-gray-500 text-center py-12">
          قريبًا ستظهر هنا قائمة بالشقق المتاحة
        </p>
      </div>
    </div>
  );
} 