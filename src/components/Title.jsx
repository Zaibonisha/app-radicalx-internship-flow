import React from 'react';

export default function Title({ isLoggedIn, userName, onLogout }) {
  const handleLogout = () => {
    // Perform your actual logout logic here, such as clearing tokens, resetting session, etc.
    // For this example, we'll just simulate a delay of 1 second before logging out.
    // Replace this with your actual logout implementation.
    setTimeout(() => {
      onLogout(); // Call the onLogout callback after the logout logic is completed.
    }, 1000);
  };

  return (
    <div className="title-container">
      {isLoggedIn && (
        <button
          className="logout-button"
          style={{
            backgroundColor: 'transparent',
            padding: 0,
            border: 'none',
            cursor: 'pointer',
            width: '100px',
          }}
          onClick={handleLogout}
        >
          <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <img
              src="purple logout.png"
              alt="Logout"
              style={{ width: '35px', height: '35px', borderRadius: '5px' }}
            />
            <span style={{ marginLeft: '10px' }}>Logout ({userName})</span>
          </span>
        </button>
      )}
    </div>
  );
}
