// import { Routes } from '@angular/router';

// export const routes: Routes = [];

// import { Routes } from '@angular/router';
import { BookingFormComponent } from './components/booking/booking-form/booking-form.component';
import { ChefListComponent } from './components/chef/chef-list/chef-list.component';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
import { LoginComponent } from './components/users/login/login.component';
import { ProfileComponent } from './components/users/profile/profile.component';
import { SignupComponent } from './components/users/signup/signup.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import your components


// Define the routes
 const routes: Routes = [
  // User-related routes
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  // Redirect to the login page if the route is not recognized
  // { path: '', redirectTo: '/login', pathMatch: 'full' },
  // { path: '**', redirectTo: '/login' }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }