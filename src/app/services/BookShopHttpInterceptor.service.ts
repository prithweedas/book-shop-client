import { TokenService } from './token.service';
import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpEvent,
  HttpHandler,
  HttpRequest,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { TOKEN, REFRESH_TOKEN } from '../MagicString';

@Injectable()
export class BookShopHttpInterceptor implements HttpInterceptor {
  constructor(private tokenService: TokenService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // set token in request body
    req.headers.set(TOKEN, this.tokenService.Token);
    req.headers.set(REFRESH_TOKEN, this.tokenService.RefreshToken);

    return next.handle(req).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          // extract token from respose body
          const token = event.headers.get(TOKEN);
          const refreshToken = event.headers.get(REFRESH_TOKEN);
          if (token) this.tokenService.Token = token;
          if (refreshToken) this.tokenService.RefreshToken = refreshToken;
        }
        return event;
      })
    );
  }
}
