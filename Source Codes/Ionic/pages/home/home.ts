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
  Purpose of code: script of home page
*/
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service';

import { DriverListPage } from '../driver-list/driver-list';
import { PassengerListPage } from '../passenger-list/passenger-list';
import { TripListPage } from '../trip-list/trip-list';
import { CurrentTripsPage } from '../current-trips/current-trips'

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
    user: any;
    constructor(public navCtrl: NavController, public navParams: NavParams,
        public usp: UserServiceProvider) {
        this.user = usp.user;
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad HomePage');
    }

    openPage(page){
      console.log(page)
        if(page==0){
            this.navCtrl.setRoot(TripListPage).catch(() => console.log('Error loading page.'));
        } else if (page==1) {
            this.navCtrl.setRoot(DriverListPage).catch(() => console.log('Error loading page.'));
        } else if (page == 2) {
            this.navCtrl.setRoot(CurrentTripsPage).catch(() => console.log('Error loading page.'));
        } else if (page == 3) {
            this.navCtrl.setRoot(PassengerListPage).catch(() => console.log('Error loading page.'));
        }
    }
}
