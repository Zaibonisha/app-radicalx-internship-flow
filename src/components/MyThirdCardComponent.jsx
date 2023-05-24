import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Chart from '../components/Internships';
import { enrolmentData } from "../dummyData";

const MyCardComponent = ({ title, description }) => {
  return (
    <Card style={{ height: '30vw', width: '', justifyContent: 'space-between'}}>
      
      <CardContent>
        <Typography variant="h3" component="h2">
          Internships
        </Typography>
        <Typography color="black">
          In the eighteenth century the German philosopher Immanuel Kant developed a theory of knowledge in which 
          knowledge about space can be both a priori and synthetic.
        </Typography>
        
      </CardContent>
      
     
    </Card>
  );
};