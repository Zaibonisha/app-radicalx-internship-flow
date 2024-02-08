import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Chart from './Chart';
import { enrolmentData } from "../Data";
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

const MyCardComponent = ({ title, description }) => {
  return (
    <Grid container spacing={0.5} style={{ height: '30vw', width: '99%', marginTop: '55px', backgroundColor:'white' }}>
      
      <Grid item xs={4.5}>
        <Card style={{ height: '54vh', width: '100%', backgroundColor:'aliceblue'}}>
          <CardContent>
            <Typography variant="h5" component="h4">
              Internship Insights
            </Typography>
            <Typography color="black">
              In the eighteenth century, the German philosopher Immanuel Kant developed a theory of knowledge in which knowledge about space can be both a priori and synthetic.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      
      <Grid item xs={7}>
        <div >
          <Card style={{ height: '24.5vw',width: '55vw', backgroundColor:'aliceblue' }}>
            
              <CardContent>
                    <Button variant="contained" color="primary" size="small" style={{ marginRight: '25px', backgroundColor: 'purple' }}>This week</Button>
                    <Button variant="contained" color="secondary" size="small" style={{ marginRight: '18vw', backgroundColor: 'white', color:'black' }}>This month</Button>
                    <Button variant="outlined" color="primary" size="small">Select dates</Button>
                    <Chart data={enrolmentData} grid dataKey="Activity" />
               </CardContent>    
                
                
                
                
              
              

              
            
          </Card>
        </div>
      </Grid>
     
    </Grid>
  );
};

export default MyCardComponent;
