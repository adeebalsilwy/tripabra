import React from 'react';
import PlaceCardItem from './PlaceCardItem';

function TripPlace({ places }) {
  // Create a simple itinerary structure from places
  const itinerary = places ? [
    {
      day: 1,
      plan: places.slice(0, Math.min(3, places.length))
    },
    {
      day: 2,
      plan: places.slice(Math.min(3, places.length))
    }
  ] : [];

  return (
    <div className="mb-16">
      <div className="text-right mb-8">
        <h2 className="text-2xl font-bold mb-3">
          الأماكن المقترحة لرحلتك 🗺️
        </h2>
        <p className="text-gray-600">
          اخترنا لك أفضل الأماكن التي تناسب اهتماماتك وتفضيلاتك
        </p>
      </div>

      <div className="space-y-8">
        {itinerary.map((item, index) => (
          item.plan.length > 0 && (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold mb-6 text-right">
                اليوم {item.day} 📅
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {item.plan.map((place, placeIndex) => (
                  <div key={placeIndex} className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                    <div className="aspect-w-16 aspect-h-9 mb-4">
                      <img
                        src={place.photos[0]?.url || 'https://via.placeholder.com/400x300?text=صورة+غير+متوفرة'}
                        alt={place.displayName.text}
                        className="w-full h-48 object-cover rounded-lg"
                        onError={(e) => {
                          e.target.src = 'https://via.placeholder.com/400x300?text=صورة+غير+متوفرة';
                        }}
                      />
                    </div>
                    <h4 className="text-lg font-semibold mb-2">{place.displayName.text}</h4>
                    <p className="text-gray-600 text-sm mb-3">{place.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{place.location}</span>
                      <div className="flex items-center">
                        <span className="text-yellow-500 mr-1">⭐</span>
                        <span className="text-sm font-medium">{place.rating}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )
        ))}
      </div>
    </div>
  );
}

export default TripPlace;
