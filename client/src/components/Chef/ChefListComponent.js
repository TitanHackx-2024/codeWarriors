import React from 'react';
import { Card, CardContent, CardActions, Button, Typography, Container, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import { chefs } from '../common/utils';

function ChefListComponent() {

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
