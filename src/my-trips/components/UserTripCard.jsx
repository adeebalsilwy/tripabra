import React from 'react';
import { Link } from 'react-router-dom';
import { FiMapPin, FiCalendar } from 'react-icons/fi';

function UserTripCard({ trip }) {
  // استخدام صورة المعلم السياحي الأول كصورة للرحلة
  const coverImage = trip.destination?.attractions?.[0]?.image || 
                    'https://via.placeholder.com/400x300?text=صورة+غير+متوفرة';
  
  // تحضير عنوان الرحلة
  const tripTitle = `رحلة إلى ${trip.destination?.city || 'وجهة غير معروفة'}`;
  
  // تحضير وصف الرحلة
  const tripDescription = trip.budget ? 
    `الميزانية: ${trip.budget}` : 
    'لم يتم تحديد الميزانية';

  // تحضير عدد المعالم السياحية
  const attractionsCount = trip.destination?.attractions?.length || 0;
  const attractionsText = `${attractionsCount} ${attractionsCount === 1 ? 'معلم سياحي' : 'معالم سياحية'}`;

  return (
    <Link to={`/view-trip/${trip.id}`} className="block group">
      <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
        <div className="relative h-[250px]">
          <img 
            src={coverImage}
            alt={tripTitle}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/400x300?text=صورة+غير+متوفرة';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
          
          {/* معلومات الرحلة */}
          <div className="absolute bottom-0 right-0 p-4 text-white w-full">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <FiMapPin className="w-4 h-4" />
                <span className="text-sm opacity-90">{trip.destination?.country || 'غير محدد'}</span>
              </div>
              
              <h2 className="font-bold text-2xl text-shadow">{tripTitle}</h2>
              
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <FiCalendar className="w-4 h-4" />
                  <span className="text-sm">{tripDescription}</span>
                </div>
                <span className="text-xs bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  {attractionsText}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default UserTripCard;
