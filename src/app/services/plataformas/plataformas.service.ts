import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlataformasService {

  private apiUrl = 'https://apidev.logifruit.es:8888/v1/Plataformas/';

  constructor(private http: HttpClient) { }
  
  
  getAllPlataformas() {
    const ruta = "all"
    return this.http.get<any>(this.apiUrl + ruta);
  }

  getPlataforma(plataforma:string) {
    const ruta = "plataformas/"
    return this.http.get<any>(this.apiUrl + ruta + plataforma);
  }
}
