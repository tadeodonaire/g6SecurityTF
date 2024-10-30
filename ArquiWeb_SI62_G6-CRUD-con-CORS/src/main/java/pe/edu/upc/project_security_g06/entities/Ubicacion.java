package pe.edu.upc.project_security_g06.entities;

import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
@Table(name="Ubicacion")
public class Ubicacion {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int IdUbicacion;

    @Column(name = "Longitud", nullable = false)
    private double longitud;

    @Column(name = "Latitud", nullable = false)
    private double latitud;

    @Column(name = "fechaUbicacion", nullable = false)
    private LocalDate fechaUbicacion;

    @ManyToOne
    @JoinColumn(name = "idDistrito")
    private Distrito distrito;


    public Ubicacion() {}

    public Ubicacion(int IdUbicacion, double longitud, double latitud,LocalDate fechaUbicacion, Distrito distrito) {
        this.IdUbicacion = IdUbicacion;
        this.longitud = longitud;
        this.latitud = latitud;
        this.fechaUbicacion = fechaUbicacion;
        this.distrito = distrito;
    }

    public int getIdUbicacion() { return IdUbicacion; }
    public void setIdUbicacion(int IdUbicacion) { this.IdUbicacion = IdUbicacion; }
    public double getLongitud() { return longitud; }
    public void setLongitud(double longitud) { this.longitud = longitud; }
    public double getLatitud() { return latitud; }
    public void setLatitud(double latitud) { this.latitud = latitud; }
    public LocalDate getFechaUbicacion() { return fechaUbicacion; }
    public void setFechaUbicacion(LocalDate fechaUbicacion) { this.fechaUbicacion = fechaUbicacion;}
    public Distrito getDistrito() { return distrito; }
    public void setDistrito(Distrito distrito) {this.distrito = distrito;}
}