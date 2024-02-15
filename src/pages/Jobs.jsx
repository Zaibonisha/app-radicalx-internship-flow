import React, { useState, useEffect } from 'react';
import { Card, CardContent, Button, TextField } from '@mui/material';

const cardStyles = {
  width: '200px',
  height: '250px',
  marginBottom: '20px',
  marginRight: '20px', // Add margin to create space between cards
};

const jobsStyles = {
  width: '80%',
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'flex-start', // Adjust alignment to start
  flexWrap: 'wrap', // Allow cards to wrap to the next line if needed
};

const Jobs = () => {
  const [jobs, setJobs] = useState(() => {
    const storedJobs = localStorage.getItem('jobs');
    return storedJobs
      ? JSON.parse(storedJobs)
      : [
          { id: 1, title: '', description: '' },
          { id: 2, title: '', description: '' },
          { id: 3, title: '', description: '' },
          { id: 4, title: '', description: '' },
        ];
  });

  useEffect(() => {
    localStorage.setItem('jobs', JSON.stringify(jobs));
  }, [jobs]);

  const addCard = () => {
    const newJobs = [...jobs];
    newJobs.push({
      id: new Date().getTime(), // generate unique id
      title: '',
      description: '',
    });
    setJobs(newJobs);
  };

  const handleEdit = (id, updatedTitle, updatedDescription) => {
    const updatedJobs = jobs.map((job) => {
      if (job.id === id) {
        return {
          ...job,
          title: updatedTitle,
          description: updatedDescription,
        };
      }
      return job;
    });
    setJobs(updatedJobs);
  };

  const handleDelete = (id) => {
    const updatedJobs = jobs.filter((job) => job.id !== id);
    setJobs(updatedJobs);
  };

  return (
    <div style={{ width: '80%', margin: '0 auto' }}>
      <div style={jobsStyles}>
        {jobs.map((job) => (
          <Card key={job.id} style={cardStyles}>
            <CardContent>
              <TextField
                label="Title"
                value={job.title}
                onChange={(e) => handleEdit(job.id, e.target.value, job.description)}
              />
              <TextField
                label="Description"
                value={job.description}
                onChange={(e) => handleEdit(job.id, job.title, e.target.value)}
              />
              <Button onClick={() => handleDelete(job.id)} color="error">
                Delete
              </Button>
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

export default Jobs;
