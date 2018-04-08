import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateCalendarPage } from './calendar-create';

@NgModule({
  declarations: [
    CreateCalendarPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateCalendarPage),
  ],
})
export class CreateCalendarPageModule { }
