import { Injectable } from '@angular/core';
import { TOKEN, REFRESH_TOKEN } from '../MagicString';

@Injectable()
export class TokenService {
  constructor() {}

  public get Token(): string {
    return this.getAnyToken(TOKEN);
  }

  public set Token(value: string) {
    this.setAnyToken(TOKEN, value);
  }

  public get RefreshToken(): string {
    return this.getAnyToken(REFRESH_TOKEN);
  }

  public set RefreshToken(value: string) {
    this.setAnyToken(REFRESH_TOKEN, value);
  }

  private setAnyToken(tokenName: string, value: string) {
    if (!value) return;
    localStorage.setItem(tokenName, value);
  }
  private getAnyToken(tokenName: string) {
    return localStorage.getItem(tokenName) || undefined;
  }
}
