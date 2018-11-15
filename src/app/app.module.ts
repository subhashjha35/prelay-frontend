import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { HttpClientModule } from '@angular/common/http';
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
    FaqComponent
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    NgSelectModule
  ],
  providers: [StationsService, TransportService],
  bootstrap: [AppComponent]
})
export class AppModule { }
