import React from 'react';

const LandingScreen = ({ onNavigate }) => {
  return (
    <div className="screen-content landing-content fade-in">
      <div style={{ marginBottom: '30px' }}>
        <h1 className="screen-header-title" style={{ marginBottom: '6px' }}>
          Welcome to PopX
        </h1>
        <p className="screen-subtitle" style={{ marginBottom: '0', fontSize: '15px' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>
      </div>
      
      <div className="landing-buttons">
        <button
          className="btn btn-primary"
          onClick={() => onNavigate('signup')}
          type="button"
        >
          Create Account
        </button>
        <button
          className="btn btn-secondary"
          onClick={() => onNavigate('login')}
          type="button"
        >
          Already Registered? Login
        </button>
      </div>
    </div>
  );
};

export default LandingScreen;
