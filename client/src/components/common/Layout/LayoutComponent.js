// src/components/Layout/LayoutComponent.js
import React from 'react';
import { Box } from '@mui/material';
import Header from '../Header/HeaderComponent';
import Footer from '../Footer/FooterComponent';

const Layout = ({ children, isLoggedIn, onLogout }) => {
  return (
    <Box>
      <Header isLoggedIn={isLoggedIn} onLogout={onLogout} />
      <Box component="main" style={{ padding: '20px' }}>
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;
