import React from 'react';
import { FiCheck, FiShoppingBag, FiCompass, FiCoffee, FiCamera, FiSun, FiHeart } from 'react-icons/fi';

const travelOptions = [
  {
    id: 'shopping',
    title: 'التسوق والترفيه',
    description: 'زيارة المولات والأسواق الشهيرة',
    icon: FiShoppingBag
  },
  {
    id: 'adventure',
    title: 'المغامرات والإثارة',
    description: 'تجارب مثيرة ونشاطات حماسية',
    icon: FiCompass
  },
  {
    id: 'culture',
    title: 'الثقافة والتراث',
    description: 'زيارة المتاحف والمواقع التاريخية',
    icon: FiCoffee
  },
  {
    id: 'photography',
    title: 'التصوير والمناظر',
    description: 'أفضل المواقع لالتقاط الصور التذكارية',
    icon: FiCamera
  },
  {
    id: 'relaxation',
    title: 'الاسترخاء والرفاهية',
    description: 'تجارب السبا والمنتجعات الفاخرة',
    icon: FiSun
  },
  {
    id: 'food',
    title: 'تجربة الطعام',
    description: 'تذوق أشهر المأكولات المحلية',
    icon: FiHeart
  }
];

function SelectTravelList({ onSelect, selectedItems = [] }) {
  const toggleItem = (id) => {
    const newSelection = selectedItems.includes(id)
      ? selectedItems.filter(item => item !== id)
      : [...selectedItems, id];
    onSelect(newSelection);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {travelOptions.map((option) => {
        const Icon = option.icon;
        const isSelected = selectedItems.includes(option.id);
        
        return (
          <button
            key={option.id}
            onClick={() => toggleItem(option.id)}
            className={`relative p-6 rounded-xl border-2 transition-all duration-300 text-right ${
              isSelected
                ? 'border-primary bg-primary/5'
                : 'border-gray-200 hover:border-primary/50'
            }`}
          >
            {isSelected && (
              <div className="absolute top-4 right-4 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center">
                <FiCheck className="w-4 h-4" />
              </div>
            )}
            
            <div className="mb-4">
              <Icon className={`w-8 h-8 ${
                isSelected ? 'text-primary' : 'text-gray-400'
              }`} />
            </div>
            
            <h3 className="text-lg font-semibold mb-2">{option.title}</h3>
            <p className="text-sm text-gray-600">
              {option.description}
            </p>
          </button>
        );
      })}
    </div>
  );
}

export default SelectTravelList;
