import React from 'react';
import PropTypes from 'prop-types';

function InputField({ label, id, type = 'text', value, onChange, placeholder, required = false, error }) {
  const inputClassName = `shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${error ? 'border-red-500' : ''}`;
  const labelClassName = 'block text-gray-700 text-sm font-bold mb-2';
  const errorClassName = 'text-red-500 text-xs italic mt-1';

  return (
    <div className="mb-4">
      {label && <label className={labelClassName} htmlFor={id}>{label}</label>}
      <input
        className={inputClassName}
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
      />
      {error && <p className={errorClassName}>{error}</p>}
    </div>
  );
}

InputField.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.any.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  error: PropTypes.string,
};

export default InputField;