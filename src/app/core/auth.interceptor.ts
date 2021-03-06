import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpResponse, HttpRequest, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../shared/services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const access_token = this.authService.getAuthToken()
    httpRequest = httpRequest.clone({
      setHeaders: {
        Authorization: `Bearer ${access_token}`
      }
    });
    return next.handle(httpRequest);
  }
}
