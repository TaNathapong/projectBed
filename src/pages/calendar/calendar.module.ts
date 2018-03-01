import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { DxSchedulerModule } from 'devextreme-angular';
import { CalendarPage } from './calendar';

@NgModule({
  declarations: [
    CalendarPage,
  ],
  imports: [
    DxSchedulerModule,
    BrowserModule,
    HttpModule,
    IonicPageModule.forChild(CalendarPage),
  ],
})

export class CalendarPageModule { }
