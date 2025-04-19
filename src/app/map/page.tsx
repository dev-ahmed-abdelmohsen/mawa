"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Filters, { HousingFilter } from "@/components/shared/Filters";
import HousingUnitDetail, { HousingUnit } from "@/components/map/HousingUnitDetail";
import Image from "next/image";
import Link from "next/link";
import { mockHousingUnits } from "@/data/Units";
// Dynamic import for the Map component (Leaflet only works client-side)
const MapComponent = dynamic(
  () => import("@/components/map/MapComponent"),
  { ssr: false }
);

// Mock data for housing units (in a real app, this would come from an API)

// Default filters
const defaultFilters: HousingFilter = {
  type: [],
  gender: null,
  priceRange: [0, 10000],
  amenities: [],
};

export default function MapPage() {
  const [filteredUnits, setFilteredUnits] = useState<HousingUnit[]>(mockHousingUnits);
  const [selectedUnit, setSelectedUnit] = useState<HousingUnit | null>(null);
  const [mapCenter, setMapCenter] = useState<[number, number]>([30.0444, 31.2357]); // Cairo
  const [mapZoom, setMapZoom] = useState<number>(12);
  const [viewMode, setViewMode] = useState<'map' | 'list'>('map');
  const [isLoading, setIsLoading] = useState(false);
  const [filters, setFilters] = useState<HousingFilter>(defaultFilters);

  // Get URL params for initial filter
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      const gender = url.searchParams.get('gender');
      const type = url.searchParams.get('type');
      const view = url.searchParams.get('view');
      
      // تحديد وضع العرض
      if (view === 'list') {
        setViewMode('list');
      } else if (view === 'map') {
        setViewMode('map');
      }
      
      // تهيئة المتغيرات
      const newFilters = { ...defaultFilters };
      let shouldFilter = false;
      
      // تحقق من نوع السكن
      if (type && ['apartment', 'room', 'bed'].includes(type)) {
        newFilters.type = [type];
        shouldFilter = true;
      }
      
      // تحقق من النوع (ذكور/إناث)
      if (gender && (gender === 'male' || gender === 'female')) {
        newFilters.gender = gender;
        shouldFilter = true;
      }
      
      // تطبيق الفلتر إذا كان هناك معلمات صالحة
      if (shouldFilter) {
        setIsLoading(true);
        
        const filtered = mockHousingUnits.filter((unit: HousingUnit) => {
          // فلتر النوع
          if (newFilters.type.length > 0 && !newFilters.type.includes(unit.type)) {
            return false;
          }
          
          // فلتر الجنس
          if (newFilters.gender && unit.gender !== newFilters.gender) {
            return false;
          }
          
          return true;
        });
        
        setFilteredUnits(filtered);
        setFilters(newFilters);
        setIsLoading(false);
      }
    }
  }, []);

  // Handle filter changes
  const handleFilterChange = (filters: HousingFilter) => {
    setIsLoading(true);
    
    // Simulate API delay
    setTimeout(() => {
      // Filter the housing units based on the selected filters
      const filtered = mockHousingUnits.filter((unit: HousingUnit) => {
        // Filter by type
        if (filters.type.length > 0 && !filters.type.includes(unit.type)) {
          return false;
        }
        
        // Filter by gender
        if (filters.gender && unit.gender !== filters.gender) {
          return false;
        }
        
        // Filter by price
        if (unit.price < filters.priceRange[0] || unit.price > filters.priceRange[1]) {
          return false;
        }
        
        // إزالة فلتر التقييم
        
        // Filter by amenities
        if (filters.amenities.length > 0) {
          const hasAllAmenities = filters.amenities.every((amenity) => 
            unit.amenities.includes(amenity)
          );
          if (!hasAllAmenities) {
            return false;
          }
        }
        
        return true;
      });
      
      setFilteredUnits(filtered);
      setIsLoading(false);
    }, 500);
  };

  // Handle unit selection
  const handleUnitSelect = (unit: HousingUnit) => {
    setSelectedUnit(unit);
    setMapCenter([unit.lat, unit.lng]);
    setMapZoom(15);
  };

  // Close the detail panel
  const handleCloseDetail = () => {
    setSelectedUnit(null);
  };

  return (
    <div className="py-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">خريطة الوحدات السكنية</h1>
        <p className="text-gray-600">
          استخدم الخريطة للعثور على وحدات سكنية بالقرب منك
        </p>
      </div>
      
      {/* View toggle */}
      <div className="mb-6 flex justify-between items-center">
        <div className="flex items-center">
          <div className="bg-white shadow-sm rounded-lg p-1 flex">
            <button
              onClick={() => setViewMode('map')}
              className={`px-4 py-2 rounded-md ${
                viewMode === 'map' 
                  ? 'bg-primary text-white' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              الخريطة
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`px-4 py-2 rounded-md ${
                viewMode === 'list' 
                  ? 'bg-primary text-white' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              القائمة
            </button>
          </div>
        </div>
        
        <div className="text-sm text-gray-500">
          {isLoading ? (
            <span className="flex items-center">
              <svg className="animate-spin h-4 w-4 ml-1 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              جاري التحميل...
            </span>
          ) : (
            <span>{filteredUnits.length} وحدة سكنية</span>
          )}
        </div>
      </div>
      
      {/* Full-width filters */}
      <div className="mb-6">
        <Filters 
          onFilterChange={handleFilterChange}
          initialFilters={filters}
          className="bg-white p-4 rounded-lg shadow-md"
        />
      </div>
      
      {/* Main Content */}
      {viewMode === 'map' ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-[70vh]">
          {/* Map */}
          <div className="h-full">
            <MapComponent 
              units={filteredUnits}
              center={mapCenter}
              zoom={mapZoom}
              onUnitSelect={handleUnitSelect}
              selectedUnitId={selectedUnit?.id}
            />
          </div>
          
          {/* Detail Panel */}
          <div className="h-full overflow-y-auto">
            {selectedUnit ? (
              <HousingUnitDetail 
                unit={selectedUnit} 
                onClose={handleCloseDetail}
              />
            ) : (
              <div className="bg-white rounded-lg shadow-lg p-6 h-full flex flex-col items-center justify-center text-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-300 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <h3 className="text-xl font-medium text-gray-700 mb-2">اختر وحدة من الخريطة</h3>
                <p className="text-gray-500">
                  انقر على أحد العلامات في الخريطة لعرض تفاصيل الوحدة السكنية
                </p>
              </div>
            )}
          </div>
        </div>
      ) : (
        // List View
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredUnits.length > 0 ? (
            filteredUnits.map((unit) => (
              <div 
                key={unit.id} 
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition cursor-pointer"
                onClick={() => {
                  setSelectedUnit(unit);
                  setViewMode('map');
                }}
              >
                <div className="h-48 bg-gray-200 relative">
                  {unit.images.length > 0 && (
                    <div className="relative h-full w-full">
                      <Image 
                        src={unit.images[0]} 
                        alt={unit.title} 
                        fill 
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div className="absolute top-2 right-2 flex gap-2">
                    <span className={`px-2 py-1 rounded-md text-xs font-medium ${
                      unit.gender === "male" ? "bg-blue-100 text-blue-800" : 
                      "bg-red-100 text-red-800"
                    }`}>
                      {unit.gender === "male" ? "ذكور" : "إناث"}
                    </span>
                    <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded-md text-xs font-medium">
                      {unit.type === "apartment" ? "شقة" : unit.type === "room" ? "غرفة" : "سرير"}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-1 line-clamp-1">{unit.title}</h3>
                  <div className="flex items-center text-gray-500 text-sm mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="line-clamp-1">{unit.address}</span>
                  </div>
                  <div className="flex justify-between items-center mb-3">
                    <div className="flex items-center">
                      <span className="text-lg font-bold text-primary">{unit.price}</span>
                      <span className="text-gray-500 text-xs mr-1">جنيه / شهر</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {unit.amenities.slice(0, 3).map((amenity: string) => (
                      <span key={amenity} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
                        {amenity === "wifi" ? "واي فاي" : 
                         amenity === "ac" ? "تكييف" : 
                         amenity === "kitchen" ? "مطبخ" : 
                         amenity === "laundry" ? "غسالة" : 
                         amenity === "study" ? "مكان للدراسة" : amenity}
                      </span>
                    ))}
                    {unit.amenities.length > 3 && (
                      <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
                        +{unit.amenities.length - 3}
                      </span>
                    )}
                  </div>
                  <Link 
                    href={`/housing-details?id=${unit.id}`}
                    className="w-full block bg-primary text-white py-2 rounded-md hover:bg-primary-dark transition text-center"
                    onClick={(e) => e.stopPropagation()}
                  >
                    عرض التفاصيل والحجز
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full p-8 text-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-300 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-xl font-medium text-gray-700 mb-2">لا توجد نتائج</h3>
              <p className="text-gray-500 mb-4">
                لم يتم العثور على وحدات سكنية تطابق معايير البحث الخاصة بك
              </p>
              <button 
                onClick={() => handleFilterChange(defaultFilters)}
                className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark transition"
              >
                إعادة ضبط الفلاتر
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
} 