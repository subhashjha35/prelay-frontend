import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private userService:UserService, private router: Router){ 

  }
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): 
  Observable<boolean> | Promise<boolean> | boolean {
    if (this.userService.isLoggedIn()) {
      //console.log(this.userService.isLoggedIn());
      return this.userService.isLoggedIn();
    }

    this.router.navigate['/login'];
    return false;
  }
}
