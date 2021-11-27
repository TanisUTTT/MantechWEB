import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstadoService {

  api="https://mantech-back.herokuapp.com/api/CatEstados/";
  constructor(private http : HttpClient) { }

  postEstado(data: any){
    return this.http.post<any>(this.api, data)
    .pipe(map((res:any)=>{
      return res;
      }))
    }
  
    getEstado(){
      return this.http.get<any>(this.api)
      .pipe(map((res:any)=>{
        return res;
      }))
    }
  
    getEstadoID(id:number){
      return this.http.get<any>(this.api+"/"+id)
      .pipe(map((res:any)=>{
        return res;
      }))
    }
  
    updateEstado(data: any, id:number){
      return this.http.put<any>(this.api+ id, data)
      .pipe(map((res:any)=>{
        return res;
      }))
    }
  
    deleteEstado(id: number){
      return this.http.delete<any>(this.api+ id)
      .pipe(map((res:any)=>{
        return res;
      }))
    }
}
