import React, { useState } from 'react';
import Input from '../components/Input';
import RadioGroup from '../components/RadioGroup';

const SignupScreen = ({ onNavigate, onSignup }) => {
  // Initializing with empty fields as requested, with no pre-filled user details
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
    companyName: '',
    isAgency: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleRadioChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      isAgency: value
    }));
  };

  const isFormValid =
    formData.fullName.trim() !== '' &&
    formData.phone.trim() !== '' &&
    formData.email.trim() !== '' &&
    formData.password.trim() !== '' &&
    formData.isAgency !== '';

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      onSignup(formData);
    }
  };

  return (
    <div className="screen-content fade-in">
      <h1 className="screen-header-title" style={{ fontSize: '24px', marginBottom: '24px', marginTop: '10px' }}>
        Create your PopX account
      </h1>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
        <Input
          label="Full Name"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Enter full name"
          required
        />

        <Input
          label="Phone number"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Enter phone number"
          required
        />

        <Input
          label="Email address"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter email address"
          required
        />

        <Input
          label="Password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter password"
          required
        />

        <Input
          label="Company name"
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
          placeholder="Enter company name"
        />

        <RadioGroup
          label="Are you an Agency?"
          name="isAgency"
          options={[
            { label: 'Yes', value: 'yes' },
            { label: 'No', value: 'no' }
          ]}
          selectedValue={formData.isAgency}
          onChange={handleRadioChange}
          required
        />

        <div className="form-footer">
          <button
            type="submit"
            className={`btn ${isFormValid ? 'btn-primary' : 'btn-disabled'}`}
            disabled={!isFormValid}
          >
            Create Account
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignupScreen;
