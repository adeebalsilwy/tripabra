import React from 'react';

function Loading({ text = 'جاري التحميل...' }) {
  return (
    <div className="min-h-[200px] flex flex-col items-center justify-center p-4">
      <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mb-4"></div>
      <div className="text-lg font-medium text-gray-600">{text}</div>
    </div>
  );
}

export default Loading;
