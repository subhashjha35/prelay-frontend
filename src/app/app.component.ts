import { Component } from '@angular/core';
import { Spinkit } from 'ng-http-loader';
import { NewsService } from './shared/news.service';
import { UserService } from './user.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  title = 'Prelay';
  public spinkit = Spinkit;
  constructor(private userService:UserService, private newsService:NewsService){
    this.newsService.get_news().subscribe(data=>{
      this.newsService.newsData.next(data);
      console.log(this.newsService.newsData);
      console.log("news called");
      if(localStorage.getItem('data'))
        this.userService.userName.next(JSON.parse(localStorage.getItem('data')).name);
    });
  }
}
