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
  Luigi del Rosario     3/9/18      Changed URLs

  File creation date: 2/8/18
  Development Group: Luigi del Rosario, Nicole Bilaw, Gabe Tamayo
  Client group: CS 192
  Purpose of code: provider for HTTP services
*/
import { HttpClient } from '@angular/common/http';
import { Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { UserAgent } from '@ionic-native/user-agent'

@Injectable()
export class DataServiceProvider {

  constructor(public http: HttpClient, private userAgent: UserAgent) {
    console.log('Hello DataServiceProvider Provider');
    this.userAgent.set('PhantomJS')
        .then((res: any) => console.log(res))
        .catch((error: any) => console.error(error));
  }

  getDrivers() {
    return this.http.get('https://cs-192-iskuber-crumblethorn.c9users.io/getDriverList.php');
  }
  getTrips() {
    return this.http.get('https://cs-192-iskuber-crumblethorn.c9users.io/getActiveTrips.php');
  }
  getPassengers() {
    return this.http.get('https://randomuser.me/api/?results=6');
  }
  sendReq(req) {
      console.log(JSON.stringify(req))
      console.log('printed req above')
      this.http.post('https://cs-192-iskuber-crumblethorn.c9users.io/insertIntoDatabase.php', JSON.stringify(req)).subscribe();
  }
}
