import React, { useState } from 'react';
import { Button, TextField, Container, Typography, Paper, Box } from '@mui/material';
import { useLocation } from 'react-router-dom';

function BookingFormComponent() {
  const location = useLocation();
  const chef = location.state?.chef || {}; // Retrieve chef details from state
  console.log(location.state);
  const [date, setDate] = useState('');
  const [chefId, setChefId] = useState('');

  const handleBooking = async () => {
    try {
      // await BookingService.book(chefId, date);
      // Handle successful booking
    } catch (error) {
      // Handle error
    }
  };

  return (
    <Container className="p-6 bg-gray-100 min-h-screen">
      <Paper elevation={3} className="p-6">
        <Typography variant="h5" gutterBottom className="mb-6 text-gray-700">
          Book a Chef
        </Typography>
        <Box mb={4}>
          {chef.name && (
            <Typography variant="h6" className="mb-2 text-gray-700">
              Chef: {chef.name}
            </Typography>
          )}
          {chef.skills && (
            <Typography variant="body1" className="mb-2 text-gray-600">
              Skills: {chef.skills}
            </Typography>
          )}
          {chef.availability && (
            <Typography variant="body1" className="mb-2 text-gray-600">
              Availability: {chef.availability}
            </Typography>
          )}
          {chef.rating && (
            <Typography variant="body1" className="mb-2 text-gray-600">
              Rating: {chef.rating}
            </Typography>
          )}
          {chef.bio && (
            <Typography variant="body1" className="mb-2 text-gray-600">
              Bio: {chef.bio}
            </Typography>
          )}
        </Box>
        <TextField
          type="date"
          variant="outlined"
          fullWidth
          margin="normal"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <TextField
          label="Chef ID"
          variant="outlined"
          fullWidth
          margin="normal"
          value={chefId}
          onChange={(e) => setChefId(e.target.value)}
        />
        <Button
          onClick={handleBooking}
          variant="contained"
          color="primary"
          fullWidth
          className="mt-4"
        >
          Book Now
        </Button>
      </Paper>
    </Container>
  );
}

export default BookingFormComponent;
