/*
  This is a course requirement for CS 192 Software Engineering II
  under the supervision of Asst. Prof. Ma. Rowena C. Solamo of the
  Department of Computer Science, College of Engineering,
  University of the Philippines, Diliman for the AY 2015-2016

  Code author: Luigi del Rosario

  Code History:
  Programmer            Date        Description
  Luigi del Rosario     2/7/18      File generation
  Luigi del Rosario     2/8/18      Added call to Data Service provider

  File creation date: 2/7/18
  Development Group: Luigi del Rosario, Nicole Bilaw, Gabe Tamayo
  Client group: CS 192
  Purpose of code: script of driver list
*/
import { DataServiceProvider } from '../../providers/data-service/data-service';

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Observable } from 'rxjs/Observable';
import { DriverDetailsPage } from '../driver-details/driver-details';

@IonicPage()
@Component({
  selector: 'page-driver-list',
  templateUrl: 'driver-list.html',
})
export class DriverListPage {
  drivers: Observable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public dataServiceProvider: DataServiceProvider) {
    this.drivers = this.dataServiceProvider.getDrivers();
  }

  openDetails(driver) {
    this.navCtrl.push(DriverDetailsPage, {driver: driver});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DriverListPage');
  }

}
