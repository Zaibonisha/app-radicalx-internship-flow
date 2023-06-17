import React from 'react';

export default function Title({ isLoggedIn, onLogout }) {
  const handleLogout = () => {
    onLogout();
  };

  return (
    <div>
      {isLoggedIn && (
        <button
          style={{
            backgroundColor: 'purple',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
          onClick={handleLogout}
        >
          Logout
        </button>
      )}
    </div>
  );
}
