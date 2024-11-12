import { Alergias } from "./Alergias"
import { Historialclinico } from "./historialclinico"

export class Detallemedico {
    idDetalleMedico: number=0
    alergias:Alergias=new Alergias()
    historialClinico:Historialclinico=new Historialclinico()
}
