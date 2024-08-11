// Dashboard.js
import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import Header from '../common/Header/HeaderComponent';
import Footer from '../common/Footer/FooterComponent';
import Carousel from '../common/Carousel/CarouselComponent';
import { trendingChefs, trendingDishes } from '../common/utils';

const Dashboard = () => {
  // Mock logged-in status and logout handler
  const [isLoggedIn, setIsLoggedIn] = React.useState(true);
  const handleLogout = () => setIsLoggedIn(false);

  return (
    <Box>
      <Container maxWidth="lg" style={{ padding: '20px' }}>
        <Typography variant="h4" gutterBottom>
          Trending Dishes
        </Typography>
        <Carousel items={trendingDishes} type="dish" />
        <Typography variant="h4" gutterBottom style={{ marginTop: '40px' }}>
          Trending Chefs
        </Typography>
        <Carousel items={trendingChefs} type="chef" />
      </Container>
    </Box>
  );
};

export default Dashboard;
