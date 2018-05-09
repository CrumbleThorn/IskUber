/*
  This is a course requirement for CS 192 Software Engineering II
  under the supervision of Asst. Prof. Ma. Rowena C. Solamo of the
  Department of Computer Science, College of Engineering,
  University of the Philippines, Diliman for the AY 2015-2016

  Code author: Luigi del Rosario

  Code History:
  Programmer            Date        Description
  Luigi del Rosario     2/9/18     File generation

  File creation date: 2/9/18
  Development Group: Luigi del Rosario, Nicole Bilaw, Gabe Tamayo
  Client group: CS 192
  Purpose of code: script for current trips
*/
import { DataServiceProvider } from '../../providers/data-service/data-service';
import { UserServiceProvider } from '../../providers/user-service/user-service';

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Observable } from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: 'page-current-trips',
  templateUrl: 'current-trips.html',
})
export class CurrentTripsPage {
  trips: Observable<any>;
  driverTrips: Observable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams,
      public dsp: DataServiceProvider, public usp: UserServiceProvider) {
      //Here we should be able to get trips of the USER.
      this.trips = dsp.getTrips();
      this.trips.subscribe(data => {
        console.log('all trips: ', data)
      })
      this.driverTrips = dsp.getDriverTrips(this.usp.user.userID);
      console.log("Fetching driver trips...");
      this.driverTrips
        .subscribe(data => {
          console.log('driver trips: ', data)
        });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CurrentTripsPage');
  }

}
