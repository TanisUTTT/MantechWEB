import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DispositivosService {

  api="https://mantech-back.herokuapp.com/api/Dispositivos/";
  constructor(private http : HttpClient) { }

  postDispo(data: any){
    return this.http.post<any>(this.api, data)
    .pipe(map((res:any)=>{
      return res;
      }))
    }
  
    getDispo(){
      return this.http.get<any>(this.api)
      .pipe(map((res:any)=>{
        return res;
      }))
    }
  
    getDispoID(id:number){
      return this.http.get<any>(this.api+"/"+id)
      .pipe(map((res:any)=>{
        return res;
      }))
    }
  
    updateDispo(data: any, id:number){
      return this.http.put<any>(this.api+ id, data)
      .pipe(map((res:any)=>{
        return res;
      }))
    }
  
    deleteDispo(id: number){
      return this.http.delete<any>(this.api+ id)
      .pipe(map((res:any)=>{
        return res;
      }))
    }
}
