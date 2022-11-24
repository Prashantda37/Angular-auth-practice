import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, take, map, catchError, of } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { StorageService } from '../services/storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private _storageService: StorageService, private _router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this._storageService.isLoggedIn()) {
      return true;
    } else {
      return this._router.createUrlTree(['/login'])
    }
    
      // return false;
      // return this._authService.checkToken()
      //   .pipe(
      //       take(1),
      //       map((res: any) => {
      //         if (res?.user) {
      //           return true;
      //         }
              
      //         return this._router.createUrlTree(['/login'])
      //       }
      //     ),
      //     catchError(err => {
      //       return of('error', err)
      //     })
      //   )
      // .subscribe((res: any) => {
      //   if (res?.user) {
      //     return true;
      //   }
      // });
    
  }
  
}
