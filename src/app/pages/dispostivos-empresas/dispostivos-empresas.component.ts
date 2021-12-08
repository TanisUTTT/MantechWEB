import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DispositivosService } from 'src/app/api/dispositivos.service';
import { StatusDispoService } from 'src/app/api/status-dispo.service';
import { UsuarioAPIService } from 'src/app/api/usuario-api.service';
import { dispositivosModel } from 'src/app/models/dispositivos';
import { statusDispoModel } from 'src/app/models/statusDispo';
import { UsuarioModel } from 'src/app/models/usuario';

@Component({
  selector: 'app-dispostivos-empresas',
  templateUrl: './dispostivos-empresas.component.html',
  styleUrls: ['./dispostivos-empresas.component.scss']
})
export class DispostivosEmpresasComponent implements OnInit {

  formValue!: FormGroup;
  dispoData!: any;
  showAdd: boolean = true;
  showUpdate: boolean = false;
  modelObj: dispositivosModel = new dispositivosModel();
  
  
 
  constructor(private formBuilder: FormBuilder,private api: DispositivosService, 
    private apiStatus: StatusDispoService,
    private apiUsuarios: UsuarioAPIService) { }

  ngOnInit(): void {
    this.formValue= this.formBuilder.group({
      
      tipo_dispositivo: [''],
      nombre: [''],
      marca: [''],
      modelo: [''],
      detalles: [''],
      tiempo_vida: [''],
      fecha_mantenimiento_prev: [''],
      fk_statsdispositivo: [''],
      fk_usuariossf: [''],
    })

    this.getAll();
  }

  getAll(){
    this.api.getDispo()
    .subscribe(res => {
      this.dispoData = res;
    })
  }

}
