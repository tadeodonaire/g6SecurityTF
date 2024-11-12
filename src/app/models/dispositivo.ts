import { Contacto_Autoridades } from './contactoautoridades';
import { Contactoemergencias } from './contactoemergencias';
import { Users } from './Users';

export class dispositivo{
    idispositivo: number =0
    nombre_dispositivo: string = ""
    us: Users = new Users();
    contactoAutoridades: Contacto_Autoridades = new Contacto_Autoridades();
    contactoEmergencia: Contactoemergencias = new Contactoemergencias();
}