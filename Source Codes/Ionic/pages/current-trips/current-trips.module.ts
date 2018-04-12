import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CurrentTripsPage } from './current-trips';

@NgModule({
  declarations: [
    CurrentTripsPage,
  ],
  imports: [
    IonicPageModule.forChild(CurrentTripsPage),
  ],
})
export class CurrentTripsPageModule {}
