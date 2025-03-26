import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DestinationSelector from './components/DestinationSelector';
import SelectBudgetOptions from './components/SelectBudgetOptions';
import SelectTravelList from './components/SelectTravelList';
import { FiCheck } from 'react-icons/fi';

function CreateTrip() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [tripData, setTripData] = useState({
    destination: null,
    budget: '',
    travelList: [],
  });

  const handleDestinationSelect = (destination) => {
    setTripData({ ...tripData, destination });
  };

  const handleBudgetSelect = (budget) => {
    setTripData({ ...tripData, budget });
  };

  const handleTravelListSelect = (travelList) => {
    setTripData({ ...tripData, travelList });
  };

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleCreateTrip = () => {
    // حفظ بيانات الرحلة
    const trips = JSON.parse(localStorage.getItem('trips') || '[]');
    const newTrip = { ...tripData, id: Date.now().toString() };
    trips.push(newTrip);
    localStorage.setItem('trips', JSON.stringify(trips));
    navigate(`/view-trip/${newTrip.id}`);
  };

  const renderStepIndicator = (stepNumber, title) => {
    const isCompleted = currentStep > stepNumber;
    const isActive = currentStep === stepNumber;
    
    return (
      <div className="flex items-center">
        <div className={`
          flex items-center justify-center w-8 h-8 rounded-full
          ${isCompleted ? 'bg-primary text-white' : isActive ? 'bg-primary/20 text-primary' : 'bg-gray-200 text-gray-500'}
        `}>
          {isCompleted ? <FiCheck className="w-5 h-5" /> : stepNumber}
        </div>
        <span className={`mr-2 ${isActive ? 'text-primary font-medium' : 'text-gray-500'}`}>
          {title}
        </span>
      </div>
    );
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">إنشاء رحلة جديدة</h1>
        
        {/* مؤشر الخطوات */}
        <div className="flex justify-between items-center mb-8 p-4 bg-white rounded-lg shadow-sm">
          {renderStepIndicator(1, 'اختيار الوجهة')}
          <div className="h-0.5 flex-1 mx-4 bg-gray-200">
            <div className={`h-full bg-primary transition-all ${currentStep > 1 ? 'w-full' : 'w-0'}`} />
          </div>
          {renderStepIndicator(2, 'تحديد الميزانية')}
          <div className="h-0.5 flex-1 mx-4 bg-gray-200">
            <div className={`h-full bg-primary transition-all ${currentStep > 2 ? 'w-full' : 'w-0'}`} />
          </div>
          {renderStepIndicator(3, 'اختيار الأنشطة')}
        </div>

        {/* محتوى الخطوات */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          {currentStep === 1 && (
            <DestinationSelector onSelect={handleDestinationSelect} />
          )}
          
          {currentStep === 2 && (
            <SelectBudgetOptions 
              selectedBudget={tripData.budget}
              onSelect={handleBudgetSelect}
            />
          )}
          
          {currentStep === 3 && (
            <SelectTravelList
              selectedList={tripData.travelList}
              onSelect={handleTravelListSelect}
            />
          )}

          {/* أزرار التنقل */}
          <div className="flex justify-between mt-8">
            <button
              onClick={handlePrevStep}
              className={`px-6 py-2 rounded-lg ${
                currentStep === 1
                  ? 'opacity-50 cursor-not-allowed bg-gray-300'
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}
              disabled={currentStep === 1}
            >
              السابق
            </button>

            {currentStep < 3 ? (
              <button
                onClick={handleNextStep}
                className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90"
                disabled={
                  (currentStep === 1 && !tripData.destination) ||
                  (currentStep === 2 && !tripData.budget)
                }
              >
                التالي
              </button>
            ) : (
              <button
                onClick={handleCreateTrip}
                className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90"
                disabled={!tripData.travelList.length}
              >
                إنشاء الرحلة
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateTrip;
