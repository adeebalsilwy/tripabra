// بيانات ثابتة لاقتراحات الرحلات
export const generateTripSuggestion = (location, totalDays, traveler, budget) => {
  // نموذج لرحلة مقترحة
  return {
    hotelOptions: [
      {
        hotelName: "فندق برج العرب",
        hotelAddress: "دبي، الإمارات العربية المتحدة",
        price: budget === "Cheap" ? "$100/ليلة" : "$500/ليلة",
        hotelImageUrl: "/hotels/burj-al-arab.jpg",
        geoCoordinates: "25.1412° N, 55.1853° E",
        rating: "5 نجوم",
        description: "فندق فاخر يقع على جزيرة اصطناعية"
      },
      {
        hotelName: "فندق قصر الإمارات",
        hotelAddress: "أبو ظبي، الإمارات العربية المتحدة",
        price: budget === "Cheap" ? "$80/ليلة" : "$400/ليلة",
        hotelImageUrl: "/hotels/emirates-palace.jpg",
        geoCoordinates: "24.4615° N, 54.3166° E",
        rating: "5 نجوم",
        description: "قصر تم تحويله إلى فندق فاخر"
      }
    ],
    itinerary: [
      {
        day: 1,
        plan: [
          {
            placeName: "برج خليفة",
            placeDetails: "أطول مبنى في العالم مع إطلالات مذهلة",
            placeImageUrl: "/places/burj-khalifa.jpg",
            geoCoordinates: "25.1972° N, 55.2744° E",
            ticketPricing: budget === "Cheap" ? "$30" : "$100",
            rating: "4.8",
            time: "صباحاً (10:00 - 12:00)"
          },
          {
            placeName: "دبي مول",
            placeDetails: "أكبر مركز تسوق في العالم",
            placeImageUrl: "/places/dubai-mall.jpg",
            geoCoordinates: "25.1980° N, 55.2795° E",
            ticketPricing: "مجاناً",
            rating: "4.7",
            time: "مساءً (16:00 - 20:00)"
          }
        ]
      },
      {
        day: 2,
        plan: [
          {
            placeName: "المسجد الكبير",
            placeDetails: "تحفة معمارية رائعة",
            placeImageUrl: "/places/grand-mosque.jpg",
            geoCoordinates: "24.4128° N, 54.4750° E",
            ticketPricing: "مجاناً",
            rating: "4.9",
            time: "صباحاً (09:00 - 11:00)"
          }
        ]
      }
    ]
  };
};
