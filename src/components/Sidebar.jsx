import '../css/component/sidebar.css'
import { Typography } from  "@mui/material" ;

import {
  LineStyle,
  Timeline,
  TrendingUp,
  BarChart,
  
  
} from "@mui/icons-material";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="top_section"><img src="radicalx_logo.png" alt="Radical X logo" width="200" height="100" />

        
        </div>
      <div className="sidebarWrapper">
        
        <div className="sidebarMenu">
          
          <ul className="sidebarList">
            <Link to="/" className="link">
            <li className="sidebarListItem active">
              <LineStyle className="sidebarIcon" /><h2>
              Home</h2>
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
              <BarChart className="sidebarIcon" /><h2>
              Reports</h2>
            </li>
          </ul>
        </div>
         <div class="container">
          <div className="bottom_section" >
          
          <img src="side-avatar.jpg" alt="" className="sideAvatar" title="Adam Scott"/>
          <Typography 
          variant="h6"  
          align="right"
          >
          Adam Scott
          </Typography> 
          
          
          
         </div>      
           
       </div> 
    </div>
       
      </div>

     
  );
}

export default Sidebar;
