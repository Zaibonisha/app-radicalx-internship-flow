import React, { useState } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import "./App.css";
import Home from "./pages/Home";
import Title from "./components/Title";
import NewInternship from "./pages/newInternship/NewInternship";
import AddMore from "./pages/cardPages/AddMore";
import AddSurvey from "./pages/cardPages/AddSurvey";
import Settings from "./pages/cardPages/Settings";
import LoginPage from './pages/LoginPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Perform your login logic here
    // You can make an API request to your server or handle it locally

    // Example: Check if username and password are valid
    // If valid, set isLoggedIn to true
    // Otherwise, display an error message
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <BrowserRouter>
      <Title />
      <div className="container">
        <Sidebar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
        <Switch>
          <Route exact path="/login" render={() => (
            isLoggedIn ? <Redirect to="/" /> : <LoginPage onLogin={handleLogin} />
          )} />
          <Route exact path="/" render={() => (
            isLoggedIn ? <Home/> : <Redirect to="/login" />
          )} />
          <Route exact path="/newInternship" render={() => (
            isLoggedIn ? <NewInternship /> : <Redirect to="/login" />
          )} />
          <Route exact path="/AddMore" render={() => (
            isLoggedIn ? <AddMore /> : <Redirect to="/login" />
          )} />
          <Route path="/AddSurvey" render={() => (
            isLoggedIn ? <AddSurvey /> : <Redirect to="/login" />
          )} />
          <Route path="/Settings" render={() => (
            isLoggedIn ? <Settings /> : <Redirect to="/login" />
          )} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
