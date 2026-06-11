import React from 'react';

const RadioGroup = ({
  label,
  name,
  options,
  selectedValue,
  onChange,
  required = false
}) => {
  return (
    <div className="radio-group-container">
      {label && (
        <span className="radio-group-label">
          {label}
          {required && <span style={{ color: '#FF5A5A', marginLeft: '2px' }}>*</span>}
        </span>
      )}
      <div className="radio-options">
        {options.map((option) => (
          <label key={option.value} className="radio-label">
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={selectedValue === option.value}
              onChange={() => onChange(option.value)}
              className="radio-input"
              required={required}
            />
            <span className="radio-custom" />
            <span>{option.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default RadioGroup;
