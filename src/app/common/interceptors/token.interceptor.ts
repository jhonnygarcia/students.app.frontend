import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpErrorResponse
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class TokenInterceptor implements HttpInterceptor {

    constructor(private router: Router) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        var token = localStorage.getItem('ACCESS_TOKEN');
        request = request.clone({
            setHeaders: {
                Authorization: `Bearer ${token}`
            }
        });
        return next.handle(request).pipe(
            tap(null, error => {
              if (error.status === 401 || error.status === 0) {
                this.router.navigate(["/auth"]);
              }
            })
          );
    }
}