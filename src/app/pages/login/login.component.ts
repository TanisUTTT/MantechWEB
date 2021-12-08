import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/api/auth.service';
import { EmpresaService } from 'src/app/api/empresa.service';
import { UsuarioAPIService } from 'src/app/api/usuario-api.service';
import { empresaModel } from 'src/app/models/empresa';
import { UsuarioModel } from 'src/app/models/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,private api: AuthService,
     private formBuilder: FormBuilder, 
     private apiUsuarios: UsuarioAPIService,private apiEmpresa: EmpresaService) { }
  correo!:any;
  contrasena!:any;
  formValue!: FormGroup;
  usuarioData!:any;
  empresas!: empresaModel[];
  usuarios!: UsuarioModel[];
  lolUsua !:any;
  lolEmpre !:any;

  ngOnInit(): void {
    localStorage.clear();
    this.formValue= this.formBuilder.group({
      correo : [''],
      contraseña : [''],
    })
    this.apiEmpresa.getEmpresas().subscribe((data) => {
      this.empresas = data;
    });
    this.apiUsuarios.getUsuarios().subscribe((data) => {
      this.usuarios = data;
    });
  }

  login(){
    console.log(this.usuarios);
    this.correo = this.formValue.value.correo;
    console.log("El correo de html es " + this.correo)
    this.lolUsua = this.usuarios.findIndex(c => c.correo == this.correo);
    this.lolEmpre = this.empresas.findIndex(c => c.correo == this.correo);
    console.log("Usuarios: "+this.lolUsua);
    console.log("Empresas: " +this.lolEmpre);
    this.contrasena = this.formValue.value.contraseña;
     if (this.lolUsua == -1) {
        if(this.lolEmpre == -1){
          alert("No estas bien identificado, comunicate con tu empresa");
        }
     }
      if (this.lolUsua!=-1){
        //alert("Eres usuario")
          this.api.getLogin(this.correo, this.contrasena)
          .subscribe((data) => {
          if (data!=null) {
            localStorage.setItem("objetoUsuario", JSON.stringify(data))
            this.router.navigate(['homeSistemas']);
          }else{
            alert("Datos incorrectos, vuelve a intentarlo");
          }
        });
      }
      if (this.lolEmpre!=-1){
        //alert("Eres empresa")
        this.api.getloginEmpresa(this.correo, this.contrasena)
        .subscribe((data) => {
          if (data!=null) {
            localStorage.setItem("objetoEmpresa", JSON.stringify(data));
            this.router.navigate(['homeEmpresas']);
          }else{
            alert("Datos incorrectos, vuelve a intentarlo");
          }
        });
      }
  }
  irRegistro(){
    this.router.navigate(['registrarEmpresa']);
  }
}
