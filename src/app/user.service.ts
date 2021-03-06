import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';

interface UserLoginResponseType{
  id_token:string;
  settings:{
    name:string;
    subscribed: boolean;
  },
  success: boolean;
}
@Injectable({
  providedIn: 'root'
})
export class UserService {
  userName= new BehaviorSubject<string>(null);
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

  loginUser(userData):any{
    return this.http.post("https://prelay-api.herokuapp.com/v1/user/login?key=MOCK1234", userData);
  }
  logout() : void {
    localStorage.removeItem('token');
    localStorage.removeItem('data');
    this.userName.next(null);
    this.isLoginSubject.next(false);
    this.route.navigate(['\login']);
  }
  getUserDetails(){
    let token:string=localStorage.getItem('token');
    return this.http.get("https://prelay-api.herokuapp.com/v1/user/getSettings?key="+token);
  }
  subscribeNotification(subscribe){
    let newData:string=null;
    let token:string=localStorage.getItem('token');
    if(subscribe)
      return this.http.post("https://prelay-api.herokuapp.com/v1/user/subscribe?key="+token, newData);
    else
      return this.http.post("https://prelay-api.herokuapp.com/v1/user/unsubscribe?key="+token, newData);
  }
}
