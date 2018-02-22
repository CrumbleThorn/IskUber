/*
  This is a course requirement for CS 192 Software Engineering II
  under the supervision of Asst. Prof. Ma. Rowena C. Solamo of the
  Department of Computer Science, College of Engineering,
  University of the Philippines, Diliman for the AY 2015-2016

  Code author: Luigi del Rosario

  Code History:
  Programmer            Date        Description
  Luigi del Rosario     2/8/18      File generation, added "getDrivers" function
  Luigi del Rosario     2/9/18      Added "getTrips" function
  Luigi del Rosario     2/22/18     Added "getPassengers" function

  File creation date: 2/8/18
  Development Group: Luigi del Rosario, Nicole Bilaw, Gabe Tamayo
  Client group: CS 192
  Purpose of code: provider for HTTP services
*/
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class DataServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello DataServiceProvider Provider');
  }
  getDrivers() {
    return this.http.get('https://swapi.co/api/people');
  }
  getTrips() {
    return this.http.get('https://swapi.co/api/planets');
  }
  getPassengers() {
    return this.http.get('https://randomuser.me/api/?results=6');
  }
}
