import React, { useEffect, useState } from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { Link } from 'react-router-dom';

function PlaceCardItem({ place }) {
    const [photoUrl, setPhotoUrl] = useState('');

    return (
        <div>
            <Link to={'https://www.google.com/maps/search/?api=1&query=' + place?.placeName + "," + place?.geoCoordinates} target='_blank'>
                <div className='my-4 bg-gray-50 p-2 gap-2 border rounded-lg flex flex-cols-2 hover:scale-105 transition-all hover:shadow-md cursor-pointer'>
                    <div className='py-2 mx-3'>
                        <img 
                            src='/vara.webp'
                            className='w-[140px] h-[140px] rounded-xl object-cover' 
                            alt={place?.placeName}
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = '/vara.webp';
                            }}
                        />
                    </div>
                    <div className="flex-1">
                        <h2 className='font-medium text-sm text-orange-600'>{place?.time}</h2>
                        <h2 className='font-bold'>{place?.placeName}</h2>
                        <p className='text-sm text-gray-500'>{place?.placeDetails}</p>
                        <h2 className='text-blue-700 text-sm'>{place?.ticketPricing}</h2>
                        <h2 className='text-sm text-yellow-500'>⭐{place?.rating}</h2>
                    </div>
                    <div className='mt-36'>
                        <button className='bg-primary text-white p-2 rounded-lg'>
                            <FaLocationDot />
                        </button>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default PlaceCardItem;
