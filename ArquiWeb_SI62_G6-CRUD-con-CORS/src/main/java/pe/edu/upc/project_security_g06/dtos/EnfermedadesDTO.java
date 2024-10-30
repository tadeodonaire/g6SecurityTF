package pe.edu.upc.project_security_g06.dtos;


import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

public class EnfermedadesDTO {
    private int IdEnfermedades;
    private String nombre_enfermedad;
    private String descripcion_enfermedad;
    private String tipo_enfermedad;

    public int getIdEnfermedades() {return IdEnfermedades;}
    public void setIdEnfermedades(int IdEnfermedades) {this.IdEnfermedades = IdEnfermedades;}
    public String getNombre_enfermedad() {return nombre_enfermedad;}
    public void setNombre_enfermedad(String nombre_enfermedad) {this.nombre_enfermedad = nombre_enfermedad;}
    public String getDescripcion_enfermedad() {return descripcion_enfermedad;}
    public void setDescripcion_enfermedad(String descripcion_enfermedad) {this.descripcion_enfermedad = descripcion_enfermedad;}
    public String getTipo_enfermedad() {return tipo_enfermedad;}
    public void  setTipo_enfermedad(String tipo_enfermedad) {this.tipo_enfermedad = tipo_enfermedad;}
}
