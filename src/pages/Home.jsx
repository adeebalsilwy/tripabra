import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            خطط رحلتك المثالية مع دليل رحلاتي 🌍
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            د  يساعدك في تخطيط رحلة لا تُنسى تناسب اهتماماتك وميزانيتك
          </p>
          <Link
            to="/create-trip"
            className="inline-block bg-primary text-white text-lg px-8 py-4 rounded-lg hover:bg-primary/90 transition-colors"
          >
            ابدأ تخطيط رحلتك
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-bold mb-2">تخطيط مخصص</h3>
            <p className="text-gray-600">
              نقدم لك خطة رحلة مخصصة تناسب اهتماماتك وتفضيلاتك
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="text-4xl mb-4">💰</div>
            <h3 className="text-xl font-bold mb-2">ميزانية مرنة</h3>
            <p className="text-gray-600">
              نساعدك في العثور على أفضل الخيارات ضمن ميزانيتك
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="text-4xl mb-4">🗺️</div>
            <h3 className="text-xl font-bold mb-2">أماكن مميزة</h3>
            <p className="text-gray-600">
              اكتشف أفضل المعالم السياحية والأماكن المميزة في وجهتك
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            جاهز لبدء مغامرتك القادمة؟
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            انضم إلى آلاف المسافرين الذين يستخدمون دليل رحلاتي لتخطيط رحلاتهم
          </p>
          <Link
            to="/create-trip"
            className="inline-block bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors"
          >
            إنشاء رحلة جديدة
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
