import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KeysService {
  readonly VAPID_PUBLIC_KEY="BHDcRuV4kBlIjK7l2E-MtoFOdf86FJktTRMyYY_3MhucWicW_UJTEtHeIC39wI4A7RmnpcumDoE4IfEyJz0nZPI";
  get_public_key(){
    return this.VAPID_PUBLIC_KEY;
  }
  get_token(){
    return localStorage.getItem('token');
  }
  constructor() { }
}
