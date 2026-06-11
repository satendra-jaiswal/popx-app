import React from 'react';

const Input = ({
  label,
  required = false,
  type = 'text',
  name,
  value,
  onChange,
  placeholder,
  ...props
}) => {
  return (
    <div className="input-wrapper">
      <label className="input-label" htmlFor={name}>
        {label}
        {required && <span style={{ color: '#FF5A5A', marginLeft: '2px' }}>*</span>}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="input-field"
        required={required}
        {...props}
      />
    </div>
  );
};

export default Input;
