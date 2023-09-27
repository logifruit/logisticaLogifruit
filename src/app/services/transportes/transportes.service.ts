import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransportesService {
  
  private apiUrl = 'https://apidev.logifruit.es:8888/v1/Transporte/';

  constructor(private http: HttpClient) { }
  
  private getAccessToken(): string | null {
    return sessionStorage.getItem('accessToken');
  }
  
  
    getAllTransports() {
      const ruta = "all";
        const urlComp= this.apiUrl + ruta;
        return this.http.get<any>(urlComp);
    }
}
