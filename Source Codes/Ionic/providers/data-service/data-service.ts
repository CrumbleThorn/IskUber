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
  Luigi del Rosario     3/23/18     changed URLs

  File creation date: 2/8/18
  Development Group: Luigi del Rosario, Nicole Bilaw, Gabe Tamayo
  Client group: CS 192
  Purpose of code: provider for HTTP services
*/
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserAgent } from '@ionic-native/user-agent'
import { UserServiceProvider } from '../../providers/user-service/user-service';


@Injectable()
export class DataServiceProvider {

  constructor(public http: HttpClient, private userAgent: UserAgent, public usp: UserServiceProvider) {
    console.log('Hello DataServiceProvider Provider');
    this.userAgent.set('PhantomJS')
        .then((res: any) => console.log(res))
        .catch((error: any) => console.error(error));
  }

  getDrivers() {
    let params = {'command': 'QUERY', 'spec': 'DRIVERLIST'};
    return this.http.get('https://cs-192-iskuber-crumblethorn.c9users.io/dbInterface.php', { params: params });
  }

  getTrips() {
    let params = {'command': 'QUERY', 'spec': 'USERTRIPS', 'userID': JSON.stringify(this.usp.user.userID)};
    return this.http.get('https://cs-192-iskuber-crumblethorn.c9users.io/getActiveTrips.php', { params: params });
  }
  getUsers() {
    let params = {'command': 'QUERY', 'spec': 'USERLIST'};
    return this.http.get('https://cs-192-iskuber-crumblethorn.c9users.io/dbInterface.php', { params: params });
  }
  getPassengers() {
    let params = {'command': 'QUERY', 'spec': 'DRIVERREQUESTS', 'driverID': JSON.stringify(this.usp.user.userID)};
    return this.http.get('https://cs-192-iskuber-crumblethorn.c9users.io/dbInterface.php', { params: params });
  }
  updateRequest(req, type) {
      req.type = type
      console.log(req)
      let params = {'command': 'INSERT', 'spec':'REQUEST'}
      return this.http.post('https://cs-192-iskuber-crumblethorn.c9users.io/dbInterface.php', JSON.stringify(req), { params: params }).subscribe();
  }
  sendReq(req) {
      let params = {
          command: 'INSERT',
          spec: 'REQUEST'
      }
      console.log(JSON.stringify(req))
      console.log('printed req above')
      /*this.http.post('https://cs-192-iskuber-crumblethorn.c9users.io/dbInterface.php', JSON.stringify(req), { params: params }).subscribe();*/
      this.http.post('https://cs-192-iskuber-crumblethorn.c9users.io/dbInterface.php', JSON.stringify(req), { params: params }).subscribe();
  }
}
