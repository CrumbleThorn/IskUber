/*
  This is a course requirement for CS 192 Software Engineering II
  under the supervision of Asst. Prof. Ma. Rowena C. Solamo of the
  Department of Computer Science, College of Engineering,
  University of the Philippines, Diliman for the AY 2015-2016

  Code author: Luigi del Rosario

  Code History:
  Programmer            Date        Description
  Luigi del Rosario     2/7/18      File generation
  Luigi del Rosario     2/8/18      Added pages
  Luigi del Rosario     2/22/18     Divided pages into "main" and "driver", added passenger pages

  File creation date: 2/7/18
  Development Group: Luigi del Rosario, Nicole Bilaw, Gabe Tamayo
  Client group: CS 192
  Purpose of code: components of app
*/

import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { DriverListPage } from '../pages/driver-list/driver-list';
import { PassengerListPage } from '../pages/passenger-list/passenger-list';
import { CurrentTripsPage } from '../pages/current-trips/current-trips';
import { HomePage } from '../pages/home/home';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage = HomePage;
  pagesMain: Array<{title: string, component: any}>;
  pagesDriver: Array<{title: string, component: any}>;

  constructor(platform: Platform, public menu: MenuController, statusBar: StatusBar, splashScreen: SplashScreen) {

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    this.pagesMain = [
      { title: 'Home', component: HomePage },
      { title: 'Driver List', component: DriverListPage },
      { title: 'Your Current Trips', component: CurrentTripsPage },
    ];

    this.pagesDriver = [
      { title: 'Your Passengers', component: PassengerListPage }
    ];
  }
  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}

