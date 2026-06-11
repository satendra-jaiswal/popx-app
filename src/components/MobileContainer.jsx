import React from 'react';

const MobileContainer = ({ children }) => {
  return (
    <div className="phone-frame fade-in">
      <div className="phone-screen">
        {children}
      </div>
    </div>
  );
};

export default MobileContainer;
