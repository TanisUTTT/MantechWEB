export class empresaModel{
    id!:number;
    nombre!:string ;
    correo!:string ;
    contrasena!:string ;
    claveunica!:string ;
    descripcion!:string ;
    direccion!:string ;
    fk_estado!:Object;
    fk_municipio!:Object;
    fk_statusempresa!:Object;
}