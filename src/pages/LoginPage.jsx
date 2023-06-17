import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

function LoginPage({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform your login logic here
    // You can make an API request to your server or handle it locally

    // Example: Check if username and password are "admin"
    if (username === 'nisha' && password === '12345') {
      setIsLoggedIn(true);
      onLogin(); // Call the onLogin function from props to update the login state in the parent component
    } else {
      alert('Invalid username or password!');
    }

    // Reset the form
    setUsername('');
    setPassword('');
  };

  if (isLoggedIn) {
    return <Redirect to="/" />; // Redirect to the home page if the user is logged in
  }

  return (
    <div
      className="login-container"
      style={{
        backgroundColor: 'aliceblue',
        padding: '80px',
        width: '100vw', // Adjusted to use viewport width
        height: '100vh', // Adjusted to use viewport height
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center', // Updated to center the container vertically and horizontally
        
        // other styles...
      }}
    >
      <div style={{
        backgroundColor: 'pink',
        padding: '80px',
        width: '20vw', // Adjusted to use viewport width
        height: '85vh', // Adjusted to use viewport height
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'top',
        borderRadius: '10px' // Updated to center the container vertically and horizontally
        
        // other styles...
      }}>
       
       <form onSubmit={handleSubmit}>
       <h1 style={{
    // Adjusted to use viewport height
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '0',
    marginBottom: '40px'
  }}>Login</h1>
  <div style={{ marginBottom: '75px' }}>
    <label style={{ display: 'block' }}>Username:</label>
    <input
      type="text"
      value={username}
      onChange={handleUsernameChange}
      required
      style={{
        borderBottom: '1px solid black',
        borderTop: 'none',
        borderLeft: 'none',
        borderRight: 'none',
        outline: 'none',
        height: '40px',
        width: '15vw',
        borderRadius: '10px'
      }}
    />
  </div>
  <div style={{ marginBottom: '75px' }}>
    <label style={{ display: 'block' }}>Password:</label>
    <input
      type="password"
      value={password}
      onChange={handlePasswordChange}
      required
      style={{
        borderBottom: '1px solid black',
        borderTop: 'none',
        borderLeft: 'none',
        borderRight: 'none',
        outline: 'none',
        height: '40px',
        borderRadius: '10px',
        width: '15vw'
      }}
    />
  </div>
 
  <button type="submit" style={{ display: 'block', margin: '0 auto', height: '50px', width: '15vw', backgroundColor:'purple', color: 'white', borderRadius: '10px' }}>Login</button>

</form>


      </div>
    </div>
  );
}

export default LoginPage;


