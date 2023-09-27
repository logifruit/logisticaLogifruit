import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { MainComponent } from './pages/principal/main/main.component';
import { ModificarPedidoComponent } from './pedidos/modificar-pedido/modificar-pedido.component';
import { EditComponent } from './pages/pedidos/edit/edit.component';
import { authGuard } from './auth.guard';
import { ApkComponent } from './pages/principal/apk/apk.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'apk',
    component: ApkComponent,
    canMatch: [authGuard],
    //canActivate: [AuthGuard],
    children: [
      { path: 'editPedidos', component: ModificarPedidoComponent },
      { path: 'editPedido', component: EditComponent },
      { path: 'soporte', redirectTo: 'https://logifruit.atlassian.net/servicedesk/customer/portals', pathMatch: 'full' }
      // { path: 'option2', component: Option2Component },
      // { path: 'option3', component: Option3Component }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
