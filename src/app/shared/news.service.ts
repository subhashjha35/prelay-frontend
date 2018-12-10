import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
export interface NewsModel{
  title:string;
  url:string;
}
@Injectable({
  providedIn: 'root'
})
export class NewsService {
  public newsData=new BehaviorSubject<NewsModel>({title:null,url:null});
  constructor(private http: HttpClient) {
    
  }
  initiate_data(){
    this.newsData.next({title:null,url:null});
  }
  get_news(){
    return this.http.get<NewsModel>("https://prelay-api.herokuapp.com/v1/news/mav?key=MOCK1234");
  }
}
