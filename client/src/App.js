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
import ProtectedRoute from './components/common/ProtoctedRoutes';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(null);
  // const navigate = useNavigate();

  const handleLogin = (userId) => {
    setIsLoggedIn(true);
    setUserId(userId);
  };

  console.log("--------------",userId);

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserId(null);
  };

  return (
    <Router>
      <Layout isLoggedIn={isLoggedIn} onLogout={handleLogout}>
        <Routes>
          <Route path="/login" element={<LoginComponent onLogin={handleLogin} />} />
          <Route path="/signup" element={<SignupComponent />} />
          
          <Route
            path="/"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <DashboardComponent />
              </ProtectedRoute>
            }
          />
          <Route
            path="/chefs"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <ChefListComponent />
              </ProtectedRoute>
            }
          />
          <Route
            path="/chefs/:id"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <ChefDetailComponent />
              </ProtectedRoute>
            }
          />
          <Route
            path="/booking/:chefId"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <BookingFormComponent userId={userId} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/payment"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <PaymentComponent />
              </ProtectedRoute>
            }
          />
          {/* <Route
            path="/notifications"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <NotificationComponent />
              </ProtectedRoute>
            }
          /> */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
