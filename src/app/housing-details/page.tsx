"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { mockHousingUnits } from "@/data/Units";
import { HousingUnit } from "@/components/map/HousingUnitDetail";

// استيراد مكون الخريطة بشكل ديناميكي (Leaflet لا يعمل على الخادم)
const UnitLocationMap = dynamic(
  () => import("@/components/map/MapComponent"),
  { ssr: false }
);

// الخطوات في عملية الحجز
type BookingStep = 'details' | 'dates' | 'personal' | 'payment' | 'confirmation';

function HousingDetailsContent() {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  
  const [unit, setUnit] = useState<HousingUnit | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [bookingStep, setBookingStep] = useState<BookingStep>('details');
  const [bookingData, setBookingData] = useState({
    startDate: '',
    endDate: '',
    name: '',
    phone: '',
    email: '',
    university: '',
    notes: ''
  });
  
  // محاكاة جلب البيانات
  useEffect(() => {
    if (id) {
      // في بيئة الإنتاج، هذا سيكون طلبًا للخادم
      const foundUnit = mockHousingUnits.find(unit => unit.id === id);
      setUnit(foundUnit || null);
      setLoading(false);
    }
  }, [id]);
  
  // تحديث بيانات الحجز
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setBookingData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  // الانتقال للخطوة التالية
  const handleNextStep = () => {
    if (bookingStep === 'details') setBookingStep('dates');
    else if (bookingStep === 'dates') setBookingStep('personal');
    else if (bookingStep === 'personal') setBookingStep('payment');
    else if (bookingStep === 'payment') setBookingStep('confirmation');
  };
  
  // الرجوع للخطوة السابقة
  const handlePreviousStep = () => {
    if (bookingStep === 'dates') setBookingStep('details');
    else if (bookingStep === 'personal') setBookingStep('dates');
    else if (bookingStep === 'payment') setBookingStep('personal');
    else if (bookingStep === 'confirmation') setBookingStep('payment');
  };
  
  // إرسال طلب الحجز
  const handleSubmitBooking = (e: React.FormEvent) => {
    e.preventDefault();
    // هنا سيتم إرسال بيانات الحجز للخادم
    console.log("تم إرسال طلب الحجز:", { unitId: id, ...bookingData });
    setBookingStep('confirmation');
  };
  
  // الحصول على نوع الوحدة باللغة العربية
  const getTypeText = (type: string) => {
    const typeMap: Record<string, string> = {
      apartment: "شقة",
      room: "غرفة",
      bed: "سرير",
    };
    return typeMap[type] || type;
  };
  
  // الحصول على نوع الجنس باللغة العربية
  const getGenderText = (gender: string) => {
    const genderMap: Record<string, string> = {
      male: "ذكور",
      female: "إناث",
    };
    return genderMap[gender] || gender;
  };
  
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }
  
  if (!unit) {
    return (
      <div className="min-h-screen py-12 px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 text-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-400 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h1 className="text-2xl font-bold text-gray-700 mb-4">الوحدة غير موجودة</h1>
          <p className="text-gray-500 mb-6">لم نتمكن من العثور على الوحدة السكنية المطلوبة</p>
          <Link href="/map" className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition">
            العودة إلى الخريطة
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* شريط التنقل */}
        <div className="mb-6">
          <div className="flex items-center text-sm text-gray-500 mb-2">
            <Link href="/" className="hover:text-primary">الرئيسية</Link>
            <span className="mx-2">›</span>
            <Link href="/map" className="hover:text-primary">الخريطة</Link>
            <span className="mx-2">›</span>
            <span className="text-gray-700">{unit.title}</span>
          </div>
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-800">{unit.title}</h1>
            <Link href="/map" className="text-primary hover:underline">
              العودة للخريطة
            </Link>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* معلومات الوحدة */}
          <div className="lg:col-span-2">
            {/* معرض الصور */}
            <div className="relative h-96 bg-gray-100 rounded-lg overflow-hidden mb-6">
              {unit.images.length > 0 ? (
                <>
                  <div className="relative h-full w-full">
                    <Image 
                      src={unit.images[activeImageIndex]} 
                      alt={unit.title} 
                      fill 
                      sizes="(max-width: 768px) 100vw, 800px"
                      className="object-cover"
                    />
                  </div>
                  
                  {/* أزرار التنقل بين الصور */}
                  {unit.images.length > 1 && (
                    <>
                      <button 
                        onClick={() => setActiveImageIndex(prev => (prev === 0 ? unit.images.length - 1 : prev - 1))}
                        className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/30 text-white rounded-full p-2 hover:bg-black/50"
                        aria-label="الصورة السابقة"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      <button 
                        onClick={() => setActiveImageIndex(prev => (prev === unit.images.length - 1 ? 0 : prev + 1))}
                        className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/30 text-white rounded-full p-2 hover:bg-black/50"
                        aria-label="الصورة التالية"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </>
                  )}
                  
                  {/* مصغرات الصور */}
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 rtl:space-x-reverse">
                    {unit.images.map((_, index) => (
                      <button 
                        key={index}
                        onClick={() => setActiveImageIndex(index)}
                        className={`w-3 h-3 rounded-full ${
                          index === activeImageIndex ? 'bg-white' : 'bg-white/50'
                        }`}
                        aria-label={`الانتقال للصورة ${index + 1}`}
                      />
                    ))}
                  </div>
                </>
              ) : (
                <div className="h-full flex items-center justify-center">
                  <span className="text-gray-400">لا توجد صور متاحة</span>
                </div>
              )}
              
              {/* شارات النوع والجنس */}
              <div className="absolute top-4 right-4 flex gap-2">
                <span className={`px-3 py-1 rounded-md text-sm font-medium ${
                  unit.gender === "male" ? "bg-blue-100 text-blue-800" : 
                  "bg-red-100 text-red-800"
                }`}>
                  {getGenderText(unit.gender)}
                </span>
                <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-md text-sm font-medium">
                  {getTypeText(unit.type)}
                </span>
              </div>
            </div>
            
            {/* معلومات رئيسية */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-gray-800">{unit.price} جنيه<span className="text-sm font-normal text-gray-500"> / شهر</span></h2>
              </div>
              
              <div className="flex flex-wrap gap-4 mb-4">
                {unit.features?.area && (
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
                    </svg>
                    <span>{unit.features.area} متر مربع</span>
                  </div>
                )}
                
                {unit.features?.beds && (
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{unit.features.beds} سرير</span>
                  </div>
                )}
                
                {unit.features?.baths && (
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{unit.features.baths} حمام</span>
                  </div>
                )}
                
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>{unit.address}</span>
                </div>
              </div>
              
              {unit.university && (
                <div className="flex items-center text-primary mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                  </svg>
                  <span>{unit.university}</span>
                  {unit.distance && (
                    <span className="mr-2 text-sm text-gray-500">تبعد {unit.distance} كم</span>
                  )}
                </div>
              )}
              
              <h3 className="font-bold text-lg mb-2">الوصف</h3>
              <p className="text-gray-700 mb-6">{unit.description}</p>
              
              <h3 className="font-bold text-lg mb-2">المميزات والمرافق</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                {unit.amenities.map((amenity) => (
                  <div key={amenity} className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>
                      {amenity === "wifi" ? "واي فاي" : 
                       amenity === "ac" ? "تكييف" : 
                       amenity === "kitchen" ? "مطبخ" : 
                       amenity === "laundry" ? "غسالة" : 
                       amenity === "study" ? "مكان للدراسة" : amenity}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* الموقع */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="font-bold text-lg mb-4">الموقع</h3>
              <div className="bg-gray-100 h-64 rounded-lg mb-4">
                {unit.lat && unit.lng ? (
                  <UnitLocationMap 
                    units={[unit]}
                    center={[unit.lat, unit.lng]}
                    zoom={15}
                    onUnitSelect={() => {}}
                    selectedUnitId={unit.id}
                  />
                ) : (
                  <div className="h-full flex items-center justify-center">
                    <div className="text-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-400 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <p className="text-gray-500">{unit.address}</p>
                    </div>
                  </div>
                )}
              </div>
              
              <p className="text-gray-700">
                {unit.university && (
                  <span>
                    يقع هذا السكن بالقرب من {unit.university} 
                    {unit.distance && ` على بعد ${unit.distance} كيلومتر`}.
                  </span>
                )}
              </p>
            </div>
          </div>
          
          {/* نموذج الحجز */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
              <h3 className="font-bold text-lg mb-4 text-center">
                {bookingStep === 'confirmation' ? 'تم تأكيد الحجز' : 'حجز الوحدة'}
              </h3>
              
              {/* مراحل الحجز */}
              {bookingStep !== 'confirmation' && (
                <div className="flex justify-between mb-6">
                  <div className={`flex flex-col items-center ${
                    bookingStep === 'details' ? 'text-primary' : 'text-gray-400'
                  }`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-1 ${
                      bookingStep === 'details' ? 'bg-primary text-white' : 'bg-gray-200'
                    }`}>1</div>
                    <span className="text-xs">التفاصيل</span>
                  </div>
                  <div className={`flex flex-col items-center ${
                    bookingStep === 'dates' ? 'text-primary' : 'text-gray-400'
                  }`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-1 ${
                      bookingStep === 'dates' ? 'bg-primary text-white' : 'bg-gray-200'
                    }`}>2</div>
                    <span className="text-xs">التواريخ</span>
                  </div>
                  <div className={`flex flex-col items-center ${
                    bookingStep === 'personal' ? 'text-primary' : 'text-gray-400'
                  }`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-1 ${
                      bookingStep === 'personal' ? 'bg-primary text-white' : 'bg-gray-200'
                    }`}>3</div>
                    <span className="text-xs">بياناتك</span>
                  </div>
                  <div className={`flex flex-col items-center ${
                    bookingStep === 'payment' ? 'text-primary' : 'text-gray-400'
                  }`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-1 ${
                      bookingStep === 'payment' ? 'bg-primary text-white' : 'bg-gray-200'
                    }`}>4</div>
                    <span className="text-xs">الدفع</span>
                  </div>
                </div>
              )}
              
              {/* محتوى الخطوة الحالية */}
              {bookingStep === 'details' && (
                <div>
                  <div className="border-t border-b py-4 mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700">السعر الشهري</span>
                      <span className="font-bold">{unit.price} جنيه</span>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700">تأمين (مسترد)</span>
                      <span className="font-bold">{Math.round(unit.price * 0.5)} جنيه</span>
                    </div>
                    <div className="flex justify-between items-center pt-2 border-t">
                      <span className="font-bold">الإجمالي المبدئي</span>
                      <span className="font-bold text-primary">{Math.round(unit.price * 1.5)} جنيه</span>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-medium mb-2">ملخص الوحدة:</h4>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>● نوع السكن: {getTypeText(unit.type)}</li>
                      <li>● مخصص لـ: {getGenderText(unit.gender)}</li>
                      {unit.features?.area && <li>● المساحة: {unit.features.area} متر مربع</li>}
                      {unit.features?.beds && <li>● عدد الأسرة: {unit.features.beds}</li>}
                      {unit.features?.baths && <li>● عدد الحمامات: {unit.features.baths}</li>}
                    </ul>
                  </div>
                  
                  <div className="text-sm text-gray-500 mb-6">
                    <p>بالضغط على &quot;متابعة&quot; أنت توافق على شروط وأحكام الحجز وسياسة الإلغاء.</p>
                  </div>
                </div>
              )}
              
              {bookingStep === 'dates' && (
                <div>
                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2">تاريخ البداية</label>
                    <input 
                      type="date" 
                      name="startDate"
                      value={bookingData.startDate}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label className="block text-gray-700 mb-2">تاريخ النهاية (اختياري)</label>
                    <input 
                      type="date" 
                      name="endDate"
                      value={bookingData.endDate}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  
                  <div className="text-sm text-gray-500 mb-6">
                    <p>الحد الأدنى للإقامة هو شهر واحد. يمكنك تحديد تاريخ النهاية إذا كنت تعرف متى ستغادر.</p>
                  </div>
                </div>
              )}
              
              {bookingStep === 'personal' && (
                <form>
                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2">الاسم الكامل</label>
                    <input 
                      type="text" 
                      name="name"
                      value={bookingData.name}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2">رقم الهاتف</label>
                    <input 
                      type="tel" 
                      name="phone"
                      value={bookingData.phone}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2">البريد الإلكتروني</label>
                    <input 
                      type="email" 
                      name="email"
                      value={bookingData.email}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2">الجامعة / المعهد (اختياري)</label>
                    <input 
                      type="text" 
                      name="university"
                      value={bookingData.university}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label className="block text-gray-700 mb-2">ملاحظات إضافية (اختياري)</label>
                    <textarea 
                      name="notes"
                      value={bookingData.notes}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded-md p-2 h-24 resize-none focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    ></textarea>
                  </div>
                </form>
              )}
              
              {bookingStep === 'payment' && (
                <div>
                  <div className="border-t border-b py-4 mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700">السعر الشهري</span>
                      <span className="font-bold">{unit.price} جنيه</span>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700">تأمين (مسترد)</span>
                      <span className="font-bold">{Math.round(unit.price * 0.5)} جنيه</span>
                    </div>
                    <div className="flex justify-between items-center pt-2 border-t">
                      <span className="font-bold">الإجمالي</span>
                      <span className="font-bold text-primary">{Math.round(unit.price * 1.5)} جنيه</span>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-medium mb-2">طرق الدفع:</h4>
                    <div className="space-y-2">
                      <div className="flex items-center border rounded-md p-3">
                        <input type="radio" id="cash" name="payment" value="cash" className="ml-2" defaultChecked />
                        <label htmlFor="cash" className="flex items-center cursor-pointer">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                          <span>الدفع عند الوصول</span>
                        </label>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-sm text-gray-500 mb-6">
                    <p>سيتم تأكيد حجزك بعد المراجعة. يمكنك الدفع عند الوصول إلى مقر السكن.</p>
                  </div>
                </div>
              )}
              
              {bookingStep === 'confirmation' && (
                <div className="text-center">
                  <div className="bg-green-100 text-green-800 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold mb-2">تم تقديم طلب الحجز بنجاح!</h4>
                  <p className="text-gray-600 mb-6">
                    سنقوم بمراجعة طلبك والتواصل معك في أقرب وقت. يمكنك متابعة حالة الطلب من خلال حسابك الشخصي.
                  </p>
                  <div className="border-t pt-4">
                    <Link 
                      href="/map" 
                      className="block w-full bg-primary text-white py-3 rounded-md hover:bg-primary-dark transition text-center"
                    >
                      العودة إلى الخريطة
                    </Link>
                  </div>
                </div>
              )}
              
              {/* أزرار التنقل بين الخطوات */}
              {bookingStep !== 'confirmation' && (
                <div className="flex justify-between gap-4">
                  {bookingStep !== 'details' && (
                    <button 
                      onClick={handlePreviousStep}
                      className="flex-1 py-3 border border-gray-300 text-gray-600 rounded-md hover:bg-gray-50 transition"
                    >
                      السابق
                    </button>
                  )}
                  
                  <button 
                    onClick={bookingStep === 'payment' ? handleSubmitBooking : handleNextStep}
                    className="flex-1 bg-primary text-white py-3 rounded-md hover:bg-primary-dark transition"
                  >
                    {bookingStep === 'payment' ? 'تأكيد الحجز' : 'متابعة'}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HousingDetailsPage() {
  return (
    <Suspense fallback={
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    }>
      <HousingDetailsContent />
    </Suspense>
  );
} 