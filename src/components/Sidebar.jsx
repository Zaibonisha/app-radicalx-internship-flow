import React from 'react';
import { Typography } from '@mui/material';
import { LineStyle, Timeline, TrendingUp, BarChart } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import '../css/component/sidebar.css';
import LogoutIcon from '@mui/icons-material/Logout';

function Sidebar({ isLoggedIn, userName, onLogout }) {
  return (
    <div className="sidebar">
      <div className="top_section">
        <img src="radicalx_logo.png" alt="Radical X logo" className="logo" />
      </div>
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li className="sidebarListItem active">
                <LineStyle className="sidebarIcon" />
                <h2>Home</h2>
              </li>
            </Link>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              <h2>Total Enrolments</h2>
            </li>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon" />
              <h2>Completion</h2>
            </li>
            <li className="sidebarListItem">
              <BarChart className="sidebarIcon" />
              <h2>Reports</h2>
            </li>
          </ul>
          {isLoggedIn && (
           <div className="avatarSection">
           <div className="avatarContainer">
           <a href="/profile" style={{ textDecoration: 'none' }}>
            <img src="imageavatar.jpg" alt="Side Avatar" className="sideAvatar" />
            <span className="sideAvatarText" >{userName} </span>
           </a>
               
             
             <button className="logoutButton" onClick={onLogout}>
               <LogoutIcon style={{ fontSize: '3vw', color: '#8338ec', verticalAlign: 'middle', marginTop: '40%' }} />
               <span className="logoutButtonText">Logout</span>
             </button>
           </div>
         </div>
          
          )}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
