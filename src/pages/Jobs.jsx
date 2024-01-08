import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const cardStyles = {
  width: '200px', 
  height: '250px', 
  marginBottom: '20px',
};

const jobsStyles = {
  width: '80%',
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'space-between',
};

const Jobs = () => {
  return (
    <div style={jobsStyles}>
      <Card style={cardStyles}>
        <CardContent>
          <Typography variant="h5" component="div">
            Job 1
          </Typography>
          <Typography color="text.secondary">Description for Job 1.</Typography>
        </CardContent>
      </Card>

      <Card style={cardStyles}>
        <CardContent>
          <Typography variant="h5" component="div">
            Job 2
          </Typography>
          <Typography color="text.secondary">Description for Job 2.</Typography>
        </CardContent>
      </Card>

      <Card style={cardStyles}>
        <CardContent>
          <Typography variant="h5" component="div">
            Job 3
          </Typography>
          <Typography color="text.secondary">Description for Job 3.</Typography>
        </CardContent>
      </Card>

      <Card style={cardStyles}>
        <CardContent>
          <Typography variant="h5" component="div">
            Job 4
          </Typography>
          <Typography color="text.secondary">Description for Job 4.</Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Jobs;
