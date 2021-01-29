import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { User, GetUser } from './user';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  configUrl = `http://localhost:3000`
  options = {
    // responseType: {json: 'json'},
    observe: 'response' as const
  }

  constructor(private http: HttpClient) { }

  getHome(): Observable<HttpResponse<User>> {
    return this.http.get<User>(this.configUrl, this.options);
  }

  getUser(email): Observable<HttpResponse<User>> {
    return this.http.get<User>(`${this.configUrl}/users/${email}?secure_token=${localStorage.getItem('secure_token')}`, this.options);
  }

  postUser(user: User): Observable<HttpResponse<User>> {
    return this.http.post<User>(`${this.configUrl}/users/signup`, user, this.options);
  }

  loginUser(user: User): Observable<HttpResponse<GetUser>> {
    return this.http.post<GetUser>(`${this.configUrl}/users/login`, user, this.options);
  }

  updateUser(user: User): Observable<HttpResponse<User>> {
    return this.http.put<User>(`${this.configUrl}/users/${user.email}`, user, this.options);
  }
}
