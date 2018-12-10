import { Component, OnInit } from '@angular/core';
import { NewsService } from '../shared/news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  news:any;
  constructor(private newsService:NewsService) { 
    this.newsService.newsData.subscribe(data=>{
      this.news=data;
      console.log(this.news);
    });
    console.log(this.news);
  }
  ngOnInit() {
    
  }
}
