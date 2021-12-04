import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  api="https://mantech-back.herokuapp.com/api/UsuariosSF/Session/";
  constructor(private http : HttpClient) { }
  
  getLogin(correo:string, contraseña:string){
    return this.http.get<any>(this.api+correo+"/"+contraseña+"/")
    .pipe(map((res:any)=>{
      return res;
    }))
  }
}
