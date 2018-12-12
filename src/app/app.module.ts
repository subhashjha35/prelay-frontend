import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './route/route.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ScheduleComponent } from './schedule/schedule.component';
import { StationsService } from './stations.service';
import { TransportService } from './transport.service';
import { ProfileComponent } from './user/profile/profile.component';
import { ProfileHomeComponent } from './user/profile/profile-home/profile-home.component';
import { FaqComponent } from './faq/faq.component';
import { AuthGuard } from './guards/auth.guard';

import { NgHttpLoaderModule } from 'ng-http-loader';
import { JourneysComponent } from './user/profile/journeys/journeys.component';
import { UserNotification } from './user/profile/notification/notification.component';
import { ViewJourneysComponent } from './user/profile/journeys/view-journeys/view-journeys.component';
import { RegisterJourneysComponent } from './user/profile/journeys/register-journeys/register-journeys.component';
import { PushNotificationComponent } from './shared/push-notification/push-notification.component';
import { NewsletterService } from './shared/newsletter.service';
import { SubscriptionComponent } from './user/profile/subscription/subscription.component';
import { ApiComponent } from './api/api.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ScheduleComponent,
    ProfileComponent,
    ProfileHomeComponent,
    FaqComponent,
    JourneysComponent,
    UserNotification,
    ViewJourneysComponent,
    RegisterJourneysComponent,
    PushNotificationComponent,
    SubscriptionComponent,
    ApiComponent
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgHttpLoaderModule,
    FormsModule,
    NgSelectModule
  ],
  providers: [StationsService, TransportService, AuthGuard, NewsletterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
