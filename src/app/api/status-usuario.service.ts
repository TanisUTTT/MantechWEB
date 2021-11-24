import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatusUsuarioService {

  api="https://mantech-back.herokuapp.com/api/StatusUsuarios/";
  constructor(private http : HttpClient) { }

  postStatusStatus(data: any){
  return this.http.post<any>(this.api, data)
  .pipe(map((res:any)=>{
    return res;
    }))
  }

  getStatusStatus(){
    return this.http.get<any>(this.api)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  updateStatusStatus(data: any, id:number){
    return this.http.put<any>(this.api+ id, data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  deleteStatusStatus(id: number){
    return this.http.delete<any>(this.api+ id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
}

