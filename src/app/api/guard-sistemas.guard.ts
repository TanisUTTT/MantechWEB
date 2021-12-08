import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuardSistemasGuard implements CanActivate {
  constructor(private router:Router){}
  canActivate(){
    let usu = localStorage.getItem("objetoUsuario");
    if(usu!= null){
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }
    // route: ActivatedRouteSnapshot,
    // state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // return true;
  // }
  
}