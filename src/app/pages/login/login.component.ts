import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/api/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,private api: AuthService, private formBuilder: FormBuilder) { }
  correo!:any;
  contrasena!:any;
  formValue!: FormGroup;
  usuarioData!:any;
  

  ngOnInit(): void {
    this.formValue= this.formBuilder.group({
      correo : [''],
      contraseña : [''],
    })
  }
  login(){
   this.correo = this.formValue.value.correo;
   this.contrasena = this.formValue.value.contraseña;
    this.api.getLogin(this.correo, this.contrasena)
    .subscribe((data) => {
      if (data=[]) {
        alert("Datos incorrectos, vuelve a intentarlo")
      }else{
        this.router.navigate(['usuarios']);
      }
    });
  }
}
