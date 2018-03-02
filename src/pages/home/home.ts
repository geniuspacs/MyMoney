import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { UserRequestProvider } from '../../providers/user-request/user-request';

import { RegistroPage } from '../registro/registro';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  registroPage: any;
  email: string;
  password: string;

  constructor(public navCtrl: NavController, private usReq: UserRequestProvider) {
    this.registroPage = RegistroPage;
  }

  private login() {
    this.usReq.login(this.email, this.password)
    .then(data => {
      alert('Login OK');
    })
    .catch(error => {
      alert('Error en el logueo');
      console.log(error);
    });
  }

}
