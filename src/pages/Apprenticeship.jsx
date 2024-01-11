import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const cardStyles = {
  width: '20vw', 
  height: '25vh', 
  marginBottom: '50px',
};

const apprenticeshipStyles = {
  width: '80%',
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'space-between',
};

const Apprenticeship = () => {
  return (
    <div style={apprenticeshipStyles}>
      <Card style={cardStyles}>
        <CardContent>
          <Typography variant="h5" component="div">
            Apprenticeship 1
          </Typography>
          <Typography color="text.secondary">Description for Apprenticeship 1.</Typography>
        </CardContent>
      </Card>

      <Card style={cardStyles}>
        <CardContent>
          <Typography variant="h5" component="div">
            Apprenticeship 2
          </Typography>
          <Typography color="text.secondary">Description for Apprenticeship 2.</Typography>
        </CardContent>
      </Card>

      <Card style={cardStyles}>
        <CardContent>
          <Typography variant="h5" component="div">
            Apprenticeship 3
          </Typography>
          <Typography color="text.secondary">Description for Apprenticeship 3.</Typography>
        </CardContent>
      </Card>

      <Card style={cardStyles}>
        <CardContent>
          <Typography variant="h5" component="div">
            Apprenticeship 4
          </Typography>
          <Typography color="text.secondary">Description for Apprenticeship 4.</Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Apprenticeship;
