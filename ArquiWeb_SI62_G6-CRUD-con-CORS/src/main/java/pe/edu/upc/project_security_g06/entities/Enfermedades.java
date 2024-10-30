package pe.edu.upc.project_security_g06.entities;

import jakarta.persistence.*;

@Entity
@Table(name = "Enfermedades")
public class Enfermedades {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int IdEnfermedades;

    @Column(name = "nombre_enfermedad",nullable = false,length = 50)
    private String nombre_enfermedad;

    @Column(name = "descripcion_enfermedad",nullable = false,length = 50)
    private String descripcion_enfermedad;

    @Column(name = "tipo_enfermedad",nullable = false,length = 50)
    private String tipo_enfermedad;

    public Enfermedades() {
    }

    public Enfermedades(int IdEnfermedades,String nombre_enfermedad,String descripcion_enfermedad,String tipo_enfermedad) {
        this.IdEnfermedades = IdEnfermedades;
        this.nombre_enfermedad = nombre_enfermedad;
        this.descripcion_enfermedad = descripcion_enfermedad;
        this.tipo_enfermedad = tipo_enfermedad;
    }

    public int getIdEnfermedades() {return IdEnfermedades;}
    public void setIdEnfermedades(int IdEnfermedades) {this.IdEnfermedades = IdEnfermedades;}
    public String getNombre_enfermedad() {return nombre_enfermedad;}
    public void setNombre_enfermedad(String nombre_enfermedad) {this.nombre_enfermedad = nombre_enfermedad;}
    public String getDescripcion_enfermedad() {return descripcion_enfermedad;}
    public void setDescripcion_enfermedad(String descripcion_enfermedad) {this.descripcion_enfermedad = descripcion_enfermedad;}
    public String getTipo_enfermedad() {return tipo_enfermedad;}
    public void  setTipo_enfermedad(String tipo_enfermedad) {this.tipo_enfermedad = tipo_enfermedad;}
}


