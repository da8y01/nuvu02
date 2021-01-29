import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  configUrl = `http://localhost:3000`
  options = {
    // responseType: {json: 'json'},
    observe: 'response' as const
  };

  constructor(private http: HttpClient) { }

  getHome(): Observable<HttpResponse<User>> {
    return this.http.get<User>(this.configUrl, this.options);
  }

  postUser(user: User): Observable<HttpResponse<User>> {
    return this.http.post<User>(`${this.configUrl}/users/signup`, user, this.options);
  }
}
