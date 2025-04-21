import React from 'react';

function LoadingSpinner({ size = 'medium' }) {
  const sizeClasses = {
    small: 'w-4 h-4 border-2',
    medium: 'w-6 h-6 border-4',
    large: 'w-8 h-8 border-4',
  };

  return (
    <div className={`animate-spin rounded-full border-t-blue-500 border-blue-300 ${sizeClasses[size] || sizeClasses.medium}`}></div>
  );
}

export default LoadingSpinner;