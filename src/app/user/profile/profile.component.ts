import { Component, OnInit } from '@angular/core';
import { SwPush } from '@angular/service-worker';
import { KeysService } from 'src/app/shared/keys.service';
import { NewsletterService } from 'src/app/shared/newsletter.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  name:string;
  userData:any;
  constructor(private swPush:SwPush, private keys:KeysService, private newsletterService:NewsletterService){

  }
  ngOnInit(){
    this.swPush.requestSubscription({
      serverPublicKey: this.keys.get_public_key()
    })
    .then(sub => this.newsletterService.addPushSubscriber(sub).subscribe())
    .catch(err => console.error("Could not subscribe to notifications", err));
    this.userData=JSON.parse(localStorage.getItem('data'));
    this.name=this.userData.name;
  }
}