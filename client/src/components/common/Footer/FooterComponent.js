// src/components/common/Footer/FooterComponent.js
import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'background.paper',
        padding: 2,
        textAlign: 'center',
        position: 'fixed', // Fixes the footer at the bottom
        bottom: 0,
        width: '100%',
        left: 0,
        backgroundColor: '#f5f5f5', // Optional: Adjust background color if needed
        zIndex: 1300, // Ensure footer is above other content
      }}
    >
      <Typography variant="body2" color="text.secondary">
        © 2024 Your Company. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
