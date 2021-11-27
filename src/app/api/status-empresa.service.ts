import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatusEmpresaService {

  api="https://mantech-back.herokuapp.com/api/CatStatusEmpresas/";
  constructor(private http : HttpClient) { }

  postStatus(data: any){
    return this.http.post<any>(this.api, data)
    .pipe(map((res:any)=>{
      return res;
      }))
    }
  
    getStatus(){
      return this.http.get<any>(this.api)
      .pipe(map((res:any)=>{
        return res;
      }))
    }
  
    getStatusID(id:number){
      return this.http.get<any>(this.api+"/"+id)
      .pipe(map((res:any)=>{
        return res;
      }))
    }
  
    updateStatus(data: any, id:number){
      return this.http.put<any>(this.api+ id, data)
      .pipe(map((res:any)=>{
        return res;
      }))
    }
  
    deleteStatus(id: number){
      return this.http.delete<any>(this.api+ id)
      .pipe(map((res:any)=>{
        return res;
      }))
    }

}
