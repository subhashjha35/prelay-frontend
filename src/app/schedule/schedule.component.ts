import { Component, OnInit } from '@angular/core';
import { StationsService, stationType } from '../stations.service';
import {FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TransportService } from '../transport.service';

export interface ScheduleModel{
  selectedSource:string;
  selectedDestination:string;
  toj:any;
}
@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  stn:stationType[];
  schdeduleReqData:ScheduleModel={selectedSource:null, selectedDestination: null, toj:null};
  scheduleResData;
  scheduleForm:FormGroup;
  submitted=false;
  formArray;
  error;
  success;
  constructor(private station:StationsService, private formBuilder:FormBuilder, private transport:TransportService) { 
    this.stn=station.getList();
    console.log(this.stn);
  }

  ngOnInit() {
    this.scheduleForm = this.formBuilder.group({
      'selectedSource' : [null,[Validators.required]],
      'selectedDestination' : [null, [Validators.required]],
      'toj':[null, [Validators.required]]
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
  stnCodeToName(code){
    return this.stn[this.stn.findIndex(x=>x.id == code)].name;
  };
  timestampToTime(timeStamp){
    if(isNaN(timeStamp)){
      return timeStamp
    }
    var h=Math.floor(timeStamp/60).toString();
    var m=(timeStamp%60).toString();
    if(h.length<2)
      h="0"+h;
    if(m.length<2)
      m="0"+m;
    return (h+":"+m);
  };
  onSubmit(){
    this.submitted = true;
    console.log("submitted");
    this.data();
    this.transport.getSchedule(this.schdeduleReqData).subscribe(
      data=>{
        console.log(data);
        this.scheduleResData=data;
      });
    // stop here if form is invalid
    if (this.scheduleForm.invalid) {
      return;
    }
  }
}
