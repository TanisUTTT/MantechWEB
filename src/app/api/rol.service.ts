import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RolService {

  api="https://mantech-back.herokuapp.com/api/RolUsuarios/";
  constructor(private http : HttpClient) { }

  postEmpresa(data: any){
  return this.http.post<any>(this.api, data)
  .pipe(map((res:any)=>{
    return res;
    }))
  }

  getEmpresas(){
    return this.http.get<any>(this.api)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  updateEmpresa(data: any, id:number){
    return this.http.put<any>(this.api+ id, data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  deleteEmpresa(id: number){
    return this.http.delete<any>(this.api+ id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
}