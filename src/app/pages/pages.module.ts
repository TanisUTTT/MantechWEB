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
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class PagesModule { }
