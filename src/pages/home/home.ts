import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import * as mongodb from "mongodb-stitch";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  stitch: mongodb;

  constructor(public navCtrl: NavController) {
    console.log(this.stitch);
  }

}
