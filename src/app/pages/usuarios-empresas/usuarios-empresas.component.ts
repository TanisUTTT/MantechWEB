import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { map } from 'rxjs';
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
  selector: 'app-usuarios-empresas',
  templateUrl: './usuarios-empresas.component.html',
  styleUrls: ['./usuarios-empresas.component.scss']
})
export class UsuariosEmpresasComponent implements OnInit {

  formValue!: FormGroup;
  usuarioData!: UsuarioModel[];
  usuarioModelObj: UsuarioModel = new UsuarioModel();
  emailModelObj: emailModel= new emailModel();
  empresas!: empresaModel[];
  roles!: RolModel[];
  status!:StatusUsuarioModel[];
  idEmpresa!:any;
  idRol!:any;
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
    this.Data = localStorage.getItem("objetoEmpresa");
    this.datosEmpresa=JSON.parse(this.Data);
    this.idEmpresa= this.datosEmpresa.id;
    console.log("Es el id del localstorage" + this.idEmpresa );
    this.getAllUsuarios()
  }

  getAllUsuarios(){
    this.api.getUsuarios()
    .subscribe(res => {
      this.usuarioData=res
      }
    );
  }
}
