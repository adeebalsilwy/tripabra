import React, { useState, useEffect } from 'react';

function Alert({ type = 'info', message, onClose, autoClose = true }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (autoClose) {
      const timer = setTimeout(() => {
        setIsVisible(false);
        onClose?.();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [autoClose, onClose]);

  if (!isVisible) return null;

  const styles = {
    success: {
      container: 'bg-green-50 text-green-800 border-green-200',
      icon: '✓',
    },
    error: {
      container: 'bg-red-50 text-red-800 border-red-200',
      icon: '✕',
    },
    warning: {
      container: 'bg-yellow-50 text-yellow-800 border-yellow-200',
      icon: '⚠',
    },
    info: {
      container: 'bg-blue-50 text-blue-800 border-blue-200',
      icon: 'ℹ',
    },
  };

  const { container, icon } = styles[type];

  return (
    <div
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 p-4 rounded-lg border ${container} shadow-lg max-w-md w-full animate-fade-in`}
      role="alert"
    >
      <div className="flex justify-between items-center gap-3">
        <span className="text-xl">{icon}</span>
        <div className="flex-1 text-right">{message}</div>
        <button
          onClick={() => {
            setIsVisible(false);
            onClose?.();
          }}
          className="text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="إغلاق"
        >
          ✕
        </button>
      </div>
    </div>
  );
}

export default Alert;
