import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { ILoginData } from './../models/auth.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}

  login(data: ILoginData) {
    this.authService.login(data).subscribe(result => {
      console.log(result);
      this.router.navigateByUrl('/');
    });
  }
}
