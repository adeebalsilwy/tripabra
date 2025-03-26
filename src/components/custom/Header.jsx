import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../ui/button';
import { useAuth } from '../../context/AuthContext';

function Header() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="p-5 bg-gradient-to-r from-yellow-600 to-yellow-500 border-b flex flex-row justify-between items-center shadow-md">
      <div className="flex items-center gap-10">
        <Link to="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
          <img src="/walk.webp" width={40} height={40} alt="شعار دليل رحلاتي" className="rounded-full shadow-sm" />
          <span className="text-white font-bold text-xl">دليل رحلاتي</span>
        </Link>
        <div className="flex gap-6 text-white">
          <Link to="/" className="hover:text-primary transition-colors">الرئيسية</Link>
          {user && (
            <>
              <Link to="/my-trips" className="hover:text-primary transition-colors">رحلاتي</Link>
              <Link to="/create-trip" className="hover:text-primary transition-colors">إنشاء رحلة</Link>
            </>
          )}
        </div>
      </div>
      <div className="flex gap-3">
        {user ? (
          <div className="flex items-center gap-4">
            <span className="text-white">مرحباً, {user.name || user.email}</span>
            <Button 
              variant="outline" 
              className="bg-white hover:bg-red-50 text-red-600 border-red-600 hover:text-red-700"
              onClick={() => {
                logout();
                navigate('/');
              }}
            >
              تسجيل خروج
            </Button>
          </div>
        ) : (
          <>
            <Button 
              variant="outline" 
              className="bg-white hover:bg-white/90 text-yellow-600"
              onClick={() => navigate('/login')}
            >
              تسجيل الدخول
            </Button>
            <Button 
              className="bg-primary hover:bg-primary/90 transition-all duration-300"
              onClick={() => navigate('/register')}
            >
              إنشاء حساب
            </Button>
          </>
        )}
      </div>
    </div>
  );
}

export default Header;
