import React from 'react';
import { FiDollarSign, FiCheck } from 'react-icons/fi';

const budgetOptions = [
  {
    id: 'economy',
    title: 'اقتصادية',
    description: 'مناسبة للمسافرين الذين يبحثون عن تجربة مميزة بتكلفة معقولة',
    value: '1000-3000 دولار'
  },
  {
    id: 'medium',
    title: 'متوسطة',
    description: 'تجربة مريحة مع خيارات متنوعة للإقامة والأنشطة',
    value: '3000-7000 دولار'
  },
  {
    id: 'luxury',
    title: 'فاخرة',
    description: 'تجربة استثنائية مع أفضل خيارات الإقامة والخدمات',
    value: '7000+ دولار'
  }
];

function SelectBudgetOptions({ onSelect, selectedBudget }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {budgetOptions.map((option) => (
        <button
          key={option.id}
          onClick={() => onSelect(option.value)}
          className={`relative p-6 rounded-xl border-2 transition-all duration-300 text-right ${
            selectedBudget === option.value
              ? 'border-primary bg-primary/5'
              : 'border-gray-200 hover:border-primary/50'
          }`}
        >
          {selectedBudget === option.value && (
            <div className="absolute top-4 left-4 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center">
              <FiCheck className="w-4 h-4" />
            </div>
          )}
          <div className="mb-4">
            <FiDollarSign className={`w-8 h-8 ${
              selectedBudget === option.value ? 'text-primary' : 'text-gray-400'
            }`} />
          </div>
          <h3 className="text-lg font-semibold mb-2">{option.title}</h3>
          <p className="text-sm text-gray-600 mb-3">{option.description}</p>
          <span className="inline-block text-sm font-medium bg-gray-100 px-3 py-1 rounded-full">
            {option.value}
          </span>
        </button>
      ))}
    </div>
  );
}

export default SelectBudgetOptions;
