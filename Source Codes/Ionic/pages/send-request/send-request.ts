/*
  This is a course requirement for CS 192 Software Engineering II
  under the supervision of Asst. Prof. Ma. Rowena C. Solamo of the
  Department of Computer Science, College of Engineering,
  University of the Philippines, Diliman for the AY 2015-2016

  Code author: Luigi del Rosario

  Code History:
  Programmer            Date        Description
  Luigi del Rosario     3/8/18      File generation, added form submission capabilities

  File creation date: 3/8/18
  Development Group: Luigi del Rosario, Nicole Bilaw, Gabe Tamayo
  Client group: CS 192
  Purpose of code: script for send requests page
*/
import { DataServiceProvider } from '../../providers/data-service/data-service';
import { UserServiceProvider } from '../../providers/user-service/user-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-send-request',
  templateUrl: 'send-request.html',
})
export class SendRequestPage {
    req = {
        userID: 0,
        driverID: 0,
        type: 'REQUEST',
        schedID: 0,
        comment: '',
        isResolved: 0
    };
    trip: any;
    driver: any;

    constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public dataServiceProvider: DataServiceProvider, public usp: UserServiceProvider) {
        this.trip = this.navParams.get('trip');
        this.driver = this.navParams.get('driver');

        // assign to req
        this.req.driverID = this.trip.driverID;
        this.req.userID = usp.user.userID;
        this.req.schedID = this.trip.schedID;
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad SendRequestPage');
        console.log('driver: ', this.driver);
        console.log('trip: ', this.trip);
    }
    sendForm() {
        this.dataServiceProvider.sendReq(this.req);
        this.showAlert();
        this.navCtrl.pop();
        this.navCtrl.pop();
    }
    showConfirm() {
        let confirm = this.alertCtrl.create({
            title: 'Confirm Send',
            message: 'Confirm sending of passenger request to ' + this.driver.driverName + '?',
            buttons: [
                {
                    text:' Cancel',
                    role: 'cancel',
                    handler: () => {
                        console.log('Form submission cancelled');
                    }
                },
                {
                    text: 'Send',
                    handler: () => {
                        this.sendForm();
                        console.log('Form submission sent');
                    }
                }
            ]
        });
        confirm.present();
    }
    showAlert() {
        console.log(this.req);
        let alert = this.alertCtrl.create({
            title: 'Success!',
            subTitle: 'You have sent a passenger request to ' + this.driver.driverName + '.',
            buttons: ['OK']
        });
        alert.present();
    }
}
