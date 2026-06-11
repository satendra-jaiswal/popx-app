import React, { useState } from 'react';
import Input from '../components/Input';

const LoginScreen = ({ onNavigate, onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isFormValid = email.trim() !== '' && password.trim() !== '';

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      onLogin(email);
    }
  };

  return (
    <div className="screen-content fade-in">
      <h1 className="screen-header-title" style={{ marginBottom: '10px', marginTop: '10px' }}>
        Signin to your PopX account
      </h1>
      <p className="screen-subtitle" style={{ marginBottom: '36px' }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      </p>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
        <Input
          label="Email Address"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email address"
          required
        />

        <Input
          label="Password"
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
          required
        />

        <div className="form-footer">
          <button
            type="submit"
            className={`btn ${isFormValid ? 'btn-primary' : 'btn-disabled'}`}
            disabled={!isFormValid}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginScreen;
