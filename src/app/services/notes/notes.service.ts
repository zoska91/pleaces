import { Resp } from './../../models/Resp';
import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Note } from 'src/app/models/Note';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  private API: string = 'http://localhost:8080/api';
  private token: string = localStorage.getItem('login');

  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: this.token
    })
  };

  getAllNotes(): Observable<Resp> {
    const url: string = `${this.API}/notes/get-all`;
    return this.http
      .get<Resp>(url, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  addNote(data: Note): Observable<Resp> {
    const url: string = `${this.API}/notes/add`;
    return this.http
      .post<Resp>(url, data, this.httpOptions)
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
