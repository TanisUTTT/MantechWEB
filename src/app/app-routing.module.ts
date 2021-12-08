import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardGuard } from './api/guard.guard';
import { GuardSistemasGuard } from './api/guard-sistemas.guard';
import { DispositivosComponent } from './pages/dispositivos/dispositivos.component';
import { EmpresasComponent } from './pages/empresas/empresas.component';
import { GraficaComponent } from './pages/grafica/grafica.component';
import { HomeEmpresaComponent } from './pages/home-empresa/home-empresa.component';
import { HomeSistemasComponent } from './pages/home-sistemas/home-sistemas.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { MantenimientoComponent } from './pages/mantenimiento/mantenimiento.component';
import { MetodoPagoComponent } from './pages/metodo-pago/metodo-pago.component';
import { NavEmpresasComponent } from './pages/nav-empresas/nav-empresas.component';
import { RegistrarEmpresaComponent } from './pages/registrar-empresa/registrar-empresa.component';
import { TerminosComponent } from './pages/terminos/terminos.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { VideosComponent } from './pages/videos/videos.component';
import { UsuariosEmpresasComponent } from './pages/usuarios-empresas/usuarios-empresas.component';
import { DispostivosEmpresasComponent } from './pages/dispostivos-empresas/dispostivos-empresas.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent},
  { path: 'home', component: HomeComponent},
  { path: 'registrarEmpresa', component: RegistrarEmpresaComponent},
  { path: 'pago', component: MetodoPagoComponent},
  { path: 'usuarios', component: UsuariosComponent},
  { path: 'empresas', component: EmpresasComponent },
  { path: 'dispositivos', component: DispositivosComponent },
  { path: 'mantenimiento', component: MantenimientoComponent },
  { path: 'homeEmpresas', component: HomeEmpresaComponent, canActivate:[GuardGuard] },
  { path: 'homeSistemas', component: HomeSistemasComponent, canActivate:[GuardSistemasGuard] },
  { path: 'videos', component: VideosComponent },
  { path: 'terminos', component: TerminosComponent },
  { path: 'grafica', component: GraficaComponent },
  { path: 'usuariosEmpresa', component: UsuariosEmpresasComponent },
  { path: 'dispositivosEmpresa', component: DispostivosEmpresasComponent },
  { path: '', component: HomeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
