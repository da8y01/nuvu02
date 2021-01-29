import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  configUrl = `http://localhost:3000/`

  constructor(private http: HttpClient) { }

  getHome(): Observable<HttpResponse<User>> {
    const options = {
      // responseType: {json: 'jsom'},
      observe: 'response' as const
    };
    return this.http.get<User>(this.configUrl, options);
  }
}
