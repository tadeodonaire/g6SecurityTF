package pe.edu.upc.project_security_g06.entities;
import jakarta.persistence.*;

@Entity
@Table(name = "Alergias")
public class Alergias {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int IdAlergias;
    @Column(name = "nombre_alergias",nullable = false,length = 50)
    private String nombre_alergias;
    @Column(name = "descripcion_alergias",nullable = false,length = 250)
    private String descripcion_alergias;
    @Column(name = "causa_alergias",nullable = false,length = 50)
    private String causa_alergias;

    public Alergias() {
    }

    public Alergias(int IdAlergias, String nombre_alergias, String descripcion_alergias, String causa_alergias) {
        this.IdAlergias = IdAlergias;
        this.nombre_alergias = nombre_alergias;
        this.descripcion_alergias = descripcion_alergias;
        this.causa_alergias = causa_alergias;
    }

    public int getIdAlergias() {
        return IdAlergias;
    }
    public void setIdAlergias(int IdAlergias) {
        this.IdAlergias = IdAlergias;
    }
    public String getNombre_alergias() {
        return nombre_alergias;
    }
    public void setNombre_alergias(String nombre_alergias) {
        this.nombre_alergias = nombre_alergias;
    }
    public String getDescripcion_alergias() {
        return descripcion_alergias;
    }
    public void setDescripcion_alergias(String descripcion_alergias) {
        this.descripcion_alergias = descripcion_alergias;
    }
    public String getCausa_alergias() {
        return causa_alergias;
    }
    public void setCausa_alergias(String causa_alergias) {
        this.causa_alergias = causa_alergias;
    }


}
