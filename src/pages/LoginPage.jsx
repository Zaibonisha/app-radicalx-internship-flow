import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import '../css/component/login.css';

function LoginPage({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === 'nisha' && password === '12345') {
      onLogin(username);
      setUsername('');
      setPassword('');
    } else {
      alert('Invalid username or password!');
    }
  };

  return (
    <div
      className="login-container"
      style={{
        backgroundImage: 'url("/cover3.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '80px',
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0', // Add this line to remove any default margin
      }}
    >
      <div
        style={{
          backgroundColor: 'rgba(253, 190, 201, 0.5)',
          padding: '80px',
          width: '20vw',
          height: '58vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '10px',
          marginTop: '40px',
        }}
      >
        <form onSubmit={handleSubmit}>
          <h1
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: '40px',
              marginBottom: '40px',
            }}
          >
            Login
          </h1>
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
                borderRadius: '10px',
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
                width: '15vw',
              }}
            />
          </div>

          <button
            type="submit"
            style={{
              display: 'block',
              margin: '0 auto',
              height: '50px',
              width: '15vw',
              backgroundColor: 'purple',
              color: 'white',
              borderRadius: '10px',
            }}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
