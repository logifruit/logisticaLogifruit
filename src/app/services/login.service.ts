import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

private apiUrl = 'https://apidev.logifruit.es:8888/v1/auth/';

constructor(private http: HttpClient) { }

login(username: string, password: string): Observable<any> {
  const loginUrl = `${this.apiUrl}autenticacion`;
  const body = { usuario: username, password: password };


  // {
  //   "usuario":"upv",
  //   "password":"CovidSQL19"
  //   }




  return this.http.post(loginUrl, body);
}
}
