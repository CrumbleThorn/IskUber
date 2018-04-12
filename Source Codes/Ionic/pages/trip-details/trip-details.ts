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
  Purpose of code: script of trip details
*/
import { DataServiceProvider } from '../../providers/data-service/data-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SendRequestPage } from '../send-request/send-request';

@IonicPage()
@Component({
  selector: 'page-trip-details',
  templateUrl: 'trip-details.html',
})
export class TripDetailsPage {
  trip: any;
  driver: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public dsp: DataServiceProvider) {
    this.trip = this.navParams.get('trip');
    console.log(this.trip.driverID);
    this.driver = this.navParams.get('driver');
    /*this.driver = this.dsp.getDriver(this.trip.driverID);
    this.driver
      .subscribe(data => {
        console.log('success? ', data)
      })*/
    //this.driver = this.dsp.getAllTrips();
    console.log(JSON.stringify(this.driver));
  }

  sendRequest(trip, driver){
    this.navCtrl.push(SendRequestPage, {trip: trip, driver: driver});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TripDetailsPage');
  }

}
