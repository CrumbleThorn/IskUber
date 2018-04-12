/*
  This is a course requirement for CS 192 Software Engineering II
  under the supervision of Asst. Prof. Ma. Rowena C. Solamo of the
  Department of Computer Science, College of Engineering,
  University of the Philippines, Diliman for the AY 2015-2016

  Code author: Luigi del Rosario

  Code History:
  Programmer            Date        Description
  Luigi del Rosario     3/23/18     File generation, added funcionalities

  File creation date: 3/23/18
  Development Group: Luigi del Rosario, Nicole Bilaw, Gabe Tamayo
  Client group: CS 192
  Purpose of code: main css of change user page

*/
import { DataServiceProvider } from '../../providers/data-service/data-service';
import { UserServiceProvider } from '../../providers/user-service/user-service';

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { AlertController } from 'ionic-angular';

import { HomePage } from '../home/home';


@IonicPage()
@Component({
  selector: 'page-change-user',
  templateUrl: 'change-user.html',
})
export class ChangeUserPage {
    users: Observable<any>;
    constructor(public navCtrl: NavController, public navParams: NavParams, public dataServiceProvider: DataServiceProvider, public usp: UserServiceProvider, public alertCtrl: AlertController) {
        this.users = this.dataServiceProvider.getUsers();
    }
    changeUsr(user){
        this.usp.updateUser(user);
        let alert = this.alertCtrl.create({
            title: 'Success!',
            subTitle: 'User changed to ' + this.usp.user.legalName + '.',
            buttons: ['OK']
        });
        alert.present();
        this.navCtrl.setRoot(HomePage)
    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad ChangeUserPage');
    }

}
