import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent} from './vistas/login/login.component';
import { PaginaPrincipalComponent} from './vistas/pagina-principal/pagina-principal.component';
import { NewUsuarioComponent} from './vistas/new-usuario/new-usuario.component';
import { CertificadoComponent} from './vistas/certificado/certificado.component';
import { NewCertificadoComponent } from './vistas/new-certificado/new-certificado.component';
const routes: Routes = [
  { path: "newCertificado", component: NewCertificadoComponent },
  { path: "certificado", component: CertificadoComponent },
  { path: "newUsuario", component: NewUsuarioComponent },
  { path: "paginaPrincipal", component: PaginaPrincipalComponent },
  { path: "login", component: LoginComponent },
  { path: "", redirectTo: "login", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
