import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EmpresaService } from 'src/app/api/empresa.service';
import { EstadoService } from 'src/app/api/estado.service';
import { MunicipioService } from 'src/app/api/municipio.service';
import { StatusEmpresaService } from 'src/app/api/status-empresa.service';
import { empresaModel } from 'src/app/models/empresa';
import { estadosModel } from 'src/app/models/estados';
import { municipiosModel } from 'src/app/models/municipio';
import { statusEmpresaModel } from 'src/app/models/statusEmpresa';

@Component({
  selector: 'app-registrar-empresa',
  templateUrl: './registrar-empresa.component.html',
  styleUrls: ['./registrar-empresa.component.scss']
})
export class RegistrarEmpresaComponent implements OnInit {

  formValue!: FormGroup;
  empresaData!: any;
  showAdd: boolean = true;
  showUpdate: boolean = false;
  modelObj: empresaModel = new empresaModel();
  estados!: estadosModel[];
  status!:statusEmpresaModel[];
  municipios!:municipiosModel[];
  idEstado!:any;
  idStatus!:any;
  idMunicipio!:any;
  
 
  constructor(private formBuilder: FormBuilder,private api: EmpresaService, 
    private apiEstado: EstadoService, private apiStatus: StatusEmpresaService,
    private apiMunicipios: MunicipioService,private router: Router) { }

  ngOnInit(): void {
    this.formValue= this.formBuilder.group({
      nombre : [''],
      correo : [''],
      contrasena : [''],
      claveUnica : [''],
      descripcion : [''],
      direccion: [''],
      estado : [''],
      municipio : [''],
      status : [''],
    })


    this.apiEstado.getEstado().subscribe( (data) => {
       this.estados=data;
    })

     this.apiStatus.getStatus().subscribe( (data)=>{
       this.status=data;
     })

     this.apiMunicipios.getMunicipio().subscribe((data)=>{
       this.municipios=data;
       
     })
  }

  irPago(){
    this.router.navigate(['pago']);
  }

  post(){
    this.modelObj.nombre = this.formValue.value.nombre;
    this.modelObj.correo = this.formValue.value.correo;
    this.modelObj.contraseña = this.formValue.value.contrasena;
    this.modelObj.claveunica = this.formValue.value.claveUnica;
    this.modelObj.descripcion = this.formValue.value.descripcion;
    this.modelObj.direccion = this.formValue.value.direccion;

    this.modelObj.fk_statusempresa =  this.status.find(add=> add.id = this.idStatus);
    this.modelObj.fk_municipio =  this.municipios.find(add=> add.id = this.idMunicipio);
    this.modelObj.fk_estado =  this.estados.find(add=> add.id = this.idEstado);


    this.api.postEmpresa(this.modelObj)
    .subscribe(res =>{
      console.log(res);
      alert("Se agrego correctamente")
      // let ref = document.getElementById('cancel')
      // ref?.click();
      // this.formValue.reset();
    })
  }
  clickLogin(){
    this.router.navigate(["login"]);
  }
}
