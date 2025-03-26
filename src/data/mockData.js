// بيانات ثابتة للأماكن
export const MOCK_PLACES = [
  {
    id: 1,
    displayName: {
      text: "برج خليفة",
      languageCode: "ar"
    },
    photos: [
      {
        name: "burj-khalifa-1",
        url: "/places/burj-khalifa-1.jpg"
      }
    ],
    location: "دبي، الإمارات العربية المتحدة",
    rating: 4.8,
    description: "أطول مبنى في العالم وأيقونة معمارية رائعة"
  },
  {
    id: 2,
    displayName: {
      text: "المسجد الأقصى",
      languageCode: "ar"
    },
    photos: [
      {
        name: "al-aqsa-1",
        url: "/places/al-aqsa-1.jpg"
      }
    ],
    location: "القدس، فلسطين",
    rating: 4.9,
    description: "ثالث الحرمين الشريفين وأولى القبلتين"
  },
  {
    id: 3,
    displayName: {
      text: "الأهرامات",
      languageCode: "ar"
    },
    photos: [
      {
        name: "pyramids-1",
        url: "/places/pyramids-1.jpg"
      }
    ],
    location: "الجيزة، مصر",
    rating: 4.7,
    description: "إحدى عجائب الدنيا السبع القديمة"
  }
];

// بيانات ثابتة للفنادق
export const MOCK_HOTELS = [
  {
    id: 1,
    name: "فندق برج العرب",
    location: "دبي، الإمارات العربية المتحدة",
    rating: 5,
    price: "2000$",
    photos: [
      {
        url: "/hotels/burj-al-arab-1.jpg"
      }
    ],
    description: "فندق فاخر من فئة 7 نجوم"
  },
  {
    id: 2,
    name: "فندق قصر الإمارات",
    location: "أبو ظبي، الإمارات العربية المتحدة",
    rating: 5,
    price: "1500$",
    photos: [
      {
        url: "/hotels/emirates-palace-1.jpg"
      }
    ],
    description: "قصر ملكي تم تحويله إلى فندق فاخر"
  }
];

// بيانات ثابتة للرحلات
export const MOCK_TRIPS = [
  {
    id: 1,
    title: "رحلة إلى دبي",
    description: "استكشف روعة دبي وسحرها",
    duration: "7 أيام",
    totalCost: "5000$",
    places: [MOCK_PLACES[0]],
    hotels: [MOCK_HOTELS[0]],
    coverImage: "/trips/dubai-trip-1.jpg"
  },
  {
    id: 2,
    title: "جولة في القدس",
    description: "زيارة الأماكن المقدسة والتاريخية",
    duration: "5 أيام",
    totalCost: "3000$",
    places: [MOCK_PLACES[1]],
    hotels: [MOCK_HOTELS[1]],
    coverImage: "/trips/jerusalem-trip-1.jpg"
  }
];
