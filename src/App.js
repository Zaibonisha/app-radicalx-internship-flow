import React, { useState } from 'react';
import { BrowserRouter, Switch, Route, Redirect, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import "./App.css";
import Home from "./pages/Home";
import NewInternship from "./pages/newInternship/NewInternship";
import AddMore from "./pages/cardPages/AddMore";
import AddSurvey from "./pages/cardPages/AddSurvey";
import Settings from "./pages/cardPages/Settings";
import LoginPage from './pages/LoginPage';

function Main() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');

  const handleLogin = (username) => {
    setIsLoggedIn(true);
    setUserName(username);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserName('');
  };

  const location = useLocation();
  const hideSidebar = location.pathname === '/login';

  return (
    <>
      {/* <Title isLoggedIn={isLoggedIn} userName={userName} onLogout={handleLogout} /> */}

      <div className="container">
        {!hideSidebar && <Sidebar isLoggedIn={isLoggedIn} userName={userName} onLogout={handleLogout} />}

        <Switch>
          <Route exact path="/login" render={() => (
            isLoggedIn ? <Redirect to="/" /> : <LoginPage onLogin={handleLogin} />
          )} />
          <Route exact path="/" render={() => (
            isLoggedIn ? <Home /> : <Redirect to="/login" />
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
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  );
}

export default App;
