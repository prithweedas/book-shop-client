import { Component, OnInit } from '@angular/core';
import { ILoginData } from './../models/auth.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  login(data: ILoginData) {
   
  }
}
