import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
 providedIn: 'root',
})
export class AuthService {
 private baseUrl = 'http://localhost:8080'; // Replace with your backend API URL

 constructor(private http: HttpClient) {}

 // User registration API endpoint
 register(user: any): Observable<any> {
   const registrationUrl = `${this.baseUrl}/register`;
   const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json', // Set the content type to JSON
    }),
  };
   return this.http.post(registrationUrl, user, httpOptions);
 }

 // User login API endpoint
 login(email: string, password: string): Observable<any> {
   const loginUrl = `${this.baseUrl}/login`;
   const credentials = { email, password };
   const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json', // Set the content type to JSON
    }),
  };
   return this.http.post(loginUrl, credentials, httpOptions);
 }
}