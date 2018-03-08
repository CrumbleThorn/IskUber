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
        driverName: '',
        time: '',
        pickup: '',
        dest: '',
    };
    driver: any;

    constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
        this.driver = this.navParams.get('driver');
        this.req.driverName = this.driver.name
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad SendRequestPage');
    }
    sendForm() {
        console.log(this.req)
        this.showAlert()
        this.navCtrl.pop()
        this.navCtrl.pop()
    }
    showAlert() {
        let alert = this.alertCtrl.create({
            title: 'Success!',
            subTitle: 'You have sent a passenger request to ' + this.driver.name + '.',
            buttons: ['OK']
        });
        alert.present();
    }
}
