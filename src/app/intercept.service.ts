import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptService implements HttpInterceptor {

  start!: number;
  end!: number;
  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.start = new Date().getTime();
    return next.handle(req).pipe(
      tap(res => {
        this.end =  new Date().getTime();
        console.log(this.start);
        console.log(this.end);
        console.log(this.end - this.start);
      }))
  }
}
