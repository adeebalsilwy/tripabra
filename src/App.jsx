import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import CreateTrip from "./create-trip";
import ViewTrip from "./view-trip/[tripId]";
import MyTrips from "./my-trips";
import RootLayout from "./components/layout/RootLayout";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/create-trip"
            element={
              <ProtectedRoute>
                <CreateTrip />
              </ProtectedRoute>
            }
          />
          <Route
            path="/my-trips"
            element={
              <ProtectedRoute>
                <MyTrips />
              </ProtectedRoute>
            }
          />
          <Route
            path="/view-trip/:tripId"
            element={
              <ProtectedRoute>
                <ViewTrip />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-yellow-600">
            خطط رحلتك المثالية مع دليل رحلاتي 🌍
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          دعنا نساعدك في تخطيط رحلة لا تُنسى تناسب اهتماماتك وميزانيتك.
            نحن نقدم لك تجربة فريدة في تخطيط الرحلات مع توصيات مخصصة لكل مسافر.
          </p>
          <Link
            to="/create-trip"
            className="inline-block bg-primary text-white text-lg px-8 py-4 rounded-lg hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            ابدأ تخطيط رحلتك
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-1">
            <div className="text-5xl mb-4">🎯</div>
            <h3 className="text-2xl font-bold mb-3 text-yellow-600">تخطيط مخصص</h3>
            <p className="text-gray-600 leading-relaxed">
              نقدم لك خطة رحلة مخصصة تناسب اهتماماتك وتفضيلاتك، مع مراعاة كل التفاصيل التي تهمك
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-1">
            <div className="text-5xl mb-4">💰</div>
            <h3 className="text-2xl font-bold mb-3 text-yellow-600">ميزانية مرنة</h3>
            <p className="text-gray-600 leading-relaxed">
              نساعدك في العثور على أفضل الخيارات ضمن ميزانيتك، مع تحقيق أقصى استفادة من كل ريال
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-1">
            <div className="text-5xl mb-4">🗺️</div>
            <h3 className="text-2xl font-bold mb-3 text-yellow-600">أماكن مميزة</h3>
            <p className="text-gray-600 leading-relaxed">
              اكتشف أفضل المعالم السياحية والأماكن المميزة في وجهتك، مع نصائح محلية حصرية
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-yellow-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-yellow-600">
            لماذا تختار دليل رحلاتي؟
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-semibold mb-2">ذكاء اصطناعي متقدم</h3>
              <p className="text-gray-600">تخطيط ذكي يتعلم من تفضيلاتك</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-2">سرعة في التخطيط</h3>
              <p className="text-gray-600">خطة سفر متكاملة في دقائق</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-semibold mb-2">سهولة الاستخدام</h3>
              <p className="text-gray-600">واجهة بسيطة وسلسة</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold mb-2">خصوصية وأمان</h3>
              <p className="text-gray-600">حماية كاملة لبياناتك</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center bg-yellow-600 text-white p-12 rounded-2xl shadow-xl">
          <h2 className="text-3xl font-bold mb-4">
            جاهز لبدء مغامرتك القادمة؟
          </h2>
          <p className="text-lg mb-8 opacity-90">
            انضم إلى آلاف المسافرين الذين يستخدمون دليل رحلاتي لتخطيط رحلاتهم
          </p>
          <Link
            to="/register"
            className="inline-block bg-white text-yellow-600 px-8 py-3 rounded-lg hover:bg-yellow-50 transition-colors text-lg font-semibold"
          >
            سجل الآن مجاناً
          </Link>
        </div>
      </div>
    </div>
  );
}

export default App;
