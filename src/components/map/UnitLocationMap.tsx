"use client";

import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, ZoomControl } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { HousingUnit } from "./HousingUnitDetail";

// الحصول على أيقونة مخصصة استنادًا إلى نوع وجنس الوحدة السكنية
const getCustomIcon = (type: string, gender: string) => {
  // أنماط الأيقونة الأساسية
  const baseIcon = {
    iconSize: [25, 41] as [number, number],
    iconAnchor: [12, 41] as [number, number],
    popupAnchor: [1, -34] as [number, number],
    shadowSize: [41, 41] as [number, number],
    shadowAnchor: [12, 41] as [number, number],
  };
  
  // تحديد اللون استنادًا إلى الجنس
  let iconColor = 'blue'; // اللون الافتراضي
  
  // ألوان مؤشرات مخصصة استنادًا إلى الجنس
  if (gender === 'female') {
    iconColor = 'red'; 
  } else if (gender === 'male') {
    iconColor = 'blue';
  }
  
  // إنشاء وإرجاع الأيقونة المخصصة باستخدام روابط عبر الإنترنت
  return new L.Icon({
    ...baseIcon,
    iconUrl: `https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-${iconColor}.png`,
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    className: `housing-marker ${type} ${gender}`,
  });
};

// تعريف واجهة الخصائص
interface UnitLocationMapProps {
  unit: HousingUnit;
  height?: string;
}

// مكون خريطة موقع الوحدة السكنية
export default function UnitLocationMap({ unit, height = "300px" }: UnitLocationMapProps) {
  // إعداد Leaflet عند تحميل المكون
  useEffect(() => {
    // إصلاح للأيقونات الافتراضية في Leaflet مع Webpack
    const L2 = L;
    if ((L2.Icon.Default.prototype as any)._getIconUrl === undefined) {
      L2.Icon.Default.mergeOptions({
        iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
        iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
        shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
      });
    }
  }, []);

  // مركز الخريطة هو موقع الوحدة السكنية
  const center: [number, number] = [unit.lat, unit.lng];
  const zoom = 15;

  return (
    <div className="relative h-full w-full rounded-lg overflow-hidden">
      <MapContainer
        center={center}
        zoom={zoom}
        style={{ height: height, width: "100%" }}
        zoomControl={false}
        attributionControl={false}
        className="z-0"
      >
        <TileLayer
          attribution='Free Palestine 🇵🇸'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          className="map-tiles"
        />
        
        {/* أدوات التحكم المخصصة */}
        <ZoomControl position="topright" />
        
        {/* مؤشر الوحدة السكنية */}
        <Marker
          position={center}
          icon={getCustomIcon(unit.type, unit.gender)}
        >
          <Popup className="housing-popup">
            <div className="text-center py-1">
              <h3 className="font-bold mb-1">{unit.title}</h3>
              <p className="text-primary font-bold">{unit.price} جنيه / الشهر</p>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
} 