import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
export interface ScheduleModel{
  dep_id:number;
  arr_id:number;
  toj:number;
}
@Injectable({
  providedIn: 'root'
})
export class TransportService {
  scheduleObj:ScheduleModel={dep_id:null, arr_id:null, toj:null};
  constructor(private http:HttpClient) { }

  getSchedule(data){
    this.scheduleObj.dep_id=data.selectedSource;
    this.scheduleObj.arr_id=data.selectedDestination;
    this.scheduleObj.toj=data.toj;
    console.log(this.scheduleObj);
    return this.http.get("http://prelay-api.herokuapp.com/v1/schedule/mav/"+this.scheduleObj.dep_id+"/"+this.scheduleObj.arr_id+"/"+this.scheduleObj.toj+"?key=MOCK1234");
  }
}
