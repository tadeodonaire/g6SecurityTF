export class Users{
    IdUsario: bigint = BigInt(0)
    us_nombre:string=""
    us_apellido:string=""
    us_dni:number=0
    us_telefono:number=0
    us_fechanacimiento:Date=new Date(Date.now())
    us_email:string=""
    username:string=""
    password:string=""
    enabled:boolean=true

    // nueva propiedad para controlar la visibilidad de la contraseña
  showPassword?: boolean;  // es opcional 
}