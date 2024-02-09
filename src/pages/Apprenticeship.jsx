import React, { useState, useEffect } from 'react';
import { Card, CardContent, Button, TextField } from '@mui/material';

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
    return storedApprenticeships
      ? JSON.parse(storedApprenticeships)
      : [
          { id: 1 },
          { id: 2 },
          { id: 3 },
          { id: 4 },
        ];
  });

  useEffect(() => {
    localStorage.setItem('apprenticeships', JSON.stringify(apprenticeships));
  }, [apprenticeships]);

  const addCard = () => {
    const newApprenticeships = [...apprenticeships];
    newApprenticeships.push({
      id: new Date().getTime(), // generate unique id
    });
    setApprenticeships(newApprenticeships);
  };

  const handleEdit = (id, updatedTitle, updatedDescription) => {
    const updatedApprenticeships = apprenticeships.map((apprenticeship) => {
      if (apprenticeship.id === id) {
        return {
          ...apprenticeship,
          title: updatedTitle,
          description: updatedDescription,
        };
      }
      return apprenticeship;
    });
    setApprenticeships(updatedApprenticeships);
  };

  return (
    <div style={{ width: '80%', margin: '0 auto' }}>
      <div style={apprenticeshipStyles}>
        {apprenticeships.map((apprenticeship) => (
          <Card key={apprenticeship.id} style={cardStyles}>
            <CardContent>
              <TextField
                label="Title"
                defaultValue={apprenticeship.title}
                onChange={(e) => handleEdit(apprenticeship.id, e.target.value, apprenticeship.description)}
              />
              <TextField
                label="Description"
                defaultValue={apprenticeship.description}
                onChange={(e) => handleEdit(apprenticeship.id, apprenticeship.title, e.target.value)}
              />
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
