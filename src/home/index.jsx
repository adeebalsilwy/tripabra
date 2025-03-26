import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">
            خطط رحلتك المثالية مع دليل رحلاتي 🌍
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            دعنا نساعدك في تخطيط رحلة لا تُنسى! نقدم لك خطة سفر مخصصة تناسب اهتماماتك وميزانيتك
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-3">تخطيط ذكي</h3>
              <p className="text-gray-600">
                نقترح لك أفضل الأماكن والأنشطة بناءً على تفضيلاتك
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-semibold mb-3">ميزانية مرنة</h3>
              <p className="text-gray-600">
                خيارات تناسب جميع الميزانيات، من الاقتصادية إلى الفاخرة
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">📍</div>
              <h3 className="text-xl font-semibold mb-3">وجهات متنوعة</h3>
              <p className="text-gray-600">
                اكتشف أجمل الوجهات السياحية حول العالم
              </p>
            </div>
          </div>
          
          <Button
            onClick={() => navigate('/create-trip')}
            className="bg-primary text-white px-8 py-6 text-xl rounded-full hover:scale-105 transition-all duration-300"
          >
            ابدأ تخطيط رحلتك الآن
          </Button>
        </div>
        
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-center mb-12">
            كيف يعمل دليل رحلاتي؟
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">1</span>
              </div>
              <h3 className="font-semibold mb-2">حدد وجهتك</h3>
              <p className="text-gray-600">
                اختر المدينة التي تريد زيارتها
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">2</span>
              </div>
              <h3 className="font-semibold mb-2">اختر المدة</h3>
              <p className="text-gray-600">
                حدد عدد أيام رحلتك
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">3</span>
              </div>
              <h3 className="font-semibold mb-2">حدد ميزانيتك</h3>
              <p className="text-gray-600">
                اختر مستوى الميزانية المناسب لك
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">4</span>
              </div>
              <h3 className="font-semibold mb-2">استلم خطتك</h3>
              <p className="text-gray-600">
                احصل على خطة سفر مفصلة ومخصصة
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
