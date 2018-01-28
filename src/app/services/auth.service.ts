import { Injectable } from '@angular/core';
import { ILoginData } from './../models/auth.model';

@Injectable()
export class AuthService {

  constructor() { }

  login(data:ILoginData) {
    throw new Error('Not Implemented');
  }

  signUp(data) {
    throw new Error('Not Implemented');
  }
  
  isLoggedIn() : boolean {
    throw new Error('Not Implemented');
  }

}
