import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UsuarioAPIService {

  api="https://mantech-back.herokuapp.com/api/UsuariosSF/";
  constructor(private http : HttpClient) { }

  postUsuario(data: any){
  return this.http.post<any>(this.api, data)
  .pipe(map((res:any)=>{
    return res;
    }))
  }

  getUsuarios(){
    return this.http.get<any>(this.api)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  updateUsuario(data: any, id:number){
    return this.http.put<any>(this.api+ id, data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  deleteUsuario(id: number){
    return this.http.delete<any>(this.api+ id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }



}
