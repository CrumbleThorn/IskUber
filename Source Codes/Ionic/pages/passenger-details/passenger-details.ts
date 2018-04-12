/*
  This is a course requirement for CS 192 Software Engineering II
  under the supervision of Asst. Prof. Ma. Rowena C. Solamo of the
  Department of Computer Science, College of Engineering,
  University of the Philippines, Diliman for the AY 2015-2016

  Code author: Luigi del Rosario

  Code History:
  Programmer            Date        Description
  Luigi del Rosario     2/22/18     File generation
  Luigi del Rosario     3/22/18     Added accept/reject passengr request and alert boxes

  File creation date: 2/22/18
  Development Group: Luigi del Rosario, Nicole Bilaw, Gabe Tamayo
  Client group: CS 192
  Purpose of code: script for passenger details
*/

import { DataServiceProvider } from '../../providers/data-service/data-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { PassengerListPage } from '../passenger-list/passenger-list';

@IonicPage()
@Component({
  selector: 'page-passenger-details',
  templateUrl: 'passenger-details.html',
})
export class PassengerDetailsPage {
  passenger: any; //NOTE: ONLY USED TO DISPLAY PASSENGER DETAILS
  request: any;
  newReq = {
    userID: 0,
    driverID: 0,
    type: '',
    schedID: 0,
    comment: '',
    isResolved: 1
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public dsp: DataServiceProvider) {
    this.passenger = this.navParams.get('passenger');
    this.request = this.navParams.get('request');
    console.log('passenger: ', this.passenger);
    console.log('request: ', this.request);
    // make the actual request that will be sent
    this.newReq.userID = this.request.userID;
    this.newReq.driverID = this.request.driverID;
    this.newReq.schedID = this.request.schedID;
    this.newReq.comment = this.request.comment;
    console.log('successfully did newReq: ', this.newReq);
  }
  acceptRequest(){
      let newTrip = {
        driverID: this.request.driverID,
        userID: this.request.userID,
        schedID: this.request.schedID
      };
      console.log(this.request.requestID);
      this.dsp.resolveRequest(this.request.requestID);
      this.dsp.sendTrip(newTrip);
      this.dsp.updateRequest(this.newReq, 'ACCEPT');
      console.log('accepted request');
      this.showAlert();
      this.navCtrl.setRoot(PassengerListPage);
  }
  rejectRequest(){
      console.log(this.request.requestID);
      this.dsp.resolveRequest(this.request.requestID);
      this.dsp.updateRequest(this.newReq, 'REJECT')
      console.log('rejected request');
      this.showRejectAlert()
      this.navCtrl.setRoot(PassengerListPage);
  }

  showConfirm(type) {
      let confirm = this.alertCtrl.create({
          title: 'Confirm Action',
          message: 'Are you sure you want to ' + type + ' ' + this.request.legalName + '\'s passenger request?',
          buttons: [
              {
                  text:' Cancel',
                  role: 'cancel',
                  handler: () => {
                      console.log('cancelledt');
                  }
              },
              {
                  text: 'OK',
                  handler: () => {
                      if (type == "accept") {
                          this.acceptRequest();
                      } else {
                          this.rejectRequest();
                      }
                      console.log('sendsent');
                  }
              }
          ]
      });
      confirm.present();
  }
  showAlert() {
      let alert = this.alertCtrl.create({
          title: 'Success!',
          subTitle: 'Accepted passenger request.',
          buttons: ['OK']
      });
      alert.present();
  }
  showRejectAlert() {
      let alert = this.alertCtrl.create({
          title: '',
          subTitle: 'Rejected passenger.',
          buttons: ['OK']
      });
      alert.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PassengerDetailsPage');
  }

}
