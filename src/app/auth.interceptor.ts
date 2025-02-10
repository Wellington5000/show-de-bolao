import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';

import {catchError, switchMap} from 'rxjs/operators';
import {AuthService} from "./services/auth.services";

@Injectable({
  providedIn: 'root',
})
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const accessToken = this.authService.getAccessToken();
    const clonedRequest = accessToken
      ? req.clone({
        setHeaders: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      : req;

    return next.handle(clonedRequest).pipe(
      catchError((error) => {
        if (error.status === 401) {
          return this.authService.refreshAccessToken().pipe(
            switchMap(() => {
              const newAccessToken = this.authService.getAccessToken();
              const retriedRequest = req.clone({
                setHeaders: {
                  Authorization: `Bearer ${newAccessToken}`,
                },
              });
              return next.handle(retriedRequest);
            }),
            catchError((refreshError) => {
              this.authService.logout();
              return throwError(() => refreshError);
            })
          );
        }
        this.authService.logout();
        return throwError(() => error);
      })
    );
  }
}
