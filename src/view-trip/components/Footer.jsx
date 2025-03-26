import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="mt-16 text-center">
      <div className="bg-white rounded-lg p-8 shadow-sm">
        <h2 className="text-2xl font-bold mb-4">
          هل أعجبتك خطة رحلتك؟ 🌟
        </h2>
        <p className="text-gray-600 mb-8">
          يمكنك إنشاء المزيد من خطط الرحلات المخصصة حسب تفضيلاتك
        </p>
        <Link
          to="/create-trip"
          className="inline-block bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors"
        >
          إنشاء رحلة جديدة
        </Link>
      </div>
      
      <div className="mt-8 text-sm text-gray-500">
        تم إنشاؤها بواسطة دليل رحلاتي - مخطط رحلات  🌍
      </div>
    </div>
  );
}

export default Footer;
