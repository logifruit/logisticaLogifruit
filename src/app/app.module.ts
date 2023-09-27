import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Importa BrowserAnimationsModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { MainComponent } from './pages/principal/main/main.component';
import { ModificarPedidoComponent } from './pedidos/modificar-pedido/modificar-pedido.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidebarComponent } from './pages/principal/sidebar/sidebar.component';
import { HeaderComponent } from './pages/principal/header/header.component';
import { EditComponent } from './pages/pedidos/edit/edit.component';
import { CargaModelosComponent } from './shared/tabla/carga-modelos/carga-modelos.component';
import { FormCargaModelosComponent } from './shared/tabla/carga-modelos/form-carga-modelos/form-carga-modelos.component';

import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

import {MatButtonModule} from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import { LoginService } from './services/login.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ApkComponent } from './pages/principal/apk/apk.component';
import { BuscadorComponent } from './shared/buscador/buscador.component';
import { TokenInterceptor } from './token.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    ModificarPedidoComponent,
    SidebarComponent,
    HeaderComponent,
    EditComponent,
    CargaModelosComponent,
    FormCargaModelosComponent,
    LoginComponent,
    ApkComponent,
    BuscadorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    HttpClientModule
  ],
  providers: [
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
