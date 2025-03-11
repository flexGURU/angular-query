import {
  HTTP_INTERCEPTORS,
  HttpEvent,
  HttpHandler,
  HttpHandlerFn,
  HttpInterceptor,
  HttpInterceptorFn,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { inject } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { AuthService } from './auth.service';

export const authInterceptor: HttpInterceptorFn = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> => {
  const authService = inject(AuthService);

  if (authService.isLoggedIn) {
    req = req.clone({
      setHeaders: { Authorization: `Bearer ${authService.jwt}` },
    });
    console.log('intercept', req);
  }
  return next(req);
};
