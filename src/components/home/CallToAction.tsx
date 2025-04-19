import Link from 'next/link';

export default function CallToAction() {
  return (
    <section className="bg-primary text-white rounded-xl py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">ابدأ رحلتك مع مأوي اليوم</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          سجل الآن واحصل على تجربة سكن مميزة تناسب احتياجاتك وميزانيتك
        </p>
        <Link 
          href="/register" 
          className="bg-white text-primary px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition"
        >
          سجل الآن
        </Link>
      </div>
    </section>
  );
} 