import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(
    private router: Router,
    public authService: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Obtenemos el token desde sessionStorage.
    const authToken = sessionStorage.getItem('accessToken');

    // Si el token existe, clonamos la solicitud original y añadimos el encabezado con el token.
    if (authToken) {
      const authRequest = request.clone({
        setHeaders: {
          Authorization: `Bearer ${authToken}`
        }
      });

      // Pasamos la solicitud modificada al siguiente manejador.
      return next.handle(authRequest).pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.status === 401) {
            // Token caducado o no autorizado.
            console.log("Caducado o no autorizado");
            this.logout();
            
          }
          return throwError(error);
        })
      );
    }

    // Si el token no existe, simplemente pasamos la solicitud original sin modificar.
    return next.handle(request);
  }


  logout() {
    this.authService.logout();
    this.redireccionar();
  }

  redireccionar(){
    const redirectUrl = '/login';
    // Redirect the user
    this.router.navigate([redirectUrl]);
  }
}