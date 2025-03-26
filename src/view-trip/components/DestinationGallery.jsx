import React from 'react';

function DestinationGallery({ destination }) {
  if (!destination?.countryData) return null;

  const allImages = destination.countryData.cities.flatMap(city => 
    city.attractions.map(attr => ({
      image: attr.image,
      name: attr.name,
      city: city.name
    }))
  );

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">معرض الصور</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {allImages.map((item, index) => (
          <div
            key={index}
            className="group relative aspect-square rounded-lg overflow-hidden cursor-pointer"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/400x400?text=صورة+غير+متوفرة';
              }}
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 right-0 p-3 text-white">
                <h3 className="text-sm font-medium">{item.name}</h3>
                <p className="text-xs opacity-75">{item.city}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DestinationGallery;
