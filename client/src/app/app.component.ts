import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './components/users/login/login.component';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './components/users/signup/signup.component';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,
    RouterOutlet, 
    LoginComponent,
    SignupComponent,DashboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'client';
}
