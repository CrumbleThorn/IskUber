/*
  This is a course requirement for CS 192 Software Engineering II
  under the supervision of Asst. Prof. Ma. Rowena C. Solamo of the
  Department of Computer Science, College of Engineering,
  University of the Philippines, Diliman for the AY 2015-2016

  Code author: Luigi del Rosario

  Code History:
  Programmer            Date        Description
  Luigi del Rosario     2/7/18      File generation

  File creation date: 2/7/18
  Development Group: Luigi del Rosario, Nicole Bilaw, Gabe Tamayo
  Client group: CS 192
  Purpose of code: script for driver details
*/
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-driver-details',
  templateUrl: 'driver-details.html',
})
export class DriverDetailsPage {
  driver: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.driver = this.navParams.get('driver');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DriverDetailsPage');
  }

}