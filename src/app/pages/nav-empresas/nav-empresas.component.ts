import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-empresas',
  templateUrl: './nav-empresas.component.html',
  styleUrls: ['./nav-empresas.component.scss']
})
export class NavEmpresasComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  irHome(){
    this.router.navigate(['homeEmpresas']);
  }
  irSistemas(){
    this.router.navigate(['usuarios']);
  }
  irVideos(){
    this.router.navigate(['videos']);
  }
  irDispositivos(){
    this.router.navigate(['dispositivos']);
  }

}
