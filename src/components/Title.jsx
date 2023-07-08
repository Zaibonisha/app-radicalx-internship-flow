import React from 'react';


export default function Title({ isLoggedIn, onLogout }) {
  const handleLogout = () => {
    onLogout();
  };

  return (
    <div>
      
      <div>
        {isLoggedIn && (
          <button
            style={{
              backgroundColor: 'blue',
              color: 'white',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              width: '10vw'
            }}
            onClick={handleLogout}
          >
            Logout
          </button>
        )}
      </div>
    </div>
  );
}
