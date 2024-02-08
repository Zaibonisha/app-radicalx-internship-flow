import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';

const cardStyles = {
  width: '200px', 
  height: '250px', 
  marginBottom: '20px',
  marginRight: '20px', // Add margin to create space between cards
};

const apprenticeshipStyles = {
  width: '80%',
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'flex-start', // Adjust alignment to start
  flexWrap: 'wrap', // Allow cards to wrap to the next line if needed
};

const Apprenticeship = () => {
  const [apprenticeships, setApprenticeships] = useState(() => {
    const storedApprenticeships = localStorage.getItem('apprenticeships');
    return storedApprenticeships ? JSON.parse(storedApprenticeships) : [
      { title: 'Apprenticeship 1', description: 'Description for Job 1.' },
      { title: 'Apprenticeship 2', description: 'Description for Job 2.' },
      { title: 'Apprenticeship 3', description: 'Description for Job 3.' },
      { title: 'Apprenticeship 4', description: 'Description for Job 4.' },
    ];
  });

  useEffect(() => {
    localStorage.setItem('apprenticeships', JSON.stringify(apprenticeships));
  }, [apprenticeships]);

  const addCard = () => {
    const newApprenticeships = [...apprenticeships];
    newApprenticeships.push({
      title: `Apprenticeship ${newApprenticeships.length + 1}`,
      description: `Description for Job ${newApprenticeships.length + 1}.`,
    });
    setApprenticeships(newApprenticeships);
  };

  return (
    <div style={{ width: '80%', margin: '0 auto' }}>
      <div style={apprenticeshipStyles}>
        {apprenticeships.map((apprenticeship, index) => (
          <Card key={index} style={cardStyles}>
            <CardContent>
              <Typography variant="h5" component="div">
                {apprenticeship.title}
              </Typography>
              <Typography color="text.secondary">
                {apprenticeship.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
      <Button onClick={addCard} variant="contained" color="primary">
        Add Card
      </Button>
    </div>
  );
};

export default Apprenticeship;

