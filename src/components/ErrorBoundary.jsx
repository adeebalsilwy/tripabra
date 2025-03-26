import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

function ErrorBoundary() {
  const error = useRouteError();
  console.error("Error caught in ErrorBoundary:", error);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 text-center">
      <div className="text-5xl mb-6">😕</div>
      <h1 className="text-3xl font-bold mb-4">عذراً، حدث خطأ غير متوقع</h1>
      <p className="text-gray-600 mb-8 max-w-md">
        {error?.message || 'حدث خطأ أثناء تحميل الصفحة. يرجى المحاولة مرة أخرى.'}
      </p>
      <div className="space-x-4 rtl:space-x-reverse">
        <Link
          to="/"
          className="inline-block bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors"
        >
          العودة للصفحة الرئيسية
        </Link>
        <button
          onClick={() => window.location.reload()}
          className="inline-block bg-gray-100 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-200 transition-colors"
        >
          تحديث الصفحة
        </button>
      </div>
    </div>
  );
}

export default ErrorBoundary;
