import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  isLoginSubject = new BehaviorSubject<boolean>(this.hasToken());
  constructor(private http:HttpClient, private route:Router ) { 
  }
  
  isLoggedIn() : Observable<boolean> {
    console.log(this.isLoginSubject.asObservable());
    return this.isLoginSubject.asObservable();
  }
  hasToken():boolean{
    return !!localStorage.getItem('token');
  }
  registerUser(userData){
    let httpHeaders = new HttpHeaders({
      'Content-Type' : 'application/json',
      'Cache-Control': 'no-cache'
    }); 
    let options = {
      headers: httpHeaders
    };
    return this.http.post("https://prelay-api.herokuapp.com/v1/user/signup?key=MOCK1234", userData, options);
  }

  loginUser(userData){
    return this.http.post("https://prelay-api.herokuapp.com/v1/user/login?key=MOCK1234", userData);
  }
  logout() : void {
    localStorage.removeItem('token');
    this.isLoginSubject.next(false);
    this.route.navigate(['\login']);
  }
}
