import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, retry } from "rxjs/operators";
import { API_Kay_TOM_TOM as apiKey } from "../../config";

@Injectable({
  providedIn: "root"
})
export class SearchOnMapService {
  constructor(private http: HttpClient) {}

  private url: string;
  private baseURL: string = "api.tomtom.com";
  private versionNumber: number = 2;
  private ext: string = "json";
  private language: string = "pl-PL";
  private limit: number = 1;

  createURL(value, country): void {
    const url = `https://${this.baseURL}/search/${
      this.versionNumber
    }/search/${value}.${this.ext}?${
      country ? `&countrySet=${country}` : null
    }&language=${this.language}&limit=${this.limit}&key=${apiKey}`;

    this.url = url;
  }

  searchPlace(): Observable<object> {
    this.createURL("twardogóra", null);
    return this.http.get(this.url).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error("An error occurred:", error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    return throwError("Something bad happened; please try again later.");
  }
}
