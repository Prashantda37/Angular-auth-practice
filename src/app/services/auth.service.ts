import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { BASE_URL } from '../constants';
import { LoginModel } from '../models/login.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  public authentication (data: LoginModel): Observable<any> {
    return this.http.post(`${BASE_URL}/login`, data);
  }
  
  // This will into user services
  public getUsers() {
    return this.http.get(`${BASE_URL}/users`);
  }

  public userUpdate (source: String, data: any): Observable<any> {
    return this.http.patch(`${BASE_URL}/user/${source}`, data);
  }

  public checkToken() {
    return this.http.post(`${BASE_URL}/token`, null);
  }

  // Observable string sources is communicating for child to parent component(avoiding @output communnnnication for login page is navigating to inner page.)
  emitChangeSource = new Subject<any>();
  
  emitChange(change: any) {
      this.emitChangeSource.next(change); // changed value
  }
}
