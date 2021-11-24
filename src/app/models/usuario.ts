export class UsuarioModel{
    id!:number;
    nombre_empleado!:string ;
    apellido_paterno!:string ;
    apellido_materno!:string ;
    telefono!:string ;
    correo!:string ;
    contrasena!:string ;
    clave_empresa!:string ;
    fk_empresa!:Object;
    fk_rol!:Object;
    fk_statususuario!:Object;
    
}