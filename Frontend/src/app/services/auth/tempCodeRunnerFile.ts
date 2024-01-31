import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: any;
  apiurl = "http://localhost:5001/api/users";

  constructor(private httpClient: HttpClient) { }

  checkAuth(email: any, password: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.httpClient.post(`${this.apiurl}/login`, { email, password }, { headers }).pipe(
      catchError((error) => {
        console.error('Authentication error:', error);
        return throwError(error);
      }),
     
      tap((response: any) => {
        this.token = response.accessToken; 
       
      })
    );
  }
  Signup(name:any,email:any,password:any){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.httpClient.post(`${this.apiurl}/register`,{name,email,password},{headers}).pipe(
      catchError((error)=>{
        console.error('Sign up error:',error);
        return throwError(error);
      })
    );
  }

  logOut() {
    this.token = undefined;
    localStorage.removeItem('token');
    
  }
}