import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  registerUser(userData:any[]){
    let httpHeaders = new HttpHeaders({
      'Content-Type' : 'application/json',
      'Cache-Control': 'no-cache'
    }); 
    let options = {
      headers: httpHeaders
    };
    return this.http.post("http://prelay-api.herokuapp.com/v1/user/signup?key=MOCK1234", userData, options);
  }

  loginUser(userData:any[]){
    return this.http.post("http://prelay-api.herokuapp.com/v1/user/login?key=MOCK1234", userData);
  }
}
