import React, { useState } from 'react';
import MobileContainer from './components/MobileContainer';
import LandingScreen from './screens/LandingScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import ProfileScreen from './screens/ProfileScreen';
import './App.css';

function App() {
  const [currentScreen, setCurrentScreen] = useState('landing');
  
  // Registration data state
  const [registeredUser, setRegisteredUser] = useState({
    fullName: 'Marry Doe',
    phone: 'Marry Doe',
    email: 'Marry@Gmail.Com',
    password: 'Marry Doe',
    companyName: 'Marry Doe',
    isAgency: 'yes'
  });

  // Logged-in user state
  const [currentUser, setCurrentUser] = useState(null);

  const handleNavigate = (screen) => {
    setCurrentScreen(screen);
  };

  const handleSignup = (formData) => {
    setRegisteredUser(formData);
    setCurrentUser(formData);
    setCurrentScreen('profile');
  };

  const handleLogin = (email) => {
    // If logging in with the registered email, load those details.
    // Otherwise, dynamically create a profile name from the email prefix.
    if (registeredUser && email.toLowerCase() === registeredUser.email.toLowerCase()) {
      setCurrentUser(registeredUser);
    } else {
      const emailPrefix = email.split('@')[0];
      const capitalizedName = emailPrefix
        .split(/[._-]/)
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

      setCurrentUser({
        fullName: capitalizedName || 'Marry Doe',
        email: email,
      });
    }
    setCurrentScreen('profile');
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setCurrentScreen('landing');
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'landing':
        return <LandingScreen onNavigate={handleNavigate} />;
      case 'login':
        return (
          <LoginScreen
            onNavigate={handleNavigate}
            onLogin={handleLogin}
          />
        );
      case 'signup':
        return (
          <SignupScreen
            onNavigate={handleNavigate}
            onSignup={handleSignup}
          />
        );
      case 'profile':
        return (
          <ProfileScreen
            user={currentUser || registeredUser}
            onLogout={handleLogout}
          />
        );
      default:
        return <LandingScreen onNavigate={handleNavigate} />;
    }
  };

  return (
    <MobileContainer>
      {renderScreen()}
    </MobileContainer>
  );
}

export default App;
