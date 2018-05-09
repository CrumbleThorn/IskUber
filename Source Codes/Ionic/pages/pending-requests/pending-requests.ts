/*
  This is a course requirement for CS 192 Software Engineering II
  under the supervision of Asst. Prof. Ma. Rowena C. Solamo of the
  Department of Computer Science, College of Engineering,
  University of the Philippines, Diliman for the AY 2015-2016

  Code author: Luigi del Rosario

  Code History:
  Programmer            Date        Description
  Luigi del Rosario     4/21/18     File generation, addied call to Data Service provider

  File creation date: 4/21/18
  Development Group: Luigi del Rosario, Nicole Bilaw, Gabe Tamayo
  Client group: CS 192
  Purpose of code: script of pending requests page
*/
import { DataServiceProvider } from '../../providers/data-service/data-service';

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: 'page-pending-requests',
  templateUrl: 'pending-requests.html',
})
export class PendingRequestsPage {
  requests: Observable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public dsp: DataServiceProvider) {
    this.requests = this.dsp.getPendingRequests();
    this.requests.subscribe(req => {
      console.log('req0: ', req.results[0].requestID)
    });
    console.log('request!', this.requests);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PendingRequestsPage');
  }
}
