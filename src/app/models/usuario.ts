export class UsuarioModel{
    id!:number;
    nombre_empleado!:string ;
    apellido_paterno!:string ;
    apellido_materno!:string ;
    telefono!:string ;
    correo!:string ;
    contrasena!:string ;
    clave_empresa!:string ;
    fk_empresa!:any;
    fk_rol!:any;
    fk_statususuario!:any;
    registrado!:string ;
}