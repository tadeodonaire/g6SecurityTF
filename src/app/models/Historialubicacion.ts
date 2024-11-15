import { dispositivo } from "./dispositivo"
import { Ubicacion } from "./Ubicacion"

export class Historialubicacion {
    IdHistorial_Ubicacion:number=0
    fecha: Date=new Date(Date.now())
    hora: string=""
    dispositivo: dispositivo=new dispositivo()
    ubicacion: Ubicacion=new Ubicacion()
}