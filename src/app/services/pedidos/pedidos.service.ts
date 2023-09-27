import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {
  
private apiUrl = 'https://apidev.logifruit.es:8888/v1/Pedidos/';

constructor(private http: HttpClient) { }

private getAccessToken(): string | null {
  return sessionStorage.getItem('accessToken');
}


  getMotivosOperaciones(pedido: string) {
    const ruta = "motivos/operaciones"
    const urlComp= this.apiUrl + ruta + '?numeroPedido=' + pedido;
    return this.http.get<any>(urlComp);
  }


}
