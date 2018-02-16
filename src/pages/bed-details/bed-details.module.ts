import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BedDetailsPage } from './bed-details';

@NgModule({
  declarations: [
    BedDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(BedDetailsPage),
  ],
})
export class BedDetailsPageModule {}
