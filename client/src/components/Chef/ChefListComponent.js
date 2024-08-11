import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardActions, Button, Typography, Container, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

function ChefListComponent() {
  const [chefs, setChefs] = useState([]);

  // Fetch data from API
  useEffect(() => {
    const fetchChefs = async () => {
      try {
        const response = await fetch('http://localhost:9000/api/chefs/getAllChefs'); // Replace with your API URL
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setChefs(data); // Update state with the fetched data
      } catch (error) {
        console.error('Error fetching chef data:', error);
      }
    };

    fetchChefs();
  }, []); // Empty dependency array ensures this runs once when the component mounts

  return (
    <Container className="p-6 bg-gray-100 min-h-screen">
      <Typography variant="h5" gutterBottom className="mb-6 text-gray-700">
        Available Chefs
      </Typography>
      <Grid container spacing={3}>
        {chefs.map((chef) => (
          <Grid item xs={12} sm={6} md={4} key={chef.id}>
            <Card>
              <CardContent>
                <Typography variant="h6" component="div">
                  {chef.name}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Skills: {chef.skills}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Availability: {chef.availability}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Rating: {chef.rating}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  component={Link}
                  to={`/chefs/${chef.id}`}
                  variant="contained"
                  color="primary"
                >
                  View Details
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default ChefListComponent;
