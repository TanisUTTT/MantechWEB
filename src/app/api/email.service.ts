import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  api="https://mantech-back.herokuapp.com/api/EnviarGmail/"
  constructor(private http: HttpClient) { }
  sentEmail(data: any){
    return this.http.post<any>(this.api, data)
    .pipe(map((res:any)=>{
      return res;
      }))
    }
}
