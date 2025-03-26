import { MOCK_PLACES, MOCK_HOTELS } from '../data/mockData';
import { generateTripSuggestion } from '../data/tripSuggestions';

// استبدال استدعاءات API بدوال تعيد بيانات ثابتة
export const GetPlaceDetails = (searchData) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const filteredPlaces = MOCK_PLACES.filter(place => 
        place.displayName.text.toLowerCase().includes(searchData.textQuery.toLowerCase())
      );
      resolve({ data: { places: filteredPlaces } });
    }, 500);
  });
};

export const GetHotelDetails = (location) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const hotels = MOCK_HOTELS.filter(hotel => 
        hotel.location.toLowerCase().includes(location.toLowerCase())
      );
      resolve({ data: { hotels } });
    }, 500);
  });
};

export const GenerateTrip = (location, totalDays, traveler, budget) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const tripPlan = generateTripSuggestion(location, totalDays, traveler, budget);
      resolve({ data: tripPlan });
    }, 1500);
  });
};

// استبدال URL الصور بمسار ثابت
export const PHOTO_REF_URL = "/places/default.jpg";