import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToastTanComponent } from './cards/toast-tan/toast-tan.component';
import { AlarmComponent } from './cards/alarm/alarm.component';
import { HomeComponent } from './tabs/home/home.component';
import { ManualControlComponent } from './tabs/manual-control/manual-control.component';
import { ToastNowComponent } from './cards/toast-now/toast-now.component';
import { SettingsComponent } from './tabs/settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    ToastTanComponent,
    AlarmComponent,
    HomeComponent,
    ManualControlComponent,
    ToastNowComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
