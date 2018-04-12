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
  Luigi del Rosario     3/9/18      Changed URLs to account for actual DB
  Luigi del Rosario     3/23/18     Changed URLs to accoutn for new DB framfwork

  File creation date: 2/8/18
  Development Group: Luigi del Rosario, Nicole Bilaw, Gabe Tamayo
  Client group: CS 192
  Purpose of code: provider for HTTP services
*/
import { HttpClient } from '@angular/common/http';
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

  getDriver(driverID){
    let params = {'command': 'QUERY', 'spec': 'DRIVERPROFILE', 'driverID': JSON.stringify(driverID)};
    //let obj = this.http.get('https://cs-192-iskuber-crumblethorn.c9users.io/dbInterface.php', { params: params });
    //console.log(JSON.stringify(obj));
    //return obj;
    return this.http.get('https://cs-192-iskuber-crumblethorn.c9users.io/dbInterface.php', { params: params });
  }

  getDriverTrips(driverID){
    let params = {'command': 'QUERY', 'spec': 'DRIVERTRIPS', 'driverID': JSON.stringify(driverID)};
    return this.http.get('https://cs-192-iskuber-crumblethorn.c9users.io/dbInterface.php', { params: params });
  }

  getTrips() {
    let params = {'command': 'QUERY', 'spec': 'USERTRIPS', 'passengerID': JSON.stringify(this.usp.user.userID)};
    return this.http.get('https://cs-192-iskuber-crumblethorn.c9users.io/dbInterface.php', { params: params });
  }
  getAllTrips() {
    let params = {'command': 'QUERY', 'spec': 'SCHEDLIST'};
    return this.http.get('https://cs-192-iskuber-crumblethorn.c9users.io/dbInterface.php', { params: params });
  }

  getUsers() {
    let params = {'command': 'QUERY', 'spec': 'USERLIST'};
    return this.http.get('https://cs-192-iskuber-crumblethorn.c9users.io/dbInterface.php', { params: params });
  }

  getUser(userID){
    let params = {'command': 'QUERY', 'spec': 'USERPROFILE', 'userID': JSON.stringify(userID)};
    return this.http.get('https://cs-192-iskuber-crumblethorn.c9users.io/dbInterface.php', { params: params });
  }

  getRequests() {
    let params = {'command': 'QUERY', 'spec': 'DRIVERREQUESTS', 'driverID': JSON.stringify(this.usp.user.userID)};
    return this.http.get('https://cs-192-iskuber-crumblethorn.c9users.io/dbInterface.php', { params: params });
  }

  // post functions
  updateRequest(req, type) {
      req.type = type
      console.log(req)
      let params = {'command': 'INSERT', 'spec':'REQUEST'}
      this.http.post('https://cs-192-iskuber-crumblethorn.c9users.io/dbInterface.php', JSON.stringify(req), { params: params }).subscribe();
  }
  sendReq(req) {
      let params = {'command': 'INSERT', 'spec': 'REQUEST'}
      this.http.post('https://cs-192-iskuber-crumblethorn.c9users.io/dbInterface.php', JSON.stringify(req), { params: params }).subscribe();
  }

  resolveRequest(requestID){
    console.log('HERE IN RESOLVE REQUEST\nRequest ID: ', requestID);
    let params = {'command': 'MODIFY', 'spec': 'RESOLVE', 'requestID': JSON.stringify(requestID)};
    return this.http.put('https://cs-192-iskuber-crumblethorn.c9users.io/dbInterface.php', null, { params: params })
      .subscribe();
  }

  sendTrip(reqTrip) {
    let params = {'command': 'INSERT', 'spec': 'TRIP'};
    this.http.post('https://cs-192-iskuber-crumblethorn.c9users.io/dbInterface.php', JSON.stringify(reqTrip), { params: params }).subscribe();
  }
}
