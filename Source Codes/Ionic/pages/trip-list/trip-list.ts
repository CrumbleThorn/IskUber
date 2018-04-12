/*
  This is a course requirement for CS 192 Software Engineering II
  under the supervision of Asst. Prof. Ma. Rowena C. Solamo of the
  Department of Computer Science, College of Engineering,
  University of the Philippines, Diliman for the AY 2015-2016

  Code author: Luigi del Rosario

  Code History:
  Programmer            Date        Description
  Luigi del Rosario     2/9/18      File generation

  File creation date: 2/9/18
  Development Group: Luigi del Rosario, Nicole Bilaw, Gabe Tamayo
  Client group: CS 192
  Purpose of code: script for current trips
*/
import { DataServiceProvider } from '../../providers/data-service/data-service';

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Observable } from 'rxjs/Observable';
import { TripDetailsPage } from '../trip-details/trip-details';

@IonicPage()
@Component({
  selector: 'page-trip-list',
  templateUrl: 'trip-list.html',
})
export class TripListPage {
  trips: Observable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public dsp: DataServiceProvider) {
    this.trips = this.dsp.getAllTrips();
  }

  openDetails(trip) {
    let driver = this.dsp.getDriver(trip.driverID);
    driver
      .subscribe(data => {
        console.log('success? ', data)
      })
    this.navCtrl.push(TripDetailsPage, {trip: trip, driver: driver});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TripListPage');
  }

}
