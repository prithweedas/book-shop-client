import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router/';

import { ISignUpData } from '../models/auth.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  yearOptions;
  constructor(private authService: AuthService, private router: Router) {}
  ngOnInit() {
    const year = new Date().getFullYear();
    this.yearOptions = Array.from(new Array(4), (x, i) => year + i);
  }
  signUp(data: ISignUpData) {
    this.authService.signUp(data).subscribe(result => {
      console.log(result);
      this.router.navigateByUrl('/login');
    });
  }
}
