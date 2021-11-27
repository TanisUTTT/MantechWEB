import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmpresaService } from 'src/app/api/empresa.service';
import { EstadoService } from 'src/app/api/estado.service';
import { MunicipioService } from 'src/app/api/municipio.service';
import { StatusEmpresaService } from 'src/app/api/status-empresa.service';
import { empresaModel } from 'src/app/models/empresa';
import { estadosModel } from 'src/app/models/estados';
import { municipiosModel } from 'src/app/models/municipio';
import { statusEmpresaModel } from 'src/app/models/statusEmpresa';

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.scss']
})
export class EmpresasComponent implements OnInit {

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
    private apiMunicipios: MunicipioService) { }

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
     

    this.getAll();
  }

  getAll(){
    this.api.getEmpresas()
    .subscribe(res => {
      this.empresaData = res;
    })
  }

  clickAdd(){
    this.formValue.reset();
    this.showAdd = true;
    this.showUpdate = false;
  }

  delete(row : any){
    this.api.deleteEmpresa(row.id)
    .subscribe(res=>{
      alert("Eliminacion correcta")
      this.getAll();
    })
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
      let ref = document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getAll();
    })
  }

  onEdit(row: any){
    this.showAdd = false;
    this.showUpdate = true;
    this.modelObj.id=row.id;
    this.formValue.controls['nombre'].setValue(row.nombre);
    
    
  }

  update(){
    this.modelObj.nombre = this.formValue.value.nombre;
    this.modelObj.correo = this.formValue.value.correo;
    this.modelObj.contraseña = this.formValue.value.contrasena;
    this.modelObj.claveunica = this.formValue.value.claveUnica;
    this.modelObj.descripcion = this.formValue.value.descripcion;
    this.modelObj.direccion = this.formValue.value.direccion;

    this.modelObj.fk_statusempresa =  this.status.find(add=> add.id = this.idStatus);
    this.modelObj.fk_municipio =  this.municipios.find(add=> add.id = this.idMunicipio);
    this.modelObj.fk_estado =  this.estados.find(add=> add.id = this.idEstado);

    
    this.api.updateEmpresa(this.modelObj, this.modelObj.id)
    .subscribe(res =>{
      console.log(res);
      alert("Se Actualizo correctamente")
      let ref = document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getAll();
    })
  }

}
