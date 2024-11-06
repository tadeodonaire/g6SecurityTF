import { Distrito } from "./Distrito"

export class Ubicacion{
    IdUbicacion: number=0
    longitud: number=0
    latitud: number=-10000000000000000000
    fechaUbicacion: Date = new Date(Date.now())
    distrito:Distrito=new Distrito()
}