import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent} from './vistas/login/login.component';
import { PaginaPrincipalComponent} from './vistas/pagina-principal/pagina-principal.component';

const routes: Routes = [
  { path: "paginaPrincipal", component: PaginaPrincipalComponent },
  { path: "login", component: LoginComponent },
  { path: "", redirectTo: "login", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
