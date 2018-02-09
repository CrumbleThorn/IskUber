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
  selector: 'page-current-trips',
  templateUrl: 'current-trips.html',
})
export class CurrentTripsPage {
  trips: Observable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public dataServiceProvider: DataServiceProvider) {
    this.trips = this.dataServiceProvider.getTrips();
  }

  openDetails(trip) {
    this.navCtrl.push(TripDetailsPage, {trip: trip});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CurrentTripsPage');
  }

}
