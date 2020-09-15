import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { NbAuthService } from '@nebular/auth';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  token: string;
  constructor(private NbAuth: NbAuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {  
    console.log('la requete')
    console.log(request)
    if(request.body !== null && (request.body.hasOwnProperty('email') && request.body.hasOwnProperty('password'))){
      return next.handle(request);
    }else{
    this.NbAuth.getToken().subscribe(
      (data) => {
        this.token = data.getValue();
      },
      (error) => {
        console.log('No token sorry');
      }
    );

    const clone = request.clone({
      setHeaders: { Authorization: 'Bearer' + this.token}
    });

    console.log('le clone');
    console.log(clone);
    return next.handle(clone);
  }
    }

}
export const TokenInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: TokenInterceptor,
  multi: true
}
