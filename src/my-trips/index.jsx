import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UserTripCard from "./components/UserTripCard";
import { toast } from "sonner";
import { Button } from "../components/ui/button";
import { FiPlusCircle } from "react-icons/fi";
import { MOCK_TRIPS } from "@/data/mockData";

function MyTrips() {
  const [userTrips, setUserTrips] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    GetUserTrips();
  }, []);

  const GetUserTrips = () => {
    setLoading(true);
    try {
      const savedTrips = JSON.parse(localStorage.getItem('trips') || '[]');
      setUserTrips(savedTrips);
      if (savedTrips.length === 0) {
        toast.info('لم يتم العثور على أي رحلات');
      }
    } catch (error) {
      console.error('Error loading trips:', error);
      toast.error('حدث خطأ أثناء تحميل الرحلات');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">رحلاتي 🌍</h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((_, index) => (
              <div
                key={index}
                className="bg-gray-100 rounded-xl h-[250px] animate-pulse"
              >
                <div className="h-full w-full bg-gradient-to-r from-gray-100 to-gray-200 animate-gradient"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (userTrips.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">رحلاتي 🌍</h1>
          </div>
          <div className="text-center py-16 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl shadow-sm">
            <div className="text-6xl mb-4">🏖️</div>
            <h2 className="text-2xl font-bold mb-4">لم تقم بإنشاء أي رحلات بعد</h2>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              ابدأ مغامرتك الآن! قم بإنشاء رحلتك الأولى واستمتع بتخطيط رحلاتك بسهولة
            </p>
            <Link to="/create-trip">
              <Button 
                className="bg-primary hover:bg-primary/90 gap-2"
              >
                <FiPlusCircle className="w-5 h-5" />
                إنشاء رحلة جديدة
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">رحلاتي 🌍</h1>
            <p className="text-gray-600">
              لديك {userTrips.length} {userTrips.length === 1 ? 'رحلة' : 'رحلات'} مخططة
            </p>
          </div>
          <Link to="/create-trip">
            <Button 
              className="bg-primary hover:bg-primary/90 gap-2"
            >
              <FiPlusCircle className="w-5 h-5" />
              إنشاء رحلة جديدة
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {userTrips.map((trip, index) => (
            <UserTripCard key={trip.id || index} trip={trip} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MyTrips;
