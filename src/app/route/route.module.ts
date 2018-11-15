import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../user/login/login.component';
import { RegisterComponent } from '../user/register/register.component';
import { ScheduleComponent } from '../schedule/schedule.component';
import { ProfileComponent } from '../user/profile/profile.component'
import { ProfileHomeComponent } from '../user/profile/profile-home/profile-home.component';
import { FaqComponent } from '../faq/faq.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'schedule', component: ScheduleComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'profile', component: ProfileComponent,
    children: [
      {path:'', component:ProfileHomeComponent}

    ] },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
