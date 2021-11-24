import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-empresa',
  templateUrl: './registrar-empresa.component.html',
  styleUrls: ['./registrar-empresa.component.scss']
})
export class RegistrarEmpresaComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  irPago(){
    this.router.navigate(['pago']);
  }

}
