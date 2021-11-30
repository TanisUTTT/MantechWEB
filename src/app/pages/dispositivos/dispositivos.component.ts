import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DispositivosService } from 'src/app/api/dispositivos.service';
import { StatusDispoService } from 'src/app/api/status-dispo.service';
import { UsuarioAPIService } from 'src/app/api/usuario-api.service';
import { dispositivosModel } from 'src/app/models/dispositivos';
import { statusDispoModel } from 'src/app/models/statusDispo';
import { UsuarioModel } from 'src/app/models/usuario';

@Component({
  selector: 'app-dispositivos',
  templateUrl: './dispositivos.component.html',
  styleUrls: ['./dispositivos.component.scss']
})
export class DispositivosComponent implements OnInit {

  formValue!: FormGroup;
  dispoData!: any;
  showAdd: boolean = true;
  showUpdate: boolean = false;
  modelObj: dispositivosModel = new dispositivosModel();
  usuarios!: UsuarioModel[];
  status!:statusDispoModel[];
  idUsuario!:any;
  idStatus!:any;
  
 
  constructor(private formBuilder: FormBuilder,private api: DispositivosService, 
    private apiStatus: StatusDispoService,
    private apiUsuarios: UsuarioAPIService) { }

  ngOnInit(): void {
    this.formValue= this.formBuilder.group({
      
      tipo_dispositivo: [''],
      nombre: [''],
      marca: [''],
      modelo: [''],
      detalles: [''],
      tiempo_vida: [''],
      fecha_mantenimiento_prev: [''],
      fk_statsdispositivo: [''],
      fk_usuariossf: [''],
    })


     this.apiStatus.getStatus().subscribe( (data)=>{
       this.status=data;
     })

     this.apiUsuarios.getUsuarios().subscribe((data)=>{
       this.usuarios=data;
     })

    this.getAll();
  }

  getAll(){
    this.api.getDispo()
    .subscribe(res => {
      this.dispoData = res;
    })
  }

  clickAdd(){
    this.formValue.reset();
    this.showAdd = true;
    this.showUpdate = false;
  }

  delete(row : any){
    this.api.deleteDispo(row.id)
    .subscribe(res=>{
      alert("Eliminacion correcta")
      this.getAll();
    })
  }

  post(){
    this.modelObj.nombre = this.formValue.value.nombre;
    this.modelObj.detalles = this.formValue.value.detalles;
    this.modelObj.fecha_mantenimiento_prev = this.formValue.value.fecha_mantenimiento_prev;
    this.modelObj.marca = this.formValue.value.marca;
    this.modelObj.modelo = this.formValue.value.modelo;
    this.modelObj.tiempo_vida = this.formValue.value.tiempo_vida;
    this.modelObj.tipo_dispositivo = this.formValue.value.tipo_dispositivo;
    // this.modelObj. = this.formValue.value.;
    
    

    this.modelObj.fk_statsdispositivo =  this.status.find(add=> add.id = this.idStatus);
    this.modelObj.fk_usuariossf =  this.usuarios.find(add=> add.id = this.idUsuario);

    this.api.postDispo(this.modelObj)
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
     this.formValue.controls['marca'].setValue(row.marca);
     this.formValue.controls['nombre'].setValue(row.nombre);
     this.formValue.controls['modelo'].setValue(row.modelo);
     this.formValue.controls['tipo_dispositivo'].setValue(row.tipo_dispositivo);
     this.formValue.controls['detalles'].setValue(row.detalles);
     this.formValue.controls['tiempo_vida'].setValue(row.tiempo_vida);
     this.formValue.controls[' fecha_mantenimiento_prev'].setValue(row.fecha_mantenimiento_prev);
    
  }

  update(){
    this.modelObj.nombre = this.formValue.value.nombre;
    this.modelObj.detalles = this.formValue.value.detalles;
    this.modelObj.fecha_mantenimiento_prev =
     this.formValue.value.fecha_mantenimiento_prev;
    this.modelObj.marca = this.formValue.value.marca;
    this.modelObj.modelo = this.formValue.value.modelo;
    this.modelObj.tiempo_vida = this.formValue.value.tiempo_vida;
    this.modelObj.tipo_dispositivo = this.formValue.value.tipo_dispositivo;
    
    this.modelObj.fk_statsdispositivo =  this.status.find(add=> add.id = this.idStatus);
    this.modelObj.fk_usuariossf =  this.usuarios.find(add=> add.id = this.idUsuario);

    
    this.api.updateDispo(this.modelObj, this.modelObj.id)
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

