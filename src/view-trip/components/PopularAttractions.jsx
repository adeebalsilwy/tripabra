import React from 'react';

function PopularAttractions({ attractions }) {
  if (!attractions?.length) return null;

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">المعالم السياحية المشهورة</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {attractions.map((attraction) => (
          <div
            key={attraction.name}
            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="relative h-48">
              <img
                src={attraction.image}
                alt={attraction.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/400x300?text=صورة+غير+متوفرة';
                }}
              />
              <div className="absolute top-2 left-2">
                <span className="inline-block px-2 py-1 text-xs font-medium bg-white/90 text-gray-800 rounded">
                  {attraction.type}
                </span>
              </div>
            </div>
            
            <div className="p-4">
              <h3 className="font-semibold text-lg text-gray-900 mb-2">
                {attraction.name}
              </h3>
              <p className="text-gray-600 text-sm">
                {attraction.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PopularAttractions;
