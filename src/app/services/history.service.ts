import { Resp } from './../models/Resp';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Plan } from '../models/Plan';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  private API: string = 'http://localhost:8080/api';
  private token: string = localStorage.getItem('login');

  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: this.token
    })
  };

  getAllHistory(): Observable<Resp> {
    const url = `${this.API}/history/get-all`;
    return this.http
      .get<Resp>(url, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  getOneHistory(id: number): Observable<Resp> {
    const url: string = `${this.API}/history/get-one-history/${id}`;
    return this.http
      .get<Resp>(url, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  addHistory(data: Plan): Observable<Resp> {
    const url: string = `${this.API}/history/add`;
    return this.http
      .post<Resp>(url, data, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  deleteHistory(id: number): Observable<Resp> {
    const url = `${this.API}/history/${id}`;
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
