import React from 'react';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import '../css/component/sidebar.css';
import LogoutIcon from '@mui/icons-material/Logout';

// Import your PNG images
import book from '../assets/book.png';
import medal_star from '../assets/medal_star.png';
import briefcase from '../assets/briefcase.png';
import setting from '../assets/setting.png';

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
                <img src={book} alt="book" className="sidebarIcon" />
                <h2>Internships</h2>
              </li>
            </Link>
            <Link to="/apprenticeship" className="link">
            <li className="sidebarListItem">
              <img src={medal_star} alt="medal" className="sidebarIcon" />
              <h2>Apprenticeships</h2>
            </li>
            </Link>
            
            <li className="sidebarListItem">
              <img src={briefcase} alt="TrendingUp" className="sidebarIcon" />
              <h2>Jobs</h2>
            </li>
            <li className="sidebarListItem">
              <img src={setting} alt="setting" className="sidebarIcon" />
              <h2>Settings</h2>
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
