import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../user.service';
import { Router, ActivatedRoute } from '@angular/router';
export interface User{
  email:string;
  password:string;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  submitted=false;
  formArray;
  userCols;
  userData:User={email:null,password:null};
  error;
  success;
  return;
  constructor(private actRoute:ActivatedRoute, private formBuilder:FormBuilder, private userService:UserService, private route:Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
    email: [null, [Validators.required, Validators.email]],
    password: [null, [Validators.required, Validators.minLength(6)]]
    });
    this.actRoute.queryParams.subscribe(params => this.return = params['return'] || '/profile');
    console.log(this.return);
  }

  get f() { return this.loginForm.controls; }
  data(){
    this.formArray =this.loginForm.controls;
    console.log(this.formArray);
    Object.keys(this.formArray).forEach(key => {
      this.userData[key] = this.formArray[key].value;
    });
    console.log(this.userData);
  }  
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    this.data();
    this.userService.loginUser(this.userData).subscribe(data => {
      if(data.success==true){
        this.success="User Logged In";
        this.userService.userName.next(data.settings.name);
        localStorage.setItem('token', data.id_token);
        localStorage.setItem('data', JSON.stringify(data.settings));
        this.userService.isLoginSubject.next(true);
        Notification.requestPermission();
        this.route.navigateByUrl(this.return);
        this.error=null;
      }
      console.log(data);
    },
    error => {
      this.error=error.error['error'];
      this.success=null;
      // console.log(error.error);
    });
  }
}