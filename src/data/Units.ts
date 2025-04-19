import { HousingUnit } from "@/components/map/HousingUnitDetail";

export const mockHousingUnits: HousingUnit[] = [
    {
      id: "1",
      title: "شقة فاخرة بالقرب من جامعة القاهرة",
      type: "apartment",
      gender: "male",
      price: 2500,
      images: [
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXBhcnRtZW50fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGFwYXJ0bWVudHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
      ],
      address: "شارع الجامعة، الجيزة",
      description: "شقة فاخرة مفروشة بالكامل بالقرب من جامعة القاهرة. تتكون من 3 غرف وصالة ومطبخ وحمامين.",
      amenities: ["wifi", "ac", "kitchen", "laundry"],
      lat: 30.0258,
      lng: 31.2123,
      university: "جامعة القاهرة",
      distance: 0.8,
      available: true,
      features: {
        area: 120,
        beds: 3,
        baths: 2
      }
    },
    {
      id: "2",
      title: "غرفة مشتركة في المعادي",
      type: "room",
      gender: "female",
      price: 1200,
      images: [
        "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRvcm0lMjByb29tfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmVkcm9vbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1591079381491-57fbe04d8eed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGRvcm18ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
      ],
      address: "شارع 9، المعادي، القاهرة",
      description: "غرفة مشتركة للطالبات في شقة مشتركة. الغرفة مفروشة بالكامل وتطل على حديقة.",
      amenities: ["wifi", "ac", "study"],
      lat: 29.9626,
      lng: 31.2497,
      university: "الجامعة الأمريكية",
      distance: 2.5,
      available: true
    },
    {
      id: "3",
      title: "سرير في غرفة مشتركة بمدينة نصر",
      type: "bed",
      gender: "male",
      price: 800,
      images: [
        "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9ybXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1578898887932-7b80bfe0d708?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZG9ybXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
      ],
      address: "الحي العاشر، مدينة نصر، القاهرة",
      description: "سرير في غرفة مشتركة للطلاب بمدينة نصر. الغرفة تتسع لـ 4 أشخاص ومجهزة بمكاتب للدراسة.",
      amenities: ["wifi", "study"],
      lat: 30.0645,
      lng: 31.2788,
      university: "جامعة عين شمس",
      distance: 1.2,
      available: true
    },
    {
      id: "4",
      title: "شقة كاملة بالمهندسين",
      type: "apartment",
      gender: "female",
      price: 3000,
      images: [
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGFwYXJ0bWVudHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1540518614846-7eded433c457?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXBhcnRtZW50JTIwaW50ZXJpb3J8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXBhcnRtZW50JTIwaW50ZXJpb3J8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGFwYXJ0bWVudCUyMGtpdGNoZW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
      ],
      address: "شارع جامعة الدول العربية، المهندسين، الجيزة",
      description: "شقة فاخرة للطالبات بالمهندسين. تتكون من غرفتين وصالة ومطبخ وحمام. مفروشة بالكامل.",
      amenities: ["wifi", "ac", "kitchen", "laundry", "study"],
      lat: 30.0484,
      lng: 31.2003,
      university: "جامعة القاهرة",
      distance: 3.0,
      available: false,
      features: {
        area: 95,
        beds: 2,
        baths: 1
      }
    },
    {
      id: "5",
      title: "شقة طلابية في وسط البلد",
      type: "apartment",
      gender: "male",
      price: 2200,
      images: [
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXBhcnRtZW50fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGFwYXJ0bWVudHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
      ],
      address: "شارع طلعت حرب، وسط البلد، القاهرة",
      description: "شقة طلابية في قلب وسط البلد. مفروشة بالكامل وقريبة من المواصلات.",
      amenities: ["wifi", "ac", "kitchen"],
      lat: 30.044,
      lng: 31.235,
      university: "جامعة القاهرة",
      distance: 4.5,
      available: true,
      features: {
        area: 85,
        beds: 3,
        baths: 1
      }
    },
    {
      id: "6",
      title: "غرفة خاصة في التجمع الخامس",
      type: "room",
      gender: "female",
      price: 1800,
      images: [
        "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmVkcm9vbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmVkcm9vbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJlZHJvb218ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
      ],
      address: "التجمع الخامس، القاهرة الجديدة",
      description: "غرفة خاصة في شقة مشتركة بالتجمع الخامس. الغرفة واسعة مع سرير مزدوج ومكتب للدراسة.",
      amenities: ["wifi", "ac", "kitchen", "laundry", "study"],
      lat: 30.007,
      lng: 31.435,
      university: "الجامعة الأمريكية",
      distance: 6.0,
      available: true
    }
  ];
  