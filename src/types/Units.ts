
export type HousingUnit = {
    id: string;
    title: string;
    type: "apartment" | "room" | "bed";
    gender: "male" | "female" | "mixed";
    price: number;
    rating: number;
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
  