import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {
  private apiUrl = 'https://apidev.logifruit.es:8888';///v1/articulos';

  constructor(private http: HttpClient) { }
  
  private getAccessToken(): string | null {
    return sessionStorage.getItem('accessToken');
  }
  
  
    getArticulosCliente(cliente: number){
      const ruta = "/operador/" + cliente + "/all"
      const urlComp= this.apiUrl + ruta ;
      return this.http.get<any>(urlComp);
    }
  
}
