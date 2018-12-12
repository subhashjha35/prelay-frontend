import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  loginBool:boolean;
  constructor(private userService:UserService, private router: Router){ 

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): 
  Observable<boolean> | Promise<boolean> | boolean {
    this.userService.isLoginSubject.subscribe(data => this.loginBool=data);
    if (this.loginBool) {
      //console.log(this.userService.isLoggedIn());
      return this.loginBool;
    }
    else {
      console.log("User not Logged In");
      this.router.navigate(['/login'], {
        queryParams: {
          return: state.url
        }
      });
    }
    return false;
  }
}
