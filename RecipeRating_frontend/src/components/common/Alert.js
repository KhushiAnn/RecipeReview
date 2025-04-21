import React from 'react';
import PropTypes from 'prop-types';

function Alert({ type = 'info', message, onClose }) {
  const typeStyles = {
    info: 'bg-blue-100 border-blue-400 text-blue-700',
    success: 'bg-green-100 border-green-400 text-green-700',
    warning: 'bg-yellow-100 border-yellow-400 text-yellow-700',
    danger: 'bg-red-100 border-red-400 text-red-700',
  };

  const baseStyles = 'border rounded px-4 py-3 relative';
  const combinedClassName = `${baseStyles} ${typeStyles[type] || typeStyles.info}`;

  return (
    <div className={combinedClassName} role="alert">
      <strong className="font-bold">{type.charAt(0).toUpperCase() + type.slice(1)}!</strong>
      <span className="block sm:inline ml-2">{message}</span>
      {onClose && (
        <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
          <svg
            className="fill-current h-6 w-6 text-gray-500 hover:text-gray-700 cursor-pointer"
            role="button"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            onClick={onClose}
          >
            <title>Close</title>
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </span>
      )}
    </div>
  );
}

Alert.propTypes = {
  type: PropTypes.oneOf(['info', 'success', 'warning', 'danger']),
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func,
};

export default Alert;