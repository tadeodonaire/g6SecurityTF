package pe.edu.upc.project_security_g06.entities;

import jakarta.persistence.*;

@Entity
@Table(name = "DetalleMedico")
public class Detalle_Medico {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int IdDetalleMedico;
    @ManyToOne
    @JoinColumn(name = "IdAlergias")
    private Alergias alergias;
    @ManyToOne
    @JoinColumn(name = "IdEnfermedades")
    private Enfermedades enfermedades;
    @ManyToOne
    @JoinColumn(name = "IdHistorialClinico")
    private Historial_Clinico historialClinico;

    public  Detalle_Medico() {
    }

    public Detalle_Medico(int IdDetalleMedico, Alergias alergias, Enfermedades enfermedades, Historial_Clinico historialClinico) {
        this.IdDetalleMedico = IdDetalleMedico;
        this.alergias = alergias;
        this.enfermedades = enfermedades;
        this.historialClinico = historialClinico;
    }
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
