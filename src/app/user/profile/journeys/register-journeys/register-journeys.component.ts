import { Component, OnInit } from '@angular/core';
import { StationsService, stationType } from 'src/app/stations.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TransportService } from 'src/app/transport.service';
import { ScheduleModel } from 'src/app/schedule/schedule.component';
import {formatDate } from '@angular/common';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-register-journeys',
  templateUrl: './register-journeys.component.html',
  styleUrls: ['./register-journeys.component.css']
})
export class RegisterJourneysComponent implements OnInit {

  reqError;
  stn:stationType[];
  schdeduleReqData:any={selectedSource:null, selectedDestination: null};
  scheduleForm:FormGroup;
  submitted=false;
  formArray;
  error;
  success;

  today= new Date();
  jstoday = '';
  constructor(private userService: UserService,private station:StationsService, private formBuilder:FormBuilder, private transport:TransportService) { 
    this.stn=station.getList();
    console.log(this.stn);
  }

  ngOnInit() {
    this.scheduleForm = this.formBuilder.group({
      'selectedSource' : [null,[Validators.required]],
      'selectedDestination' : [null, [Validators.required]]
    });
  }
  get f() { return this.scheduleForm.controls; }
  data(){
    this.formArray =this.scheduleForm.controls;
    console.log(this.formArray);
    Object.keys(this.formArray).forEach(key => {
      console.log(key +" "+this.formArray[key].value);
      if(this.formArray[key].value.hasOwnProperty('id'))
        this.schdeduleReqData[key]=this.formArray[key].value.id;
      else
        this.schdeduleReqData[key] = this.formArray[key].value;
    });
    console.log(this.schdeduleReqData);
  }
  onSubmit(){
    this.reqError=null;
    this.submitted = true;
    console.log("submitted");
    this.data();
    this.transport.addToFavorite({"arrival_station": this.schdeduleReqData.selectedDestination, "departure_station": this.schdeduleReqData.selectedSource}).subscribe(data=>{
      console.log(data);
      this.userService.getUserDetails().subscribe(userData =>{
        localStorage.setItem('data',JSON.stringify(userData));
      });
      },
      error=>{
        console.log(error);
      }
    );
    // stop here if form is invalid
    if (this.scheduleForm.invalid) {
      return;
    }
  }
}
