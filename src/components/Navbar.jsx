import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img src="/vara.webp" alt="Planora" className="w-8 h-8 rounded-full" />
            <span className="font-bold text-xl">دليل رحلاتي</span>
          </Link>

          <div className="flex items-center gap-6">
            <Link
              to="/create-trip"
              className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors"
            >
              إنشاء رحلة
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
