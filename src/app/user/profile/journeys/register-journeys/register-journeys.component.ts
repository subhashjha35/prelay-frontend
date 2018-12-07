import { Component, OnInit } from '@angular/core';
import { StationsService, stationType } from 'src/app/stations.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TransportService } from 'src/app/transport.service';
import { ScheduleModel } from 'src/app/schedule/schedule.component';
import {formatDate } from '@angular/common';

@Component({
  selector: 'app-register-journeys',
  templateUrl: './register-journeys.component.html',
  styleUrls: ['./register-journeys.component.css']
})
export class RegisterJourneysComponent implements OnInit {

  reqError;
  stn:stationType[];
  schdeduleReqData:ScheduleModel={selectedSource:null, selectedDestination: null, toj:null};
  scheduleResData;
  scheduleForm:FormGroup;
  submitted=false;
  formArray;
  error;
  success;

  today= new Date();
  jstoday = '';
  constructor(private station:StationsService, private formBuilder:FormBuilder, private transport:TransportService) { 
    this.stn=station.getList();
    console.log(this.stn);
    this.jstoday = formatDate(this.today, 'yyyy-MM-dd', 'en-US', '+0530');
    console.log(this.jstoday);
  }

  ngOnInit() {
    this.scheduleForm = this.formBuilder.group({
      'selectedSource' : [null,[Validators.required]],
      'selectedDestination' : [null, [Validators.required]]
      // 'toj':[null, [Validators.required]]
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
    this.schdeduleReqData.toj=(new Date(this.schdeduleReqData.toj).getTime())/1000;
    console.log(this.schdeduleReqData);
  }
  onSubmit(){
    this.reqError=null;
    this.scheduleResData=[];
    this.submitted = true;
    console.log("submitted");
    this.data();
    this.transport.getSchedule(this.schdeduleReqData).subscribe(
      data=>{
        console.log(data);
        this.scheduleResData=data;
      },
      error=>{
        this.reqError=error.header.message;
        console.log(this.reqError);
      });
    // stop here if form is invalid
    if (this.scheduleForm.invalid) {
      return;
    }
  }

}
