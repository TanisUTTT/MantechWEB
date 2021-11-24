import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UsuarioAPIService } from 'src/app/api/usuario-api.service';
import { UsuarioModel } from 'src/app/models/usuario';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {
  formValue!: FormGroup;
  usuarioData!: any;
  showAdd: boolean = true;
  showUpdate: boolean = false;
  usuarioModelObj: UsuarioModel = new UsuarioModel();

  constructor(private formBuilder: FormBuilder,private api: UsuarioAPIService) { }

  ngOnInit(): void {
    this.formValue= this.formBuilder.group({
      nombre : [''],
      apellidoP : [''],
      apellidoM : [''],
      telefono : [''],
      correo : [''],
      contrasena : [''],
      claveEmpresa :[''],
      empresa : [''],
      rol :[''],
      status : [''],
    })
    this.getAllUsuarios();
  }

  getAllUsuarios(){
    this.api.getUsuarios()
    .subscribe(res => {
      this.usuarioData = res;
    })
  }

  clickAddUsuario(){
    this.formValue.reset;
    this.showAdd = true;
    this.showUpdate = false;
  }

  deleteEmployee(row : any){
    this.api.deleteUsuario(row.id)
    .subscribe(res=>{
      alert("Empleado eliminado")
      this.getAllUsuarios();
    })
  }

  postUsuario(){
    this.usuarioModelObj.nombre_empleado = this.formValue.value.nombre;
    this.usuarioModelObj.apellido_paterno = this.formValue.value.apellidoP;
    this.usuarioModelObj.apellido_materno= this.formValue.value.apellidoM;
    this.usuarioModelObj.telefono= this.formValue.value.telefono;
    this.usuarioModelObj.correo = this.formValue.value.correo;
    this.usuarioModelObj.contrasena = this.formValue.value.contrasena;
    this.usuarioModelObj.fk_empresa = this.formValue.value.empresa;
    this.usuarioModelObj.fk_rol= this.formValue.value.rol;
    this.usuarioModelObj.fk_statususuario= this.formValue.value.status;
    this.usuarioModelObj.clave_empresa= this.formValue.value.claveEmpresa;
    
    
    this.api.postUsuario(this.usuarioModelObj)
    .subscribe(res =>{
      console.log(res);
      alert("Se agrego correctamente")
      let ref = document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getAllUsuarios();
    })
  }

  onEdit(row: any){
    this.showAdd = false;
    this.showUpdate = true;
    this.usuarioModelObj.id=row.id;
    this.formValue.controls['nombre'].setValue(row.nombre);
  }

  updateUsuario(){
    this.usuarioModelObj.nombre_empleado = this.formValue.value.nombre;
    this.usuarioModelObj.apellido_paterno = this.formValue.value.apellidoP;
    this.usuarioModelObj.apellido_materno= this.formValue.value.apellidoM;
    this.usuarioModelObj.telefono= this.formValue.value.telefono;
    this.usuarioModelObj.correo = this.formValue.value.correo;
    this.usuarioModelObj.contrasena = this.formValue.value.contraseña;
    this.usuarioModelObj.fk_empresa = this.formValue.value.empresa;
    this.usuarioModelObj.fk_rol= this.formValue.value.rol;
    this.usuarioModelObj.fk_statususuario= this.formValue.value.status;
    this.usuarioModelObj.clave_empresa= this.formValue.value.claveEmpresa;
    
    this.api.updateUsuario(this.usuarioModelObj, this.usuarioModelObj.id)
    .subscribe(res =>{
      console.log(res);
      alert("Se Actualizo correctamente")
      let ref = document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getAllUsuarios();
    })
  }

}
