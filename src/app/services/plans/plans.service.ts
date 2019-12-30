import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { Resp } from './../../models/Resp';
import { Plan } from 'src/app/models/Plan';

@Injectable({
  providedIn: 'root'
})
export class PlansService {
  private API: string = 'http://localhost:8080/api';
  private token: string = localStorage.getItem('login');

  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: this.token
    })
  };

  getAllPlans(): Observable<Resp> {
    const url = `${this.API}/plans/get-all`;
    return this.http
      .get<Resp>(url, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  getOnePlan(id: number): Observable<Resp> {
    const url: string = `${this.API}/plans/get-one-plan/${id}`;
    return this.http
      .get<Resp>(url, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  addPlan(data: Plan): Observable<Resp> {
    const url: string = `${this.API}/plans/add`;
    return this.http
      .post<Resp>(url, data, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  deletePlan(id: number): Observable<Resp> {
    const url = `${this.API}/plans/${id}`;
    return this.http
      .delete<Resp>(url, this.httpOptions)
      .pipe(catchError(this.handleError));
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
