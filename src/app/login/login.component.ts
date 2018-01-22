import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit() {}

  login(data) {
    // just testing purpose. We'll separate the code to service & hardcoded `localhost:3000` once http-interrupt is implemented
    console.log(data);
    this.http
      .post("http://localhost:3000/users/login", data)
      .subscribe(result => console.log(result));
  }
}
