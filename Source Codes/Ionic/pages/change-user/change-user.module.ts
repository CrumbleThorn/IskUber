/*
  This is a course requirement for CS 192 Software Engineering II
  under the supervision of Asst. Prof. Ma. Rowena C. Solamo of the
  Department of Computer Science, College of Engineering,
  University of the Philippines, Diliman for the AY 2015-2016

  Code author: Luigi del Rosario

  Code History:
  Programmer            Date        Description
  Luigi del Rosario     3/23/18    File generation

  File creation date: 3/23/18
  Development Group: Luigi del Rosario, Nicole Bilaw, Gabe Tamayo
  Client group: CS 192
  Purpose of code: module of change user page
*/
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChangeUserPage } from './change-user';

@NgModule({
  declarations: [
    ChangeUserPage,
  ],
  imports: [
    IonicPageModule.forChild(ChangeUserPage),
  ],
})
export class ChangeUserPageModule {}
