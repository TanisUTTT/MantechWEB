import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MunicipioService {

  api="https://mantech-back.herokuapp.com/api/CatMunicipios/";
  constructor(private http : HttpClient) { }

  postMunicipio(data: any){
    return this.http.post<any>(this.api, data)
    .pipe(map((res:any)=>{
      return res;
      }))
    }
  
    getMunicipio(){
      return this.http.get<any>(this.api)
      .pipe(map((res:any)=>{
        return res;
      }))
    }
  
    getMunicipioID(id:number){
      return this.http.get<any>(this.api+"/"+id)
      .pipe(map((res:any)=>{
        return res;
      }))
    }
  
    updateMunicipio(data: any, id:number){
      return this.http.put<any>(this.api+ id, data)
      .pipe(map((res:any)=>{
        return res;
      }))
    }
  
    deleteMunicipio(id: number){
      return this.http.delete<any>(this.api+ id)
      .pipe(map((res:any)=>{
        return res;
      }))
    }
}
