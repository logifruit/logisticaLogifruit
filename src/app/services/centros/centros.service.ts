import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CentrosService {
  
  private apiUrl = 'https://apidev.logifruit.es:8888/v1/Centros/';

  constructor(private http: HttpClient) { }
  
  
  getAllCentros() {
    const ruta = "all"
    return this.http.get<any>(this.apiUrl + ruta);
  }

  getCentroOperador(operador:string) {
    const ruta = "operador/"
    return this.http.get<any>(this.apiUrl + ruta + operador);
  }
}
