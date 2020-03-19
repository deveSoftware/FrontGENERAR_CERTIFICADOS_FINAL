import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';//IMPORTAR MODULO PARA RECIBIR PETICIONES HttpClient
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './vistas/login/login.component';
import { PaginaPrincipalComponent } from './vistas/pagina-principal/pagina-principal.component';
import { ServicioLoginService} from './servicios/servicio-login.service';//IMPORTAR EL SERVICIO DE LOGIN
import {FormsModule} from '@angular/forms'; //IMPORTAR modulo para conectar componentes
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PaginaPrincipalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [
    ServicioLoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
