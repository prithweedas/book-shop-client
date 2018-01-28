import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  yearOptions;
  constructor() {}

  ngOnInit() {
    const year = new Date().getFullYear();
    this.yearOptions = Array.from(new Array(4), (x, i) => ({
      value: year + i,
      name: year + i
    }));
  }
  signUp(data) {
    console.log(data);
  }
}
