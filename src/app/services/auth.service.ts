import { TokenService } from './token.service';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { ILoginData } from './../models/auth.model';
import {
  HttpClient,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { RESOURCE_URL } from '../MagicString';
import * as jwt_decode from 'jwt-decode';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient, private tokenService: TokenService) {}

  login(data: ILoginData) {
    return this.http
      .post(RESOURCE_URL + '/users/login', data, {
        observe: 'response'
      })
      .map((res: HttpResponse<any>) => res.body)
      .catch((err: HttpErrorResponse) => Observable.throw(err));
  }

  signUp(data) {
    return this.http
      .post(RESOURCE_URL + '/users/register', data, {
        observe: 'response'
      })
      .map((res: HttpResponse<any>) => res.body)
      .catch((err: HttpErrorResponse) => Observable.throw(err));
  }

  logout() {
    this.tokenService.removeAlltoken();
  }

  isLoggedIn(): boolean {
    const refreshToken = this.tokenService.RefreshToken;
    console.log(jwt_decode);
    let decoedRefreshToken;
    if (refreshToken) decoedRefreshToken = jwt_decode(refreshToken);
    const now = Math.floor(Date.now() / 1000);

    return +decoedRefreshToken.exp > now;
  }
}
