import React from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { Link } from 'react-router-dom';

function HotelCardItem({ item }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="relative h-[200px]">
        <img
          src={item?.hotelImageUrl || '/vara.webp'}
          alt={item?.hotelName}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = '/vara.webp';
          }}
        />
        <div className="absolute top-3 left-3 bg-white/90 px-3 py-1 rounded-full text-sm font-medium">
          {item?.price}
        </div>
      </div>

      <div className="p-4 text-right">
        <h3 className="font-bold text-lg mb-2">{item?.hotelName}</h3>
        <p className="text-gray-600 text-sm mb-4">{item?.description}</p>
        
        <div className="flex items-center justify-between">
          <Link 
            to={'https://www.google.com/maps/search/?api=1&query=' + item?.hotelAddress}
            target='_blank'
            className="bg-primary text-white p-2 rounded-lg hover:bg-primary/90 transition-colors"
          >
            <FaLocationDot />
          </Link>
          <div className="text-yellow-500">⭐ {item?.rating}</div>
        </div>
      </div>
    </div>
  );
}

export default HotelCardItem;
