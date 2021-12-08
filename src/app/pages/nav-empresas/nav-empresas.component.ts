import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { empresaModel } from 'src/app/models/empresa';
import { UsuarioModel } from 'src/app/models/usuario';

@Component({
  selector: 'app-nav-empresas',
  templateUrl: './nav-empresas.component.html',
  styleUrls: ['./nav-empresas.component.scss']
})
export class NavEmpresasComponent implements OnInit {
  name:any;
  show: boolean = false;
  showEmresa: boolean = false;
  Data:any;
  datosEmpresa: empresaModel = new empresaModel();
  datosUsuario: UsuarioModel = new UsuarioModel();
  idEmpresa!:any;
  datoEmpresa = localStorage.getItem("objetoEmpresa");
  datoUsuario = localStorage.getItem("objetoUsuario");
  constructor(private router: Router) { }

  ngOnInit(): void {
    
    this.obtenerQuien();

    
  }
  obtenerQuien() {
    if(this.datoEmpresa != null){
        this.Data = localStorage.getItem("objetoEmpresa");
        this.datosEmpresa=JSON.parse(this.Data);
        this.idEmpresa= this.datosEmpresa.id;
        this.name=this.datosEmpresa.nombre;
        this.showEmresa=true
    }
    if(this.datoUsuario != null){
      this.Data = localStorage.getItem("objetoUsuario");
      this.datosUsuario=JSON.parse(this.Data);
      this.datosEmpresa=this.datosUsuario.fk_empresa;
      this.idEmpresa= this.datosEmpresa.id;
      this.name=this.datosUsuario.nombre_empleado;
      this.show=true
  }
  }
  irHome(){
    if(this.datoEmpresa != null){
      this.router.navigate(['homeEmpresas']);
    }
    if(this.datoUsuario != null){
      this.router.navigate(['homeSistemas']);
    }
    
  }
  irSistemas(){
      this.router.navigate(['usuarios']);

  }
  irVideos(){
    this.router.navigate(['videos']);
  }
  irDispositivos(){
    
    if(this.datoEmpresa != null){
      this.router.navigate(['dispositivosEmpresa']);
    }
    if(this.datoUsuario != null){
      this.router.navigate(['dispositivos']);
    }
  }
  cerrar(){
    localStorage.clear();
    this.router.navigate(['login']);
  }
}
