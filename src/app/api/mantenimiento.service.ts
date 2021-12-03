import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MantenimientoService {

  api="https://mantech-back.herokuapp.com/api/HistorialMantenimientos/";
  constructor(private http : HttpClient) { }

  postMantenimiento(data: any){
    return this.http.post<any>(this.api, data)
    .pipe(map((res:any)=>{
      return res;
      }))
    }
  
    getMantenimiento(){
      return this.http.get<any>(this.api)
      .pipe(map((res:any)=>{
        return res;
      }))
    }
  
    getMantenimientoID(id:number){
      return this.http.get<any>(this.api+"/"+id)
      .pipe(map((res:any)=>{
        return res;
      }))
    }
  
    updateMantenimiento(data: any, id:number){
      return this.http.put<any>(this.api+ id, data)
      .pipe(map((res:any)=>{
        return res;
      }))
    }
  
    deleteMantenimiento(id: number){
      return this.http.delete<any>(this.api+ id)
      .pipe(map((res:any)=>{
        return res;
      }))
    }
}
