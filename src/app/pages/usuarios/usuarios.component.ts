import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmpresaService } from 'src/app/api/empresa.service';
import { RolService } from 'src/app/api/rol.service';
import { StatusUsuarioService } from 'src/app/api/status-usuario.service';
import { UsuarioAPIService } from 'src/app/api/usuario-api.service';
import { empresaModel } from 'src/app/models/empresa';
import { RolModel } from 'src/app/models/rol';
import { StatusUsuarioModel } from 'src/app/models/statusUsuario';
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
  empresas!: empresaModel[];
  roles!: RolModel[];
  status!:StatusUsuarioModel[];
  idEmpresa!:any;
  idRol!:any;
 
  constructor(private formBuilder: FormBuilder,private api: UsuarioAPIService, 
    private apiEmpresa: EmpresaService,private apiRol: RolService,
    private apiStatus: StatusUsuarioService) { }

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
    this.apiEmpresa.getEmpresas().subscribe((data) => {
      this.empresas = data;
    });
    this.apiRol.getRol().subscribe((data) => {
      this.roles = data;
    });
    this.apiStatus.getStatus().subscribe((data) => {
      this.status = data;
    });

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

  delete(row : any){
    this.api.deleteUsuario(row.id)
    .subscribe(res=>{
      alert("Empleado eliminado")
      this.getAllUsuarios();
    })
  }

  post(){
    this.usuarioModelObj.nombre_empleado = this.formValue.value.nombre;
    this.usuarioModelObj.apellido_paterno = this.formValue.value.apellidoP;
    this.usuarioModelObj.apellido_materno= this.formValue.value.apellidoM;
    this.usuarioModelObj.telefono= this.formValue.value.telefono;
    this.usuarioModelObj.correo = this.formValue.value.correo;
    this.usuarioModelObj.contrasena = this.formValue.value.contrasena;
    //this.usuarioModelObj.fk_empresa = this.formValue.value.empresa;
    //this.usuarioModelObj.fk_rol= this.formValue.value.rol;
    // this.usuarioModelObj.fk_statususuario= this.formValue.value.status;
    this.usuarioModelObj.clave_empresa= this.formValue.value.claveEmpresa;
    
    //guia
    //this.dispo.fk_cliente =  this.users.find(useradd=> useradd.id = this.id);

    this.usuarioModelObj.fk_empresa = this.empresas.find( empresaadd => empresaadd.id = 16 );
    this.usuarioModelObj.fk_rol= this.roles.find( roladd => roladd.id = 2 );
    this.usuarioModelObj.fk_statususuario= this.status.find( statusadd => statusadd.id = 3 );

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
    this.formValue.controls['nombre'].setValue(row.nombre_empleado);
    this.formValue.controls['apellidoP'].setValue(row.apellido_paterno);
    this.formValue.controls['apellidoM'].setValue(row.apellido_materno);
    this.formValue.controls['telefono'].setValue(row.telefono);
    this.formValue.controls['correo'].setValue(row.correo);
    this.formValue.controls['contrasena'].setValue(row.contrasena);
    this.formValue.controls['claveEmpresa'].setValue(row.clave_empresa);
    
  }

  update(){
    this.usuarioModelObj.nombre_empleado = this.formValue.value.nombre;
    this.usuarioModelObj.apellido_paterno = this.formValue.value.apellidoP;
    this.usuarioModelObj.apellido_materno= this.formValue.value.apellidoM;
    this.usuarioModelObj.telefono= this.formValue.value.telefono;
    this.usuarioModelObj.correo = this.formValue.value.correo;
    this.usuarioModelObj.contrasena = this.formValue.value.contrasena;
    //this.usuarioModelObj.fk_empresa = this.formValue.value.empresa;
    //this.usuarioModelObj.fk_rol= this.formValue.value.rol;
    // this.usuarioModelObj.fk_statususuario= this.formValue.value.status;
    this.usuarioModelObj.clave_empresa= this.formValue.value.claveEmpresa;
    
    //guia
    //this.dispo.fk_cliente =  this.users.find(useradd=> useradd.id = this.id);

    this.usuarioModelObj.fk_empresa = this.empresas.find( empresaadd => empresaadd.id = 16 );
    this.usuarioModelObj.fk_rol= this.roles.find( roladd => roladd.id = 2 );
    this.usuarioModelObj.fk_statususuario= this.status.find( statusadd => statusadd.id = 3 );

    
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
