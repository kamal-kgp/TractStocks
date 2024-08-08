import React from 'react';

const Settings = () => {
  const containerStyle = {
    height: '50vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    fontFamily: 'Arial, sans-serif'
  };

  const messageStyle = {
    padding: '20px',
    backgroundColor: '#ffffff',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    fontSize: '20px',
    color: '#333',
    textAlign: 'center',
    fontWeight: 'bold',
    letterSpacing: '1px'
  };

  return (
    <div style={containerStyle}>
      <div style={messageStyle}>
        Settings are not available
      </div>
    </div>
  );
};

export default Settings;
