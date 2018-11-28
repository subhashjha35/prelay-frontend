import { Component, OnInit } from '@angular/core';
import { SwPush } from '@angular/service-worker';
import { NewsletterService } from '../newsletter.service';

@Component({
  selector: 'app-push-notification',
  template: `
  <button class="button button-primary" (click)="subscribeToNotifications()">
    Subscribe
  </button>
`,
  styleUrls: ['./push-notification.component.css']
})
export class PushNotificationComponent implements OnInit {
  readonly VAPID_PUBLIC_KEY="BGE-WENT2E2AID_piniQxf6dQcc3kp8oKHttMQdxmPd899tRcLGS56KDr35A2aEZkPqOkN6bwUdT1BACByjbHPc";
  constructor(private swPush: SwPush, private newsletterService: NewsletterService) { }

  subscribeToNotifications() {

    this.swPush.requestSubscription({
        serverPublicKey: this.VAPID_PUBLIC_KEY
    })
    .then(sub => this.newsletterService.addPushSubscriber(sub).subscribe())
    .catch(err => console.error("Could not subscribe to notifications", err));
  }
  ngOnInit() {
  }

}
