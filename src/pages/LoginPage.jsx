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
    if (username === 'admin' && password === 'admin') {
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
    <div className="login-container" style={{
        backgroundColor: '#f1f1f1',
        padding: '20px',
        width: '100vw',
        margin: '0 auto',
        // other styles...
      }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={handleUsernameChange}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;

