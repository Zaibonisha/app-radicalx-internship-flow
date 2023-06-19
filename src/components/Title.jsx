import React from 'react';
import Head from "react-document-configuration";

export default function Title({ isLoggedIn, onLogout }) {
  const handleLogout = () => {
    onLogout();
  };

  return (
    <div>
      <div>
        <Head title="Dashboard" icon="link_of_icon" />
      </div>
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
              width: '12vw'
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
