import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../user/login/login.component';
import { RegisterComponent } from '../user/register/register.component';
import { ScheduleComponent } from '../schedule/schedule.component';
import { ProfileComponent } from '../user/profile/profile.component'
import { ProfileHomeComponent } from '../user/profile/profile-home/profile-home.component';
import { FaqComponent } from '../faq/faq.component';
import { AuthGuard } from '../guards/auth.guard';
import { JourneysComponent } from '../user/profile/journeys/journeys.component';
import { ViewJourneysComponent } from '../user/profile/journeys/view-journeys/view-journeys.component';
import { RegisterJourneysComponent } from '../user/profile/journeys/register-journeys/register-journeys.component';
import { UserNotification } from '../user/profile/notification/notification.component';
import { PushNotificationComponent } from '../shared/push-notification/push-notification.component';
import { SubscriptionComponent } from '../user/profile/subscription/subscription.component';
import { ApiComponent } from '../api/api.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'push', component: PushNotificationComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'schedule', component: ScheduleComponent, canActivate: [AuthGuard]  },
  { path: 'faq', component: FaqComponent },
  { path: 'api', component: ApiComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] ,
    children: [
      {path:'home', component:ProfileHomeComponent},
      {path:'favorite-lines', component:JourneysComponent,
        children:[
          {path:'all', component:ViewJourneysComponent},
          {path:'register', component:RegisterJourneysComponent},
          {path:'', component:ViewJourneysComponent}
        ]
      },
      {path:'notification', component:UserNotification},
      {path:'subscription', component:SubscriptionComponent},
      {path:'', component:UserNotification}

    ]},
  { path: '**', component: HomeComponent },
];
const routerOptions: ExtraOptions = {
  useHash: false,
  anchorScrolling: 'enabled',
  // ...any other options you'd like to use
};
@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
