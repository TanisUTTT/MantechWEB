import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RolService {

  api="https://mantech-back.herokuapp.com/api/CatRolUsuarios/";
  constructor(private http : HttpClient) { }

  postRol(data: any){
  return this.http.post<any>(this.api, data)
  .pipe(map((res:any)=>{
    return res;
    }))
  }

  getRol(){
    return this.http.get<any>(this.api)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  getRolID(id:number){
    return this.http.get<any>(this.api+"/"+id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  updateRol(data: any, id:number){
    return this.http.put<any>(this.api+ id, data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  deleteRol(id: number){
    return this.http.delete<any>(this.api+ id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
}