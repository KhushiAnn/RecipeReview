import React from 'react';
import PropTypes from 'prop-types';

function Button({ children, onClick, variant = 'primary', size = 'medium', className = '', disabled = false }) {
  const baseStyles = 'font-bold rounded focus:outline-none focus:shadow-outline transition duration-200';
  const sizeStyles = {
    small: 'py-1 px-2 text-xs',
    medium: 'py-2 px-4 text-sm',
    large: 'py-3 px-6 text-base',
  };
  const variantStyles = {
    primary: 'bg-blue-500 hover:bg-blue-700 text-white',
    secondary: 'bg-gray-300 hover:bg-gray-400 text-gray-800',
    success: 'bg-green-500 hover:bg-green-700 text-white',
    danger: 'bg-red-500 hover:bg-red-700 text-white',
    warning: 'bg-yellow-500 hover:bg-yellow-700 text-white',
  };
  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : '';

  const combinedClassName = `${baseStyles} ${sizeStyles[size] || sizeStyles.medium} ${variantStyles[variant] || variantStyles.primary} ${className} ${disabledStyles}`;

  return (
    <button onClick={onClick} className={combinedClassName} disabled={disabled}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'warning']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  className: PropTypes.string,
  disabled: PropTypes.bool,
};

export default Button;