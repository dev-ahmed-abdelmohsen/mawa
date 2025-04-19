import Link from "next/link";

export default function Banner() {
  return (
    <section className="relative bg-gradient-to-r from-primary to-primary-dark text-white rounded-xl overflow-hidden">
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">ابحث عن سكنك المثالي مع مأوي</h1>
          <p className="text-lg mb-8">
            نوفر لك أفضل خيارات السكن للطلاب والمغتربين بأسعار مناسبة وخدمات متميزة
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="/map" 
              className="bg-white text-primary px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition text-center"
            >
              ابحث عن سكن
            </Link>
            <Link 
              href="/about" 
              className="border border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white/10 transition text-center"
            >
              تعرف علينا
            </Link>
          </div>
        </div>
      </div>
      {/* We would add an actual image here */}
      <div className="absolute inset-0 opacity-20 z-0">
        {/* <Image 
          src="/images/hero-background.jpg" 
          alt="سكن طلابي" 
          fill 
          className="object-cover"
        /> */}
      </div>
    </section>
  );  
}