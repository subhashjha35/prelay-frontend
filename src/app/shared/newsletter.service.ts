import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { KeysService } from './keys.service';

@Injectable({
  providedIn: 'root'
})
export class NewsletterService {
  constructor(private http: HttpClient, private keys:KeysService) {

  }

  addPushSubscriber(sub:any) {
    return this.http.post('https://prelay-api.herokuapp.com/v1/notification/?key='+this.keys.get_token(), sub);
  }

  send() {
    return this.http.post('/api/newsletter', null);
  }
}
