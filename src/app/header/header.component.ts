import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { UserService } from '../user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userData;
  userName;
  isLoggedIn:boolean;
  constructor(private userService:UserService) { 
    this.userService.isLoggedIn().subscribe(val=>this.isLoggedIn=val);
    if(this.isLoggedIn){
      this.userService.userName.subscribe(data=>{
        this.userName=data;
      })
      console.log(this.userName);
    }
    console.log(this.isLoggedIn);
  }
  private logout():void{
    this.userService.logout();
  }
  ngOnInit() {
    
  }

}
