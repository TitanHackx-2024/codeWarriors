import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { LoginComponent } from './components/users/login/login.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { SignupComponent } from './components/users/signup/signup.component';
// import { routes } from './app.routes';
@NgModule({
  declarations: [
    // AppComponent,
    // LoginComponent,
    // SignupComponent
  ],
  imports: [
    // CommonModule,
    BrowserModule,
    // RouterModule,
    RouterModule.forRoot(routes)
    // AppRoutingModule
  ],
  exports:[
    // LoginComponent,
    // SignupComponent
  ],
  // bootstrap: [AppComponent]

})
export class AppModule { }
