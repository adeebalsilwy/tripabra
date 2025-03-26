import React from 'react';
import HotelCardItem from './HotelCardItem';

function Hotels({ trip }) {
  return (
    <div className="mb-16">
      <div className="text-right mb-8">
        <h2 className="text-2xl font-bold mb-3">
          خيارات الإقامة المقترحة 🏨
        </h2>
        <p className="text-gray-600">
          اخترنا لك أفضل الفنادق التي تناسب ميزانيتك وتفضيلاتك
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {trip?.hotelOptions?.map((hotel, index) => (
          <HotelCardItem key={index} item={hotel} />
        ))}
      </div>
    </div>
  );
}

export default Hotels;