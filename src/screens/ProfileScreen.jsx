import React, { useRef, useState } from 'react';

const ProfileScreen = ({ user }) => {
  const fileInputRef = useRef(null);
  const [localAvatar, setLocalAvatar] = useState(null);

  const handleCameraClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setLocalAvatar(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const displayName = user?.fullName || 'Marry Doe';
  const displayEmail = user?.email || 'Marry@Gmail.Com';
  const avatarSrc = localAvatar || user?.avatar || '/avatar.png';

  return (
    <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }} className="fade-in">
      {/* Header */}
      <div className="profile-header">
        <span className="profile-title">Account Settings</span>
      </div>

      {/* Profile Body */}
      <div className="profile-body">
        <div className="profile-info-card">
          <div className="avatar-container">
            <img
              src={avatarSrc}
              alt="Profile Avatar"
              className="profile-avatar"
              onError={(e) => {
                e.target.src = 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150';
              }}
            />
            {/* Upload picture overlay */}
            <div
              className="camera-overlay"
              onClick={handleCameraClick}
              title="Change Profile Picture"
            >
              <svg viewBox="0 0 24 24">
                <path d="M4 4h3l2-2h6l2 2h3a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm8 3a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" />
              </svg>
            </div>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              style={{ display: 'none' }}
              accept="image/*"
            />
          </div>

          <div className="profile-text-details">
            <h2 className="profile-name">{displayName}</h2>
            <span className="profile-email">{displayEmail}</span>
          </div>
        </div>

        <p className="profile-bio">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
        </p>

        <hr className="dashed-divider" />
      </div>
    </div>
  );
};

export default ProfileScreen;
