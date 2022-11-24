import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { StorageService } from './services/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'web-app';
  constructor(private _authServices: AuthService, private _route: Router, private _storageService: StorageService) { 
    // This service is communincating between two component
    _authServices.emitChangeSource.subscribe((data:any) => {
      if (data) {
        this.isLogedIn = true;
      } else {
        this.isLogedIn = false;
       this.redirectToLoginPage();
      }
    });
  }

  isLoading = true;
  isLogedIn = false;
  ngOnInit(): void {
    this.isLogedIn = this._storageService.isLoggedIn();
    if (this._storageService.isLoggedIn()) {
      this._authServices.checkToken().subscribe((token: any) => {
        this.isLoading = false
      }, 
      (error: any) => {
        this._authServices.emitChange(null);
       this.redirectToLoginPage();
        this.isLoading = false
      });
    } else {
      this._authServices.emitChange(null);
     this.redirectToLoginPage();
      this.isLoading = false
    }
  }

  private redirectToLoginPage():void {
    this._route.navigate(['/login']);
  }

}
