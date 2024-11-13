import { Alergias } from "./Alergias"
import { Enfermedades } from "./Enfermedades"
import { Historialclinico } from "./historialclinico"

export class Detallemedico {
    idDetalleMedico: number=0
    alergias:Alergias=new Alergias()
    enfermedades: Enfermedades=new Enfermedades();
    historialClinico:Historialclinico=new Historialclinico()
}
