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
  Luigi del Rosario     2/9/18      Added pages
  Luigi del Rosario     2/22/18     Added Passenger List/Details pages
  Luigi del Rosario     3/8/18      Added SendRequest page
  Luigi del Rosario     3/22/18     Added User Service provider

  File creation date: 2/7/18
  Development Group: Luigi del Rosario, Nicole Bilaw, Gabe Tamayo
  Client group: CS 192
  Purpose of code: module of app
*/

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { UserAgent } from '@ionic-native/user-agent';

import { MyApp } from './app.component';

//pages
import { DriverListPage } from '../pages/driver-list/driver-list';
import { DriverDetailsPage } from '../pages/driver-details/driver-details';
import { TripListPage } from '../pages/trip-list/trip-list';
import { TripDetailsPage } from '../pages/trip-details/trip-details';
import { CurrentTripsPage } from '../pages/current-trips/current-trips';
import { PassengerListPage } from '../pages/passenger-list/passenger-list'
import { PassengerDetailsPage } from '../pages/passenger-details/passenger-details'
import { SendRequestPage } from '../pages/send-request/send-request'
import { ChangeUserPage } from '../pages/change-user/change-user'
import { HomePage } from '../pages/home/home';

//imports
import { HttpClientModule } from '@angular/common/http';

//providers
import { DataServiceProvider } from '../providers/data-service/data-service';
import { UserServiceProvider } from '../providers/user-service/user-service';

@NgModule({
  declarations: [
    MyApp,
    DriverListPage,
    DriverDetailsPage,
    TripListPage,
    TripDetailsPage,
    CurrentTripsPage,
    PassengerListPage,
    PassengerDetailsPage,
    SendRequestPage,
    ChangeUserPage,
    HomePage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    DriverListPage,
    DriverDetailsPage,
    TripListPage,
    TripDetailsPage,
    CurrentTripsPage,
    PassengerListPage,
    PassengerDetailsPage,
    SendRequestPage,
    ChangeUserPage,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    UserAgent,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataServiceProvider,
    UserServiceProvider
  ]
})
export class AppModule {}
