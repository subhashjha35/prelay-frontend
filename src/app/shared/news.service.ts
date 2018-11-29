import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
export interface NewsModel{
  title:string;
  url:string;
}
@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }
  get_news(){
    return this.http.get<NewsModel>("https://prelay-api.herokuapp.com/v1/news/mav?key=MOCK1234");
  }
}
