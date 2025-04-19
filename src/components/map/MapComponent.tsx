"use client";

import { useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup, ZoomControl, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { HousingUnit } from "./HousingUnitDetail";

// Set map view component
function SetMapView({ center, zoom }: { center: [number, number], zoom: number }) {
  const map = useMap();
  const initializedRef = useRef(false);
  
  useEffect(() => {
    if (!initializedRef.current) {
      map.setView(center, zoom);
      initializedRef.current = true;
      return;
    }
    
    map.flyTo(center, zoom, {
      animate: true,
      duration: 0.8,
    });
  }, [center, zoom, map]);
  
  return null;
}

// Custom user location control
function LocationButton() {
  const map = useMap();
  
  const handleClick = () => {
    map.locate({ setView: true, maxZoom: 16 });
  };
  
  return (
    <div className="leaflet-bottom leaflet-left" style={{ marginBottom: "80px", marginLeft: "10px" }}>
      <div className="leaflet-control leaflet-bar">
        <button 
          onClick={handleClick}
          className="bg-white w-9 h-9 flex items-center justify-center rounded shadow hover:bg-gray-100"
          title="حدد موقعي"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </button>
      </div>
    </div>
  );
}

// Custom marker icon based on type and gender
const getCustomIcon = (type: string, gender: string) => {
  // Base icon styles
  const baseIcon = {
    iconSize: [25, 41] as [number, number],
    iconAnchor: [12, 41] as [number, number],
    popupAnchor: [1, -34] as [number, number],
    shadowSize: [41, 41] as [number, number],
    shadowAnchor: [12, 41] as [number, number],
  };
  
  // Determine color based on gender
  let iconColor = 'blue'; // Default color
  
  // Custom color markers based on gender
  if (gender === 'female') {
    iconColor = 'red'; // Using red instead of pink as it's more reliable
  } else if (gender === 'male') {
    iconColor = 'blue';
  }
  
  // Create and return the custom icon using online URLs
  return new L.Icon({
    ...baseIcon,
    iconUrl: `https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-${iconColor}.png`,
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    className: `housing-marker ${type} ${gender}`,
  });
};

interface MapComponentProps {
  units: HousingUnit[];
  center: [number, number];
  zoom: number;
  onUnitSelect: (unit: HousingUnit) => void;
  selectedUnitId?: string;
}

export default function MapComponent({
  units,
  center,
  zoom,
  onUnitSelect,
  selectedUnitId,
}: MapComponentProps) {
  // Setup leaflet when component mounts
  useEffect(() => {
    // Fix for default icons in leaflet with webpack
    const L2 = L;
    if ((L2.Icon.Default.prototype as any)._getIconUrl === undefined) {
      L2.Icon.Default.mergeOptions({
        iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
        iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
        shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
      });
    }
  }, []);

  return (
    <div className="relative h-full w-full rounded-lg overflow-hidden shadow-md">
      <MapContainer
        center={center}
        zoom={zoom}
        style={{ height: "100%", width: "100%" }}
        zoomControl={false}
        attributionControl={false}
        className="z-0"
      >
        <TileLayer
          attribution='Free Palestine 🇵🇸'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          className="map-tiles"
        />
        
        {/* Custom controls */}
        <ZoomControl position="topright" />
        <LocationButton />
        
        {/* Map view setter */}
        <SetMapView center={center} zoom={zoom} />
        
        {units.map((unit) => (
          <Marker
            key={unit.id}
            position={[unit.lat, unit.lng]}
            icon={getCustomIcon(unit.type, unit.gender)}
            eventHandlers={{
              click: () => onUnitSelect(unit)
            }}
            opacity={selectedUnitId === unit.id ? 1 : 0.8}
          >
            <Popup className="housing-popup">
              <div className="text-center py-1">
                <h3 className="font-bold mb-1">{unit.title}</h3>
                <div className="flex justify-center gap-2 mb-2">
                  <span className={`px-2 py-0.5 rounded-full text-xs ${
                    unit.gender === "male" ? "bg-blue-100 text-blue-800" : 
                    "bg-red-100 text-red-800"
                  }`}>
                    {unit.gender === "male" ? "ذكور" : "إناث"}
                  </span>
                  <span className="bg-gray-100 text-gray-800 px-2 py-0.5 rounded-full text-xs">
                    {unit.type === "apartment" ? "شقة" : unit.type === "room" ? "غرفة" : "سرير"}
                  </span>
                </div>
                <p className="text-primary font-bold">{unit.price} جنيه / الشهر</p>
                <div className="flex justify-between mt-2 gap-2">
                  <button 
                    className="text-sm bg-gray-200 text-gray-700 px-2 py-1 rounded hover:bg-gray-300 transition"
                    onClick={(e) => {
                      e.stopPropagation();
                      onUnitSelect(unit);
                    }}
                  >
                    عرض التفاصيل
                  </button>
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
      
      {/* Map overlay for view toggle and info */}
      <div className="absolute top-3 left-3 z-[1000] bg-white rounded-md shadow-md p-2 flex items-center gap-2">
        <span className="text-sm flex items-center">
          <span className="w-2 h-2 inline-block rounded-full bg-blue-500 ml-1"></span>ذكور
        </span>
        <span className="text-sm flex items-center mr-2">
          <span className="w-2 h-2 inline-block rounded-full bg-red-500 ml-1"></span>إناث
        </span>
      </div>
    </div>
  );
} 