import { Injectable } from "@angular/core";

@Injectable()
export class TokenService {
  constructor() {}

  public get Token(): string {
    return localStorage.getItem("token") || undefined;
  }
  public set Token(value: string) {
    if(!value) return;
    localStorage.setItem("token", value);
  
  }
  public get RefreshToken(): string {
    return localStorage.getItem("refresh-token") || undefined;
  }
  
  public set RefreshToken(value: string) {
    if(!value) return;
    localStorage.setItem("refresh-token", value);
  }
  
}
