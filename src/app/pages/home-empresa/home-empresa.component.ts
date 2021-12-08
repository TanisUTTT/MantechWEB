import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { empresaModel } from 'src/app/models/empresa';

@Component({
  selector: 'app-home-empresa',
  templateUrl: './home-empresa.component.html',
  styleUrls: ['./home-empresa.component.scss']
})
export class HomeEmpresaComponent implements OnInit {

  constructor(private router:Router) { }
  Data:any;
  datosEmpresa: empresaModel = new empresaModel();
  

  ngOnInit(): void {
  this.Data = localStorage.getItem("objetoEmpresa");
    this.datosEmpresa=JSON.parse(this.Data);
    console.log(this.datosEmpresa.nombre);
  }

  irUsuarios(){
    this.router.navigate(["usuarios"]);
  }
  irDispo(){
    this.router.navigate(["dispositivosEmpresa"]);
  }
  

}
