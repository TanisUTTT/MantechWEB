import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { filter, map } from 'rxjs';
import { EmailService } from 'src/app/api/email.service';
import { EmpresaService } from 'src/app/api/empresa.service';
import { RolService } from 'src/app/api/rol.service';
import { StatusUsuarioService } from 'src/app/api/status-usuario.service';
import { UsuarioAPIService } from 'src/app/api/usuario-api.service';
import { emailModel } from 'src/app/models/email';
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
  usuarioData!: UsuarioModel[];
  showAdd: boolean =true;
  showUpdate: boolean = false;
  usuarioModelObj: UsuarioModel = new UsuarioModel();
  emailModelObj: emailModel= new emailModel();
  empresas!: empresaModel[];
  roles!: RolModel[];
  status!:StatusUsuarioModel[];
  idEmpresa!:any;
  idRol!:any;
  idSta!:any;
  contrasenaAleatoria!:any;
  Data:any;
  datosEmpresa: empresaModel = new empresaModel();
  datosUsuario: UsuarioModel = new UsuarioModel();

  
 
  constructor(private formBuilder: FormBuilder,private api: UsuarioAPIService, 
    private apiEmpresa: EmpresaService,private apiRol: RolService,
    private apiStatus: StatusUsuarioService, private apiEmail: EmailService) { }

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
      registrado : [''],
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
    this.idSta=1;
    this.obtenerQuien();
    console.log("Es el id del localstorage" + this.idEmpresa );
    this.getAllUsuarios();
  }

  getAllUsuarios(){
    this.api.getUsuariosFK(this.idEmpresa)
    .subscribe(res => {
      this.usuarioData = res
    });
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

  clickAdd(){
    this.formValue.reset();
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
    this.usuarioModelObj.clave_empresa= this.formValue.value.claveEmpresa;
    this.usuarioModelObj.fk_empresa = this.empresas.find( empresaadd => empresaadd.id = this.idEmpresa );
    this.usuarioModelObj.fk_rol= this.roles.find( roladd => roladd.id = this.idRol );
    
    if(this.idRol==1){
      this.contrasenaAleatoria = Math.random().toString(36).substr(2, 6);
      this.enviarContrase??a(this.usuarioModelObj.correo,"Contrase??a para ingresar a Mantech" , this.contrasenaAleatoria);
      this.usuarioModelObj.fk_statususuario= this.status.find( statusadd => statusadd.id = this.idSta);
      this.usuarioModelObj.contrasena=this.contrasenaAleatoria;
    }
    if(this.idRol==2){
      this.usuarioModelObj.registrado = "No";
    }

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
    // this.formValue.controls['rol'].value(this.roles.find(roladd => roladd.id = row.idRol));
    
  }

  update(){
    this.usuarioModelObj.nombre_empleado = this.formValue.value.nombre;
    this.usuarioModelObj.apellido_paterno = this.formValue.value.apellidoP;
    this.usuarioModelObj.apellido_materno= this.formValue.value.apellidoM;
    this.usuarioModelObj.telefono= this.formValue.value.telefono;
    this.usuarioModelObj.correo = this.formValue.value.correo;
    this.usuarioModelObj.contrasena = this.formValue.value.contrasena;
    this.usuarioModelObj.fk_statususuario= this.formValue.value.status;
    this.usuarioModelObj.clave_empresa= this.formValue.value.claveEmpresa;
    this.usuarioModelObj.fk_empresa = this.empresas.find( empresaadd => empresaadd.id = this.idEmpresa );
    this.usuarioModelObj.fk_rol= this.roles.find( roladd => roladd.id = this.idRol );
    this.usuarioModelObj.fk_statususuario= this.status.find( statusadd => statusadd.id = this.idSta);

    
    this.api.updateUsuario(this.usuarioModelObj, this.usuarioModelObj.id)
    .subscribe(res =>{
      console.log(res);
      alert("Se Actualizo correctamente")
      let ref = document.getElementById('cancel')
      ref?.click();
      this.formValue.reset(true);
      this.getAllUsuarios();
    })
  }
  
  enviarContrase??a(to: string, subject: string,message:string){
    this.emailModelObj.to = to;
    this.emailModelObj.subject = subject;
    this.emailModelObj.message = message;
    this.apiEmail.sentEmail(this.emailModelObj)
    .subscribe(res =>{
      console.log(res);
      alert("Se envio contrase??a correctamente")
      let ref = document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getAllUsuarios();
    })
  }

}
