import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { empresaModel } from 'src/app/models/empresa';
import { UsuarioModel } from 'src/app/models/usuario';

@Component({
  selector: 'app-home-sistemas',
  templateUrl: './home-sistemas.component.html',
  styleUrls: ['./home-sistemas.component.scss']
})
export class HomeSistemasComponent implements OnInit {

  Data:any;
  datosUsuario: UsuarioModel = new UsuarioModel();
  datosEmpresa: empresaModel = new empresaModel();
  idEmpresa!:any;
  name:any;
  nameEmpresa:any;

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.obtenerQuien();
    this.name=this.datosUsuario.nombre_empleado;
    this.nameEmpresa=this.datosEmpresa.nombre;
  }

  obtenerQuien() {
    let datoEmpresa = localStorage.getItem("objetoEmpresa");
    let datoUsuario = localStorage.getItem("objetoUsuario");
    if(datoEmpresa != null){
        this.Data = localStorage.getItem("objetoEmpresa");
        this.datosEmpresa=JSON.parse(this.Data);
        this.idEmpresa= this.datosEmpresa.id;
    }
    if(datoUsuario != null){
      this.Data = localStorage.getItem("objetoUsuario");
      this.datosUsuario=JSON.parse(this.Data);
      this.datosEmpresa=this.datosUsuario.fk_empresa;
      this.idEmpresa= this.datosEmpresa.id;
  }
  }
  irDispo(){
    this.router.navigate(["dispositivos"]);
  }
  irMante(){
    this.router.navigate(["mantenimiento"]);
  }
}
