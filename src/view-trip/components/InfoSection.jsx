import React from 'react';

function InfoSection({ trip }) {
  if (!trip?.destination) return null;

  const { country, city, countryData } = trip.destination;

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            رحلتك إلى {city}
          </h1>
          <p className="text-gray-600 mt-2">
            {country}
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          {trip.budget && (
            <div className="bg-gray-50 px-4 py-2 rounded-lg">
              <span className="text-sm text-gray-600">الميزانية</span>
              <p className="font-semibold text-gray-900">{trip.budget}</p>
            </div>
          )}

          {trip.travelList?.length > 0 && (
            <div className="bg-gray-50 px-4 py-2 rounded-lg">
              <span className="text-sm text-gray-600">قائمة السفر</span>
              <p className="font-semibold text-gray-900">
                {trip.travelList.join(', ')}
              </p>
            </div>
          )}
        </div>
      </div>

      {countryData && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            معلومات عن الوجهة
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium text-gray-900">المدن الرئيسية</h3>
              <ul className="mt-2 space-y-1">
                {countryData.cities.map(city => (
                  <li key={city.name} className="text-gray-600">
                    {city.name}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium text-gray-900">أنواع السياحة</h3>
              <ul className="mt-2 space-y-1">
                {Array.from(new Set(countryData.cities.flatMap(city => 
                  city.attractions.map(attr => attr.type)
                ))).map(type => (
                  <li key={type} className="text-gray-600">
                    {type}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium text-gray-900">عدد المعالم السياحية</h3>
              <p className="mt-2 text-2xl font-bold text-primary">
                {countryData.cities.reduce((total, city) => 
                  total + city.attractions.length, 0
                )}
              </p>
              <p className="text-sm text-gray-600">معلم سياحي</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default InfoSection;
