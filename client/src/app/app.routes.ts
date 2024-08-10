import { provideRouter, Routes } from '@angular/router';
import { SignupComponent } from './components/users/signup/signup.component';
import { LoginComponent } from './components/users/login/login.component';
import { ApplicationConfig } from '@angular/core';
import { BookingFormComponent } from './components/booking/booking-form/booking-form.component';
import { ChefListComponent } from './components/chef/chef-list/chef-list.component';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
import { ProfileComponent } from './components/users/profile/profile.component';

export const routes: Routes = [
    // User-related routes
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'profile', component: ProfileComponent },

  // Chef-related routes
  { path: 'chefs', component: ChefListComponent },

  // Booking-related routes
  { path: 'bookings/new', component: BookingFormComponent },

  // Payment-related routes

  // Dashboard route for logged-in users
  { path: 'dashboard', component: DashboardComponent },

  // Redirect to the login page if the route is not recognized
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }
];
// export const appConfig: ApplicationConfig = {
//     providers: [
//       provideRouter(routes)
//     ]
//   };