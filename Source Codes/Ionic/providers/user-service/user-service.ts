/*
  This is a course requirement for CS 192 Software Engineering II
  under the supervision of Asst. Prof. Ma. Rowena C. Solamo of the
  Department of Computer Science, College of Engineering,
  University of the Philippines, Diliman for the AY 2015-2016

  Code author: Luigi del Rosario

  Code History:
  Programmer            Date        Description
  Luigi del Rosario     3/22/18     File generation

  File creation date: 3/22/18
  Development Group: Luigi del Rosario, Nicole Bilaw, Gabe Tamayo
  Client group: CS 192
  Purpose of code: provider for user services
*/

import { Injectable } from '@angular/core';

@Injectable()
export class UserServiceProvider {
    public user = {
        userID: 0,
        legalName: "Michael Rosen",
        image: ''
    }
  constructor() {
    console.log('Hello UserServiceProvider Provider');
  }
    updateUser(usr) {
        this.user = usr
    }
}
