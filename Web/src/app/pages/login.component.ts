import { BrowserModule } from '@angular/platform-browser';
import { Component, NgModule, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { catchError, finalize, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [CommonModule,FormsModule,HttpClientModule],
})
export class LoginComponent {
  // Properties for form fields
  email: string = '';
  password: string = '';
  errorMessage: string = '';
  isLoading: boolean = false; // Used for loading state of the button

  constructor(private http: HttpClient) {}

  ngOnInit() {}
  // Method to handle the form submission
  onLoginSubmitSubscribe() {
    console.log('Email:', this.email);
    console.log('Password:', this.password);

    // Form data to be sent in the request
    const userData = {
      id: 0,
      userName: 'string', // Assuming you will fill this value later
      email: this.email,
      password: this.password,
    };

    this.isLoading = true; // Set loading state to true

    // POST request to the backend API
    this.http
      .post('http://localhost:8080/api/User/register', userData)
      .subscribe(
        (response) => {
          console.log('Response:', response);
          this.isLoading = false; // Set loading state to false on success
        },
        (error) => {
          console.error('Error:', error);
          this.errorMessage = 'An error occurred while registering.';
          this.isLoading = false; // Set loading state to false on error
        }
      );
  }

  onLoginSubmit(){
    console.log('Email:', this.email);
    console.log('Password:', this.password);
  
    const userData = {
      id: 0,
      userName: 'string',
      email: this.email,
      password: this.password
    };
  
    this.isLoading = true; // Start loading state
  
    this.http.post('http://localhost:8080/api/User/register', userData)
      .pipe(
        tap(response => console.log('Response:', response)), // ✅ Log response
        catchError(error => {
          console.error('Error:', error);
          this.errorMessage = 'An error occurred while registering.';
          return throwError(() => error); // ✅ Return an observable error
        }),
        finalize(() => this.isLoading = false) // ✅ Always stop loading
      )
      .subscribe();
  }

  // Simulate authentication (replace with actual backend integration)
  authenticateUser(email: string, password: string) {}
}
