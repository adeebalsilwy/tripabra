import React, { useState } from 'react';
import { destinations } from '../../data/destinations';
import { FiMapPin, FiCheck } from 'react-icons/fi';

function DestinationSelector({ onSelect }) {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedAttractions, setSelectedAttractions] = useState([]);

  const handleCountryChange = (country) => {
    setSelectedCountry(country);
    setSelectedCity('');
    setSelectedAttractions([]);
    if (country) {
      onSelect({
        country,
        city: '',
        attractions: [],
        countryData: destinations[country]
      });
    }
  };

  const handleCityChange = (city) => {
    setSelectedCity(city);
    setSelectedAttractions([]);
    if (city && selectedCountry) {
      const cityData = destinations[selectedCountry].cities.find(c => c.name === city);
      onSelect({
        country: selectedCountry,
        city,
        attractions: [],
        countryData: destinations[selectedCountry]
      });
    }
  };

  const toggleAttraction = (attraction) => {
    const newAttractions = selectedAttractions.includes(attraction)
      ? selectedAttractions.filter(a => a !== attraction)
      : [...selectedAttractions, attraction];
    
    setSelectedAttractions(newAttractions);
    
    if (selectedCity && selectedCountry) {
      const cityData = destinations[selectedCountry].cities.find(c => c.name === selectedCity);
      onSelect({
        country: selectedCountry,
        city: selectedCity,
        attractions: newAttractions,
        countryData: destinations[selectedCountry]
      });
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* اختيار الدولة */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            اختر الدولة
          </label>
          <div className="relative">
            <select
              value={selectedCountry}
              onChange={(e) => handleCountryChange(e.target.value)}
              className="w-full p-3 pr-10 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-primary/20 focus:border-primary"
            >
              <option value="">اختر الدولة</option>
              {Object.keys(destinations).map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
            <FiMapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        {/* اختيار المدينة */}
        {selectedCountry && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              اختر المدينة
            </label>
            <div className="relative">
              <select
                value={selectedCity}
                onChange={(e) => handleCityChange(e.target.value)}
                className="w-full p-3 pr-10 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-primary/20 focus:border-primary"
              >
                <option value="">اختر المدينة</option>
                {destinations[selectedCountry].cities.map((city) => (
                  <option key={city.name} value={city.name}>
                    {city.name}
                  </option>
                ))}
              </select>
              <FiMapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>
          </div>
        )}
      </div>

      {/* عرض المعالم السياحية */}
      {selectedCity && (
        <div className="mt-8">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            المعالم السياحية المشهورة في {selectedCity}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {destinations[selectedCountry].cities
              .find(c => c.name === selectedCity)
              .attractions.map((attraction) => {
                const isSelected = selectedAttractions.includes(attraction);
                return (
                  <button
                    key={attraction.name}
                    onClick={() => toggleAttraction(attraction)}
                    className={`relative group overflow-hidden rounded-xl transition-all duration-300 ${
                      isSelected ? 'ring-2 ring-primary' : ''
                    }`}
                  >
                    <div className="relative h-48">
                      <img
                        src={attraction.image}
                        alt={attraction.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          e.target.src = 'https://images.unsplash.com/photo-1582650625119-3a31f8fa2ee8?auto=format&fit=crop&w=800';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                      
                      {/* علامة التحديد */}
                      {isSelected && (
                        <div className="absolute top-2 left-2 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center">
                          <FiCheck className="w-5 h-5" />
                        </div>
                      )}
                      
                      {/* معلومات المعلم */}
                      <div className="absolute bottom-0 right-0 p-4 text-white w-full">
                        <h4 className="font-semibold text-lg mb-1">{attraction.name}</h4>
                        <p className="text-sm opacity-90 line-clamp-2">{attraction.description}</p>
                        <span className="inline-block mt-2 text-xs bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                          {attraction.type}
                        </span>
                      </div>
                    </div>
                  </button>
                );
              })}
          </div>
        </div>
      )}
    </div>
  );
}

export default DestinationSelector;
