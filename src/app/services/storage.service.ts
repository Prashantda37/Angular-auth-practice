import { Injectable } from '@angular/core';
import { USER_KEY } from '../constants';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private _authService: AuthService) { }

  clean(): void {
    this._authService.emitChange(null); // update app.component
    window.sessionStorage.clear();
  }

  public saveUser(user: any): void {
    window.sessionStorage.removeItem(USER_KEY); // to be change it into cookies
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser(): any {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }

    return {};
  }

  public getToken() {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      const { access_token } = JSON.parse(user);
      return access_token;
    }
    this.clean();
  }

  public isLoggedIn(): boolean {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return true;
    }

    return false;
  }
}
