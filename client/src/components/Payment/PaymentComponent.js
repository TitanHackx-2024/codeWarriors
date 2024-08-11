// src/components/Payment/PaymentComponent.js
import React, { useState } from 'react';
// import PaymentService from '../../services/PaymentService';
import { Button, TextField, Container, Typography, Paper } from '@mui/material';

function PaymentComponent() {
  const [amount, setAmount] = useState('');

  const handlePayment = async () => {
    try {
      // await PaymentService.processPayment(amount);
      // Handle successful payment
    } catch (error) {
      // Handle error
    }
  };

  return (
    <Container className="p-6 bg-gray-100 min-h-screen">
      <Paper elevation={3} className="p-6">
        <Typography variant="h5" gutterBottom className="mb-6 text-gray-700">
          Payment
        </Typography>
        <TextField
          label="Amount"
          type="number"
          variant="outlined"
          fullWidth
          margin="normal"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <Button
          onClick={handlePayment}
          variant="contained"
          color="primary"
          fullWidth
          className="mt-4"
        >
          Pay Now
        </Button>
      </Paper>
    </Container>
  );
}

export default PaymentComponent;
