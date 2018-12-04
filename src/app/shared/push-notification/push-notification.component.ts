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
  // {"publicKey":"BA7NNR9M1sYFh-HloNXnBpddcTHwOzY0BdPE6hgyZz_L7uN6-UGuS_s4uUnYe6JZRSst0Eo8NB_Um9hG0Lva-Qs","privateKey":"zs8f-tH6QiiZ6Ul-9B_qp5H2sswXY8b2OgkUv0sfCHk"}
  readonly VAPID_PUBLIC_KEY="BHDcRuV4kBlIjK7l2E-MtoFOdf86FJktTRMyYY_3MhucWicW_UJTEtHeIC39wI4A7RmnpcumDoE4IfEyJz0nZPI";
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
