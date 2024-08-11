import React, { useState, useEffect } from 'react';
import { Button, TextField, Container, Typography, Paper, Box, Snackbar, Alert } from '@mui/material';
import { useParams } from 'react-router-dom';

function BookingFormComponent({ userId }) {
  const { chefId } = useParams(); // Extract chefId from the URL
  const [date, setDate] = useState('');
  const [chefDetails, setChefDetails] = useState(null);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');

  useEffect(() => {
    const fetchChefDetails = async () => {
      try {
        const response = await fetch(`http://localhost:9000/api/chefs/${chefId}`);
        if (response.ok) {
          const data = await response.json();
          setChefDetails(data);
        } else {
          console.error('Failed to fetch chef details');
        }
      } catch (error) {
        console.error('An error occurred:', error);
      }
    };

    fetchChefDetails();
  }, [chefId]);

  const handleBooking = async () => {
    const bookingData = {
      chefId: chefId,
      userId: userId,
      date: date,
    };

    try {
      const response = await fetch('http://localhost:9000/api/booking/bookchef', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingData),
      });

      if (response.ok) {
        const result = await response.json();
        if (result.responseStatus === 'SUCCESS') {
          setSnackbarMessage('Booking successful!');
          setSnackbarSeverity('success');
          setOpenSnackbar(true);
        } else {
          setSnackbarMessage('Booking failed!');
          setSnackbarSeverity('error');
          setOpenSnackbar(true);
        }
      } else {
        const errorResult = await response.json();
        setSnackbarMessage('Booking failed: ' + errorResult.message);
        setSnackbarSeverity('error');
        setOpenSnackbar(true);
      }
    } catch (error) {
      setSnackbarMessage('An error occurred: ' + error.message);
      setSnackbarSeverity('error');
      setOpenSnackbar(true);
      console.error('An error occurred:', error);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Container className="p-6 bg-gray-100 min-h-screen">
      <Paper elevation={3} className="p-6">
        <Typography variant="h5" gutterBottom className="mb-6 text-gray-700">
          Book a Chef
        </Typography>
        {chefDetails && (
          <Box mb={4}>
            <Typography variant="h6" className="mb-2 text-gray-700">
              Chef: {chefDetails.name}
            </Typography>
            <Typography variant="body1" className="mb-2 text-gray-700">
              Specialization: {chefDetails.skills}
            </Typography>
            {/* Display other chef details as needed */}
          </Box>
        )}
        <TextField
          type="date"
          variant="outlined"
          fullWidth
          margin="normal"
          value={date}
          onChange={(e) => setDate(e.target.value)}
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
        <Snackbar
          open={openSnackbar}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
          message={snackbarMessage}
        >
          <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity} sx={{ width: '100%' }}>
            {snackbarMessage}
          </Alert>
        </Snackbar>
      </Paper>
    </Container>
  );
}

export default BookingFormComponent;
