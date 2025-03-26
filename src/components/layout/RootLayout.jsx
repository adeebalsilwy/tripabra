import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../custom/Header';

function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 font-cairo">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;
