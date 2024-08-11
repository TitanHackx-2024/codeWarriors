// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginComponent from './components/Auth/LoginComponent';
import SignupComponent from './components/Auth/SignupComponent';
import ChefListComponent from './components/Chef/ChefListComponent';
import ChefDetailComponent from './components/Chef/ChefDetailComponent';
import BookingFormComponent from './components/Booking/BookingFormComponent';
import PaymentComponent from './components/Payment/PaymentComponent';
import DashboardComponent from './components/Dashboard/DashboardComponent';
import NotificationComponent from './components/Notifications/NotificationComponent';
import Layout from './components/common/Layout/LayoutComponent';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <Layout isLoggedIn={isLoggedIn} onLogout={handleLogout}>
        <Routes>
          <Route path="/" element={<DashboardComponent />} />
          <Route path="/login" element={<LoginComponent />} />
          <Route path="/signup" element={<SignupComponent />} />
          <Route path="/chefs" element={<ChefListComponent />} />
          <Route path="/chefs/:id" element={<ChefDetailComponent />} />
          <Route path="/booking" element={<BookingFormComponent />} />
          <Route path="/payment" element={<PaymentComponent />} />
          <Route path="/notifications" element={<NotificationComponent />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
