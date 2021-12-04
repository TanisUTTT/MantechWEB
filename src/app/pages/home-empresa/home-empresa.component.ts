import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-empresa',
  templateUrl: './home-empresa.component.html',
  styleUrls: ['./home-empresa.component.scss']
})
export class HomeEmpresaComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  irUsuarios(){
    this.router.navigate(["usuarios"]);
  }
  irDispo(){
    this.router.navigate(["dispositivos"]);
  }
}
