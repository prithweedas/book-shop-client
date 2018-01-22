import { Injectable } from "@angular/core";

@Injectable()
export class TokenService {
  constructor() {}

  public get Token(): string {
    return this.getAnyToken("token");
  }
  
  public set Token(value: string) {
    this.setAnyToken("token", value);
  }

  public get RefreshToken(): string {
    return this.getAnyToken("refresh-token");
  }

  public set RefreshToken(value: string) {
    this.setAnyToken("refresh-token", value);
  }

  private setAnyToken(tokenName: string, value: string) {
    if (!value) return;
    localStorage.setItem(tokenName, value);
  }
  private getAnyToken(tokenName: string) {
    return localStorage.getItem(tokenName) || undefined;
  }
}
