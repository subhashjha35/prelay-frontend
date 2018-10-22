import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  registerForm:FormGroup;
  submitted=false;
  formArray;
  userCols;
  userData:any[]=[];

  constructor(private formBuilder:FormBuilder, private userService:UserService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get f() { return this.loginForm.controls; }
  data(){
    this.formArray =this.loginForm.controls;
    console.log(this.formArray);
    Object.keys(this.formArray).forEach(key => {
      this.userData.push({[key] : this.formArray[key].value})
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
      console.log("Request completed");
  });
}
