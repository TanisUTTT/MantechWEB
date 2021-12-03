import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpresaService } from 'src/app/api/empresa.service';
import { empresaModel } from 'src/app/models/empresa';

@Component({
  selector: 'app-metodo-pago',
  templateUrl: './metodo-pago.component.html',
  styleUrls: ['./metodo-pago.component.scss']
})
export class MetodoPagoComponent implements OnInit {

    constructor(private api: EmpresaService, private router: Router) { }
    datosEmpresa: empresaModel = new empresaModel();
    Data:any;

  ngOnInit(): void {
    
  }
  
  Guardar(){
  this.Data = localStorage.getItem("objetoEmpresa");
  this.datosEmpresa=JSON.parse(this.Data);
  console.log(this.datosEmpresa.nombre);
    this.api.postEmpresa(this.datosEmpresa)
    .subscribe(res =>{
      console.log(res);
      alert("Se agrego correctamente, puede iniciar sesion")
      this.router.navigate(["login"]);
    })
  }



}
