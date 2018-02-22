/*
  This is a course requirement for CS 192 Software Engineering II
  under the supervision of Asst. Prof. Ma. Rowena C. Solamo of the
  Department of Computer Science, College of Engineering,
  University of the Philippines, Diliman for the AY 2015-2016

  Code author: Luigi del Rosario

  Code History:
  Programmer            Date        Description
  Luigi del Rosario     2/22/18      File generation, addied call to Data Service provider

  File creation date: 2/22/18
  Development Group: Luigi del Rosario, Nicole Bilaw, Gabe Tamayo
  Client group: CS 192
  Purpose of code: script of passenger list
*/
import { DataServiceProvider } from '../../providers/data-service/data-service';

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Observable } from 'rxjs/Observable';
import { PassengerDetailsPage } from '../passenger-details/passenger-details';

@IonicPage()
@Component({
  selector: 'page-passenger-list',
  templateUrl: 'passenger-list.html',
})
export class PassengerListPage {
  passengers: Observable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public dataServiceProvider: DataServiceProvider) {
    this.passengers = this.dataServiceProvider.getPassengers();
  }

  openDetails(passenger) {
    this.navCtrl.push(PassengerDetailsPage, {passenger: passenger});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PassengerListPage');
  }

}
