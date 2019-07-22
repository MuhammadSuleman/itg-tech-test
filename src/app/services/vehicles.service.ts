import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { forkJoin } from 'rxjs';

@Injectable()
export class vehiclesService {
  constructor(private httpClient: HttpClient) { }

  getVehicleName(): Observable<any> {
    return this.httpClient.get('https://itg-prd-recruit.appspot.com/api/vehicles/')
      .pipe(
        catchError(this.handleError)
      );
  }

  getVehicleDescription(id): Observable<any> {
    return this.httpClient.get('https://itg-prd-recruit.appspot.com/api/vehicle/xe')
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };
}