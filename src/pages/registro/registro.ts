import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { User } from '../../models';
import { UserRequestProvider } from '../../providers/user-request/user-request';

@IonicPage()
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {

  user: User;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private usRequest: UserRequestProvider) {
                this.user =  new User();
  }

  ionViewDidLoad() {

  }

  registrar_usuario() {
    this.usRequest.registrar_usuario(this.user)
    .then(() => {
      console.log("Usuario registrado");
    })
    .catch((error) => {
      console.log("Error al registrar el usuario: " + JSON.stringify(error));
    });
  }

}
