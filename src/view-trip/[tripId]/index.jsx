import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import InfoSection from '../components/InfoSection';
import Hotels from '../components/Hotels';
import TripPlace from '../components/TripPlace';
import Loading from '../../components/ui/loading';
import Alert from '../../components/ui/alert';
import PopularAttractions from '../components/PopularAttractions';
import DestinationGallery from '../components/DestinationGallery';
import Footer from '../components/Footer';
import { MOCK_TRIPS } from '../../data/mockData';

function ViewTrip() {
    const { tripId } = useParams();
    const navigate = useNavigate();
    const [trip, setTrip] = useState();
    const [loading, setLoading] = useState(false);
    const [alert, setAlert] = useState(null);

    const showAlert = (message, type = 'info') => {
        setAlert({ message, type });
    };

    const GetTripData = () => {
        setLoading(true);
        try {
            const savedTrips = JSON.parse(localStorage.getItem('trips') || '[]');
            const foundTrip = savedTrips.find(t => t.id === tripId);

            if (foundTrip) {
                // Transform the trip data to match the expected structure
                const transformedTrip = {
                    ...foundTrip,
                    title: `رحلة إلى ${foundTrip.destination.city}`,
                    description: `استكشف روعة ${foundTrip.destination.city} وسحرها`,
                    duration: "7 أيام",
                    totalCost: foundTrip.budget,
                    places: foundTrip.destination.attractions.map(attraction => ({
                        id: attraction.name,
                        displayName: { text: attraction.name, languageCode: "ar" },
                        photos: [{ url: attraction.image }],
                        location: `${foundTrip.destination.city}، ${foundTrip.destination.country}`,
                        rating: 4.8,
                        description: attraction.description
                    })),
                    hotels: [],
                    coverImage: foundTrip.destination.attractions[0]?.image || "/trips/default-trip.jpg"
                };
                setTrip(transformedTrip);
                showAlert('تم تحميل تفاصيل رحلتك بنجاح', 'success');
            } else {
                showAlert('عذراً، لم يتم العثور على الرحلة المطلوبة', 'error');
                setTimeout(() => navigate('/my-trips'), 2000);
            }
        } catch (error) {
            console.error('Error loading trip:', error);
            showAlert('حدث خطأ أثناء تحميل تفاصيل الرحلة', 'error');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (tripId) {
            GetTripData();
        }
    }, [tripId]);

    if (loading) {
        return <Loading text="جاري تحميل تفاصيل الرحلة..." />;
    }

    if (!trip) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center p-4 text-center">
                <div className="text-4xl mb-4">😕</div>
                <h2 className="text-2xl font-bold mb-2">لم يتم العثور على الرحلة</h2>
                <p className="text-gray-600">
                    يمكنك إنشاء رحلة جديدة من خلال الضغط على زر "إنشاء رحلة" في الأعلى
                </p>
            </div>
        );
    }

    return (
        <>
            {alert && (
                <Alert
                    type={alert.type}
                    message={alert.message}
                    onClose={() => setAlert(null)}
                />
            )}
            <div className="container mx-auto px-4 py-8">
                <div className="max-w-6xl mx-auto space-y-12">
                    <InfoSection trip={trip} />
                    
                    {trip.places && trip.places.length > 0 && (
                        <PopularAttractions 
                            attractions={trip.places}
                        />
                    )}

                    <DestinationGallery places={trip.places} />

                    {trip.hotels && trip.hotels.length > 0 && (
                        <Hotels hotels={trip.hotels} />
                    )}
                    
                    <TripPlace places={trip.places} />
                    <Footer trip={trip} />
                </div>
            </div>
        </>
    );
}

export default ViewTrip;
