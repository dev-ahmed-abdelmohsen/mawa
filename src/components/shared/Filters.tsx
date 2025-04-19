"use client";

import { useState, useEffect } from "react";

// Define the filter options
export type HousingFilter = {
  type: string[]; // شقة, غرفة, سرير
  gender: string | null; // ذكور, إناث, null (للكل)
  priceRange: [number, number]; // [min, max]
  amenities: string[];
};

// Define the props for the Filters component
interface FiltersProps {
  onFilterChange: (filters: HousingFilter) => void;
  initialFilters?: Partial<HousingFilter>;
  className?: string;
}

// Default filters
const defaultFilters: HousingFilter = {
  type: [],
  gender: null,
  priceRange: [0, 10000],
  amenities: [],
};

export default function Filters({ onFilterChange, initialFilters, className = "" }: FiltersProps) {
  // Merge initial filters with default filters
  const [filters, setFilters] = useState<HousingFilter>({
    ...defaultFilters,
    ...initialFilters,
  });

  // إضافة useEffect للاستجابة للتغييرات في initialFilters
  useEffect(() => {
    if (initialFilters) {
      setFilters(prevFilters => ({
        ...prevFilters, 
        ...initialFilters
      }));
    }
  }, [initialFilters]);

  // Available housing types
  const housingTypes = [
    { id: "apartment", label: "شقة" },
    { id: "room", label: "غرفة" },
    { id: "bed", label: "سرير" },
  ];

  // Available amenities
  const availableAmenities = [
    { id: "wifi", label: "واي فاي" },
    { id: "ac", label: "تكييف" },
    { id: "kitchen", label: "مطبخ" },
    { id: "laundry", label: "غسالة" },
    { id: "study", label: "مكان للدراسة" },
  ];

  // Handle type changes
  const handleTypeChange = (type: string) => {
    const newTypes = filters.type.includes(type)
      ? filters.type.filter(t => t !== type)
      : [...filters.type, type];
    
    const newFilters = { ...filters, type: newTypes };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  // Handle gender changes
  const handleGenderChange = (gender: string | null) => {
    const newFilters = { ...filters, gender };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  // Handle price range changes
  const handlePriceRangeChange = (e: React.ChangeEvent<HTMLInputElement>, bound: 'min' | 'max') => {
    const value = parseInt(e.target.value);
    const [min, max] = filters.priceRange;
    
    let newRange: [number, number];
    if (bound === 'min') {
      newRange = [value, max];
    } else {
      newRange = [min, value];
    }
    
    const newFilters = { ...filters, priceRange: newRange };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  // Handle amenity changes
  const handleAmenityChange = (amenity: string) => {
    const newAmenities = filters.amenities.includes(amenity)
      ? filters.amenities.filter(a => a !== amenity)
      : [...filters.amenities, amenity];
    
    const newFilters = { ...filters, amenities: newAmenities };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  // Reset all filters
  const resetFilters = () => {
    setFilters(defaultFilters);
    onFilterChange(defaultFilters);
  };

  return (
    <div className={`bg-white rounded-lg shadow-md p-4 ${className}`}>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-bold">الفلاتر</h3>
        <button
          onClick={resetFilters}
          className="text-primary text-sm hover:underline"
        >
          إعادة ضبط
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-4">
        {/* Housing Type Filter */}
        <div>
          <h4 className="font-medium mb-2">نوع السكن</h4>
          <div className="flex flex-wrap gap-2">
            {housingTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => handleTypeChange(type.id)}
                className={`px-3 py-1 rounded-full text-sm ${
                  filters.type.includes(type.id)
                    ? "bg-primary text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {type.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gender Filter */}
        <div>
          <h4 className="font-medium mb-2">النوع</h4>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => handleGenderChange(null)}
              className={`px-3 py-1 rounded-full text-sm ${
                filters.gender === null
                  ? "bg-primary text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              الكل
            </button>
            <button
              onClick={() => handleGenderChange("male")}
              className={`px-3 py-1 rounded-full text-sm ${
                filters.gender === "male"
                  ? "bg-primary text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              ذكور
            </button>
            <button
              onClick={() => handleGenderChange("female")}
              className={`px-3 py-1 rounded-full text-sm ${
                filters.gender === "female"
                  ? "bg-primary text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              إناث
            </button>
          </div>
        </div>

        {/* Price Range Filter */}
        <div>
          <h4 className="font-medium mb-2">نطاق السعر</h4>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-500">
              {filters.priceRange[0]} جنيه
            </span>
            <span className="text-sm text-gray-500">
              {filters.priceRange[1]} جنيه
            </span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <input
                type="number"
                min="0"
                max={filters.priceRange[1]}
                value={filters.priceRange[0]}
                onChange={(e) => handlePriceRangeChange(e, 'min')}
                className="w-full border rounded-md p-2 text-sm"
                placeholder="من"
              />
            </div>
            <div>
              <input
                type="number"
                min={filters.priceRange[0]}
                value={filters.priceRange[1]}
                onChange={(e) => handlePriceRangeChange(e, 'max')}
                className="w-full border rounded-md p-2 text-sm"
                placeholder="إلى"
              />
            </div>
          </div>
        </div>

        {/* Amenities Filter */}
        <div>
          <h4 className="font-medium mb-2">المرافق</h4>
          <div className="grid grid-cols-2 gap-1">
            {availableAmenities.map((amenity) => (
              <div key={amenity.id} className="flex items-center">
                <input
                  type="checkbox"
                  id={amenity.id}
                  checked={filters.amenities.includes(amenity.id)}
                  onChange={() => handleAmenityChange(amenity.id)}
                  className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                />
                <label htmlFor={amenity.id} className="mr-2 text-sm text-gray-700">
                  {amenity.label}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 