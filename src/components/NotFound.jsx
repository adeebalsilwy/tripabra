import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  console.error("404 Not Found: The requested page does not exist.");
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 text-center">
      <div className="text-6xl mb-6">🤔</div>
      <h1 className="text-4xl font-bold mb-4">404 - الصفحة غير موجودة</h1>
      <p className="text-gray-600 mb-8 max-w-md">
        عذراً، الصفحة التي تبحث عنها غير موجودة أو تم نقلها إلى مكان آخر
      </p>
      <Link
        to="/"
        className="inline-block bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors"
      >
        العودة للصفحة الرئيسية
      </Link>
    </div>
  );
}

export default NotFound;
