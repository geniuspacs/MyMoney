import { HttpClient, HttpHeaders } from '@angular/common/http';
import {RequestOptions, RequestOptionsArgs} from '@angular/http';
import { Injectable } from '@angular/core';

import { environment } from '../../environment';

import { User } from '../../models';

@Injectable()
export class UserRequestProvider {

  user: User;

  constructor(public http: HttpClient) {
    
  }

  registrar_usuario(user: User) {

    let promise = new Promise((resolve, reject) => {

      this.user = user;

      var headers = new Headers();
      headers.append('Content-Type','application/json');

      let toObject = {
        email: this.user.email,
        password: this.user.password,
        name: this.user.name,
        surname: this.user.surname,
        birth_date: this.user.birth_date,
        gender: this.user.Gender
      };

      this.http.post(environment.host + environment.mainRouteUser + environment.registerUserRoute,
        {user: toObject})
      .subscribe(data => {
        resolve(data);
      }, (error) => {
        reject(error);
      });

    });

    return promise;

  };

  login(email: string, password: string) {
    let promesa = new Promise((resolve, reject) => {
      
      var headers = new Headers();
      headers.append('Content-Type','application/json');

      this.http.post(environment.host + environment.mainRouteUser + environment.loginUserRoute, 
        {email: email, password: password})
      .subscribe(data => {
        resolve(data);
      }, error => {
        reject(error);
      });
    });

    return promesa;
  };

}
