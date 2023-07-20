import React, { useState } from 'react';
import { Typography } from '@mui/material';
import { LineStyle, Timeline, TrendingUp, BarChart } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import Title from './Title';
import '../css/component/sidebar.css';
import LogoutIcon from '@mui/icons-material/Logout';




function Sidebar() {
 

  
 

  return (
    <div className="sidebar">
      <div className="top_section">
        <img src="radicalx_logo.png" alt="Radical X logo" width="200" height="100" />
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
          <div className="avatarSection">
  
        <div className="avatarContainer">
        <img src="side-avatar.jpg" alt="" className="sideAvatar" title="Adam Scott" />
        <span className="imageLabel">Adam Scott</span>
        </div>
    </div>

          
        </div>
       
      </div>
    </div>
  );
}

export default Sidebar;
