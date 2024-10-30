package pe.edu.upc.project_security_g06.dtos;


import pe.edu.upc.project_security_g06.entities.Alergias;
import pe.edu.upc.project_security_g06.entities.Enfermedades;
import pe.edu.upc.project_security_g06.entities.Historial_Clinico;

public class Detalle_MedicoDTO {
    private int IdDetalleMedico;
    private Alergias alergias;
    private Enfermedades enfermedades;
    private Historial_Clinico historialClinico;

    public int getIdDetalleMedico() {
        return IdDetalleMedico;
    }
    public void setIdDetalleMedico(int IdDetalleMedico) {
        this.IdDetalleMedico = IdDetalleMedico;
    }
    public Alergias getAlergias() {
        return alergias;
    }
    public void setAlergias(Alergias alergias) {
        this.alergias = alergias;
    }
    public Enfermedades getEnfermedades() {
        return enfermedades;
    }
    public void setEnfermedades(Enfermedades enfermedades) {
        this.enfermedades = enfermedades;
    }
    public Historial_Clinico getHistorialClinico() {
        return historialClinico;
    }
    public void setHistorialClinico(Historial_Clinico historialClinico) {
        this.historialClinico = historialClinico;
    }
}

