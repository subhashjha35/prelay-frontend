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
    this.news=[];
  }
  ngOnInit() {
    this.newsService.get_news().subscribe(data => {
      this.news=data;
      console.log(this.news);
      console.log("successfully called news");
    });
  }

}
