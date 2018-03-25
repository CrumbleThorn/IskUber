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

@IonicPage()
@Component({
  selector: 'page-passenger-details',
  templateUrl: 'passenger-details.html',
})
export class PassengerDetailsPage {
  passenger: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public dataServiceProvider: DataServiceProvider) {
    this.passenger = this.navParams.get('passenger');
  }
  acceptRequest(passenger){
      this.showAlert()
      this.navCtrl.pop()
      this.dataServiceProvider.updateRequest(passenger, 'ACCEPT')
      console.log('accepted request');
  }
  rejectRequest(passenger){
      this.showRejectAlert()
      this.navCtrl.pop()
      this.dataServiceProvider.updateRequest(passenger, 'REJECT')
      console.log('rejected request');
  }

  showConfirm(type) {
      let confirm = this.alertCtrl.create({
          title: 'Confirm Action',
          message: 'Are you sure you want to ' + type + ' ' + this.passenger.passengerName + '\'s passenger request?',
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
                          this.acceptRequest(this.passenger);
                      } else {
                          this.rejectRequest(this.passenger);
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
