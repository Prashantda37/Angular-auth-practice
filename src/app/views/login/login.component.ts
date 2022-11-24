import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginModel } from 'src/app/models/login.model';
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  constructor(
    private _router: Router, 
    private _authServices: AuthService,
    private _storageService: StorageService) { 
  }

  ngOnInit(): void {
    if (this._storageService.isLoggedIn()) {
      this.isLoggedIn = true;
      this._router.navigate(['/']);
      // this.roles = this._storageService.getUser().roles;
    }

  }
  isLoggedIn = false
  model = new LoginModel('', ''); // to be created.. like new LoginModel();
  submitted = false;
  error = null;

  onSubmit() {
    this.submitted = false;
    this._authServices.authentication(this.model)
    .subscribe((data:any) => {
      this._storageService.saveUser(data);
      // update services and get login status into app.component
      this._authServices.emitChange(data);// this._authServices.emitChangeSource.next(change);
      // this.isLoginFailed = false;
      this.isLoggedIn = true;
      this._router.navigate(['/']);
      // this.roles = this._storageService.getUser().roles; role to be added in future
    },
    (err: any) => {
      const { error } = err;
      this.error = error.message || err?.statusText;
    });
  }
}
