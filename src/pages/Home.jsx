import React from 'react';
import { Link } from 'react-router-dom';
import '../css/page/home.css';
import InternshipTable from '../components/InternshipTable';
import MyCardComponent from '../components/MyCardComponent';
import Typography from '@mui/material/Typography';
import AddBoxIcon from '@mui/icons-material/AddBox';

function Home() {

  // Define handleClick function
  const handleClick = () => {
    // Handle button click logic here
    console.log('Button clicked!');
  };

  return (
    <div className="home">
      <div>
        {/* Button that links to the target page */}
        <Link to="/NewInternship">
      <button onClick={handleClick} style={{
      backgroundColor:'purple', // Set the background color
      borderRadius: '5px', // Set the border radius
      color: 'white', // Set the text color
      padding: '10px 20px', // Set padding
      position: 'absolute',
      top: 0,
      right: 0,
      display: 'flex', // Set display to flex
      alignItems: 'center', // Align items to center
      }}>
      <AddBoxIcon style={{ marginRight: '5px' }} /> Add new internship
      </button>
      </Link>

      </div>
      <div><Typography variant="h3" component="h2">
      Internships
      </Typography>
      </div>
      <div style={{ display: 'flex' }}>
        <MyCardComponent  description="Card Description" />
      </div>
      <div className="homeWidgets">
        <InternshipTable />
      </div>
    </div>
  );
}

export default Home;


