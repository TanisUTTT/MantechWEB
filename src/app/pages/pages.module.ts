import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegistrarEmpresaComponent } from './registrar-empresa/registrar-empresa.component';
import { MetodoPagoComponent } from './metodo-pago/metodo-pago.component';
import { NavComponent } from '../component/nav/nav.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmpresasComponent } from './empresas/empresas.component';
import { MantenimientoComponent } from './mantenimiento/mantenimiento.component';
import { DispositivosComponent } from './dispositivos/dispositivos.component';
import { HomeEmpresaComponent } from './home-empresa/home-empresa.component';
import { HomeSistemasComponent } from './home-sistemas/home-sistemas.component';
import { VideosComponent } from './videos/videos.component';
import { TerminosComponent } from './terminos/terminos.component';
import { GraficaComponent } from './grafica/grafica.component';
import { ComponentModule } from '../component/component.module';
import { NavEmpresasComponent } from './nav-empresas/nav-empresas.component';


@NgModule({
  declarations: [
    LoginComponent,
    HomeComponent,
    RegistrarEmpresaComponent,
    MetodoPagoComponent,
    UsuariosComponent,
    EmpresasComponent,
    MantenimientoComponent,
    DispositivosComponent,
    HomeEmpresaComponent,
    HomeSistemasComponent,
    VideosComponent,
    TerminosComponent,
    GraficaComponent,
    NavEmpresasComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentModule
  ],
})
export class PagesModule { }
