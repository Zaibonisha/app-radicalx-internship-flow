import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Chart from '../components/Internships';
import { enrolmentData } from "../dummyData";
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

const MyCardComponent = ({ title, description }) => {
  return (
    <Grid container spacing={0.5} style={{ height: '27vw', width: '99%', marginTop: '55px', backgroundColor:'white' }}>
      
      <Grid item xs={4.5}>
        <Card style={{ height: '26.7vw', width: '100%', backgroundColor:'aliceblue'}}>
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
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
          <Card style={{ width: '100%', backgroundColor:'aliceblue' }}>
            <Grid container spacing={0}>
              <Grid item xs={6}>
                <Card style={{ height: '60px', width: '55vw', backgroundColor:'aliceblue' }}>
                  <CardContent>
                    <Button variant="contained" color="primary" size="small" style={{ marginRight: '25px', backgroundColor: 'purple' }}>This week</Button>
                    <Button variant="contained" color="secondary" size="small" style={{ marginRight: '23vw', backgroundColor: 'white', color:'black' }}>This month</Button>
                    <Button variant="outlined" color="primary" size="small">Select dates</Button>
                  </CardContent>
                </Card>
                <Grid container spacing={0.5} style={{ height: '20vw', width: '45vw', marginTop: '55px', backgroundColor:'white' }}>
                <div style={{ height: '50vw', width: '90vw', aspectRatio: '4/3' }}>
                <Chart data={enrolmentData} grid dataKey="Activity" />
                </div>
              </Grid>
              </Grid>

              
            </Grid>
          </Card>
        </div>
      </Grid>
     
    </Grid>
  );
};

export default MyCardComponent;
