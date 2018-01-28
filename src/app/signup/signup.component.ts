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
    this.yearOptions = [
      { value: year, name: year },
      { value: year + 1, name: year + 1 },
      { value: year + 2, name: year + 2 },
      { value: year + 3, name: year + 3 }
    ];
  }
  signUp(data) {
    console.log(data);
  }
}
