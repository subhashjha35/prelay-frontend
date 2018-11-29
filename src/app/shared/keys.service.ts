import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KeysService {
  readonly VAPID_PUBLIC_KEY="BA7NNR9M1sYFh-HloNXnBpddcTHwOzY0BdPE6hgyZz_L7uN6-UGuS_s4uUnYe6JZRSst0Eo8NB_Um9hG0Lva-Qs";
  get_public_key(){
    return this.VAPID_PUBLIC_KEY;
  }
  get_token(){
    return localStorage.getItem('token');
  }
  constructor() { }
}
