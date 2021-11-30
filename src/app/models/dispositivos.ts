export class dispositivosModel{
    id!:number;
    tipo_dispositivo!:string;
    nombre!:string;
    marca!:string;
    modelo!:string;
    detalles!:string;
    tiempo_vida!:string;
    fecha_mantenimiento_prev!:string;
    fk_statsdispositivo!: any;
    fk_usuariossf!: any;
}