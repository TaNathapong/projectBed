import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { DxSchedulerModule } from 'devextreme-angular';
import { SchedulerPage } from './scheduler';

@NgModule({
  declarations: [SchedulerPage],
  imports: [
    DxSchedulerModule,
    BrowserModule,
    HttpModule,
    IonicPageModule.forChild(SchedulerPage),
  ],
})

export class SchedulerPageModule { }
