import { Contacto_Autoridades } from './contactoautoridades';
import { Contactoemergencias } from './contactoemergencias';
import { Users } from './Users';

export class dispositivo{
    idispositivo: number =0
    nombre_dispositivo: string = ""
    users: Users = new Users();
    contacto_autoridades: Contacto_Autoridades = new Contacto_Autoridades();
    contactoemergencias: Contactoemergencias = new Contactoemergencias();
}