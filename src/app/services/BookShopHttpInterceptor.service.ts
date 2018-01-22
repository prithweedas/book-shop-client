import { TokenService } from "./token.service";
import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpEvent,
  HttpHandler,
  HttpRequest,
  HttpResponse
} from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { map } from "rxjs/operators";

@Injectable()
export class BookShopHttpInterceptor implements HttpInterceptor {
  constructor(private tokenService: TokenService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // set token in request body
    req.headers.set("token", this.tokenService.Token);
    req.headers.set("refreshToken", this.tokenService.RefreshToken);

    return next.handle(req).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          // extract token form respose body
          const token = event.headers.get("token");
          const refreshToken = event.headers.get("refreshToken");
          if (token) this.tokenService.Token = token;
          if (refreshToken) this.tokenService.RefreshToken = refreshToken;
        }
        return event;
      })
    );
  }
}
