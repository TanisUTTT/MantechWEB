import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './component/nav/nav.component';
import { DispositivosComponent } from './pages/dispositivos/dispositivos.component';
import { EmpresasComponent } from './pages/empresas/empresas.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { MantenimientoComponent } from './pages/mantenimiento/mantenimiento.component';
import { MetodoPagoComponent } from './pages/metodo-pago/metodo-pago.component';
import { RegistrarEmpresaComponent } from './pages/registrar-empresa/registrar-empresa.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent},
  { path: 'home', component: HomeComponent},
  { path: 'nav', component: NavComponent},
  { path: 'registrarEmpresa', component: RegistrarEmpresaComponent},
  { path: 'pago', component: MetodoPagoComponent},
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'empresas', component: EmpresasComponent },
  { path: 'dispositivos', component: DispositivosComponent },
  { path: 'mantenimiento', component: MantenimientoComponent },
  { path: '', component: HomeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
