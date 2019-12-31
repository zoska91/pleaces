import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { Resp } from '../../models/Resp';
import { User } from './../../models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLogin: boolean = localStorage.getItem('login') ? true : false;

  private API: string = 'http://localhost:8080/api';
  constructor(private http: HttpClient) {}

  loginUser(email: string, password: string): Observable<Resp> {
    const url: string = `${this.API}/login`;
    const data = { email, password };
    return this.http.post<Resp>(url, data).pipe(catchError(this.handleError));
  }

  signupUser(user: User): Observable<Resp> {
    console.log(user);
    const url: string = `${this.API}/signup`;

    return this.http.post<Resp>(url, user).pipe(catchError(this.handleError));
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
