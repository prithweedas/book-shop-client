import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { ILoginData } from './../models/auth.model';
import {
  HttpClient,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { RESOURCE_URL } from '../MagicString';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  login(data: ILoginData) {
    return this.http
      .post(RESOURCE_URL + '/users/login', data, {
        observe: 'response'
      })
      .map((res: HttpResponse<any>) => res.body)
      .catch((err: HttpErrorResponse) => Observable.throw(err));
  }

  signUp(data) {
    throw new Error('Not Implemented');
  }

  isLoggedIn(): boolean {
    throw new Error('Not Implemented');
  }
}
