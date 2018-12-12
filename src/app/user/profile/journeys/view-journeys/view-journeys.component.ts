import { Component, OnInit } from '@angular/core';
import { StationsService } from 'src/app/stations.service';
import { TransportService } from 'src/app/transport.service';
@Component({
  selector: 'app-view-journeys',
  templateUrl: './view-journeys.component.html',
  styleUrls: ['./view-journeys.component.css']
})
export class ViewJourneysComponent implements OnInit {
  data:any;
  fav_lines=[];
  fav_data:any[];
  getStnName(id){
    let stn=this.stnService.getList();
    return stn[stn.findIndex(x=>x.id == id)].name;
  }
  constructor(private stnService:StationsService,){
    this.data=JSON.parse(localStorage.getItem('data'));
    if(this.data.hasOwnProperty('favoriteLines')){
      this.fav_lines=this.data.favoriteLines;
      this.fav_lines=Object.keys(this.fav_lines).map(i=>this.fav_lines[i]);
    }
    console.log(this.fav_lines);
  }
  ngOnInit(){
    
  }
  

}
