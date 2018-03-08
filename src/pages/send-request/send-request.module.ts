/*
  This is a course requirement for CS 192 Software Engineering II
  under the supervision of Asst. Prof. Ma. Rowena C. Solamo of the
  Department of Computer Science, College of Engineering,
  University of the Philippines, Diliman for the AY 2015-2016

  Code author: Luigi del Rosario

  Code History:
  Programmer            Date        Description
  Luigi del Rosario     3/8/18      File generation

  File creation date: 3/8/18
  Development Group: Luigi del Rosario, Nicole Bilaw, Gabe Tamayo
  Client group: CS 192
  Purpose of code: module of send requests page
*/
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SendRequestPage } from './send-request';

@NgModule({
  declarations: [
    SendRequestPage,
  ],
  imports: [
    IonicPageModule.forChild(SendRequestPage),
  ],
})
export class SendRequestPageModule {}
