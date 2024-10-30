package pe.edu.upc.project_security_g06.dtos;


import jakarta.persistence.Column;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import pe.edu.upc.project_security_g06.entities.Dispositivo;
import pe.edu.upc.project_security_g06.entities.Ubicacion;

import java.time.LocalDate;
import java.time.LocalTime;

public class Historial_UbicacionDTO {

    private int IdHistorial_Ubicacion;
    private LocalDate fecha;
    private LocalTime hora;
    private Dispositivo dispositivo;
    private Ubicacion ubicacion;

    public int getIdHistorial_Ubicacion() {
        return IdHistorial_Ubicacion;
    }
    public void setIdHistorial_Ubicacion(int IdHistorial_Ubicacion) { this.IdHistorial_Ubicacion = IdHistorial_Ubicacion;}
    public LocalDate getFecha() {
        return fecha;
    }
    public void setFecha(LocalDate fecha) {
        this.fecha = fecha;
    }
    public LocalTime getHora() {
        return hora;
    }
    public void setHora(LocalTime hora) {
        this.hora = hora;
    }

    public Dispositivo getDispositivo() {
        return dispositivo;
    }

    public void setDispositivo(Dispositivo dispositivo) {
        this.dispositivo = dispositivo;
    }

    public Ubicacion getUbicacion() {
        return ubicacion;
    }

    public void setUbicacion(Ubicacion ubicacion) {
        this.ubicacion = ubicacion;
    }
}
