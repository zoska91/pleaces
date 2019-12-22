import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { Login } from './../../models/Login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLogin: boolean = localStorage.getItem('login') ? true : false;

  private API: string = 'http://localhost:8080/api';
  constructor(private http: HttpClient) {}

  loginUser(email: string, password: string): Observable<Login> {
    const url: string = `${this.API}/login`;
    const data = { email, password };
    return this.http.post<Login>(url, data).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    return throwError('Something bad happened; please try again later.');
  }
}
