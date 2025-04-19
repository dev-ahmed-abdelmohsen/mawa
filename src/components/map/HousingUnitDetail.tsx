"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Define the housing unit type
export type HousingUnit = {
  id: string;
  title: string;
  type: "apartment" | "room" | "bed";
  gender: "male" | "female" | "mixed";
  price: number;
  images: string[];
  address: string;
  description: string;
  amenities: string[];
  lat: number;
  lng: number;
  university?: string;
  distance?: number;
  available?: boolean;
  features?: {
    area?: number;
    beds?: number;
    baths?: number;
  };
};

interface HousingUnitDetailProps {
  unit: HousingUnit | null;
  onClose: () => void;
}

export default function HousingUnitDetail({ 
  unit, 
  onClose,
}: HousingUnitDetailProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  
  if (!unit) return null;

  // Map type to Arabic
  const typeMap = {
    apartment: "شقة",
    room: "غرفة",
    bed: "سرير",
  };

  // Map gender to Arabic
  const genderMap = {
    male: "ذكور",
    female: "إناث",
    mixed: "مختلط",
  };

  // Get amenity icon based on type
  const getAmenityIcon = (amenity: string) => {
    switch (amenity) {
      case 'wifi':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M17.778 8.222c-4.296-4.296-11.26-4.296-15.556 0A1 1 0 01.808 6.808c5.076-5.077 13.308-5.077 18.384 0a1 1 0 01-1.414 1.414zM14.95 11.05a7 7 0 00-9.9 0 1 1 0 01-1.414-1.414 9 9 0 0112.728 0 1 1 0 01-1.414 1.414zM12.12 13.88a3 3 0 00-4.242 0 1 1 0 01-1.415-1.415 5 5 0 017.072 0 1 1 0 01-1.415 1.415zM9 16a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
          </svg>
        );
      case 'ac':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        );
      case 'kitchen':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        );
      case 'laundry':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
          </svg>
        );
      case 'study':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        );
      default:
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        );
    }
  };
  
  // Map amenities to Arabic
  const getAmenityLabel = (amenity: string) => {
    const amenityMap: Record<string, string> = {
      wifi: "واي فاي",
      ac: "تكييف",
      kitchen: "مطبخ",
      laundry: "غسالة",
      study: "مكان للدراسة",
    };
    
    return amenityMap[amenity] || amenity;
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full flex flex-col">
      {/* Header with close button */}
      <div className="p-4 border-b flex justify-between items-center">
        <h3 className="font-bold text-lg">{unit.title}</h3>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Image gallery */}
      <div className="relative h-48 bg-gray-100">
        {unit.images.length > 0 ? (
          <>
            <div className="relative h-full w-full">
              <Image 
                src={unit.images[activeImageIndex]} 
                alt={unit.title} 
                fill 
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover"
              />
            </div>
            
            {/* Image navigation */}
            {unit.images.length > 1 && (
              <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-2">
                {unit.images.map((_, index) => (
                  <button 
                    key={index}
                    onClick={() => setActiveImageIndex(index)}
                    className={`w-2 h-2 rounded-full ${index === activeImageIndex ? 'bg-white' : 'bg-white/50'}`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            )}
            
            {/* Prev/Next buttons */}
            {unit.images.length > 1 && (
              <>
                <button 
                  onClick={() => setActiveImageIndex(prev => (prev === 0 ? unit.images.length - 1 : prev - 1))}
                  className="absolute top-1/2 left-2 -translate-y-1/2 bg-black/30 text-white rounded-full p-1 hover:bg-black/50"
                  aria-label="Previous image"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button 
                  onClick={() => setActiveImageIndex(prev => (prev === unit.images.length - 1 ? 0 : prev + 1))}
                  className="absolute top-1/2 right-2 -translate-y-1/2 bg-black/30 text-white rounded-full p-1 hover:bg-black/50"
                  aria-label="Next image"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </>
            )}
          </>
        ) : (
          <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
            <span className="text-gray-400">لا توجد صورة</span>
          </div>
        )}
        
        {/* Unit type and gender badges */}
        <div className="absolute top-2 right-2 flex gap-2">
          <span className={`px-2 py-1 rounded-md text-xs font-medium ${
            unit.gender === "male" ? "bg-blue-100 text-blue-800" : 
            unit.gender === "female" ? "bg-pink-100 text-pink-800" : 
            "bg-purple-100 text-purple-800"
          }`}>
            {genderMap[unit.gender]}
          </span>
          <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded-md text-xs font-medium">
            {typeMap[unit.type]}
          </span>
        </div>
      </div>

      {/* Details scrollable area */}
      <div className="p-4 overflow-y-auto flex-grow">
        <div className="flex items-center justify-between mb-4">
          <div>
            <span className="text-xl font-bold text-primary">{unit.price}</span>
            <span className="text-gray-500 text-sm mr-1">جنيه / شهر</span>
          </div>
        </div>

        {/* Housing features if available */}
        {unit.features && (
          <div className="flex gap-4 mb-4 border-b pb-4">
            {unit.features.area && (
              <div className="text-center">
                <span className="block text-lg font-bold">{unit.features.area}</span>
                <span className="text-xs text-gray-500">متر مربع</span>
              </div>
            )}
            {unit.features.beds && (
              <div className="text-center">
                <span className="block text-lg font-bold">{unit.features.beds}</span>
                <span className="text-xs text-gray-500">غرف نوم</span>
              </div>
            )}
            {unit.features.baths && (
              <div className="text-center">
                <span className="block text-lg font-bold">{unit.features.baths}</span>
                <span className="text-xs text-gray-500">حمامات</span>
              </div>
            )}
          </div>
        )}

        <div className="mb-4">
          <h4 className="text-sm font-medium text-gray-500 mb-1">العنوان</h4>
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <p className="text-gray-700">{unit.address}</p>
          </div>
          
          {unit.university && (
            <div className="mt-1 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
              </svg>
              <p className="text-gray-600 text-sm">بالقرب من {unit.university}</p>
              {unit.distance && (
                <span className="text-primary text-xs mr-1">({unit.distance} كم)</span>
              )}
            </div>
          )}
        </div>

        <div className="mb-4">
          <h4 className="text-sm font-medium text-gray-500 mb-1">الوصف</h4>
          <p className="text-gray-700 text-sm">{unit.description}</p>
        </div>

        {/* Amenities */}
        {unit.amenities.length > 0 && (
          <div className="mb-4">
            <h4 className="text-sm font-medium text-gray-500 mb-2">المرافق</h4>
            <div className="grid grid-cols-2 gap-2">
              {unit.amenities.map((amenity) => (
                <div key={amenity} className="flex items-center bg-gray-50 p-2 rounded">
                  <div className="text-primary ml-2">
                    {getAmenityIcon(amenity)}
                  </div>
                  <span className="text-sm text-gray-700">
                    {getAmenityLabel(amenity)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Availability status */}
        {unit.available !== undefined && (
          <div className="mb-4 flex items-center">
            <div className={`w-3 h-3 rounded-full ${unit.available ? 'bg-green-500' : 'bg-red-500'} ml-2`}></div>
            <span className={`text-sm ${unit.available ? 'text-green-700' : 'text-red-700'}`}>
              {unit.available ? 'متاح للحجز' : 'غير متاح حاليًا'}
            </span>
          </div>
        )}
      </div>

      {/* Action buttons */}
      <div className="p-4 border-t">
        <div className="grid grid-cols-2 gap-3">
          <Link 
             href={`/housing-details?id=${unit.id}`}
             className="bg-primary text-white text-center py-2 rounded-md hover:bg-primary-dark transition"
          >
            التفاصيل الكاملة
          </Link>
          <button 
            className="border border-primary text-primary py-2 rounded-md hover:bg-primary/5 transition"
            onClick={() => window.open(`https://maps.google.com/maps?q=${unit.lat},${unit.lng}`, '_blank')}
          >
            الاتجاهات
          </button>
        </div>
      </div>
    </div>
  );
} 