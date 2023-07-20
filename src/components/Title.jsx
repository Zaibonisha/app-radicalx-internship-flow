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
        backgroundColor: 'transparent', // Set background to transparent to make it look like an image
        padding: 0, // Remove padding to avoid extra spacing around the image
        border: 'none',
        cursor: 'pointer',
        width: '100px', // Set the width as per your image size
      }}
      onClick={handleLogout}
    >
      <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <img
          src="purple logout.png" // Replace 'path/to/your/image.png' with the actual image URL or path
          alt="Logout"
          style={{ width: '35px', height: '35px', borderRadius: '5px' }} // Adjust the width and height if needed
        />
        <span style={{ marginLeft: '10px' }}>Logout</span>
      </span>
    </button>
  )}
</div>


    </div>
  );
}
