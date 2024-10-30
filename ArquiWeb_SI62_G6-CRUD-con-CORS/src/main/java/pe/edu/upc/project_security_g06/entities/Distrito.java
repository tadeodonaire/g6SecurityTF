package pe.edu.upc.project_security_g06.entities;

import jakarta.persistence.*;

@Entity
@Table(name = "Distrito")
public class  Distrito {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idDistrito;
    @Column(name = "nombre_distrito", nullable = false, length = 50)
    private String nombre_Distrito;
    @ManyToOne
    @JoinColumn(name="idCiudad", nullable = false)
    private Ciudad ciudad;



    public Distrito() { }

    public Distrito(int idDistrito, String nombre_Distrito, Ciudad ciudad) {
        this.idDistrito = idDistrito;
        this.nombre_Distrito = nombre_Distrito;
        this.ciudad = ciudad;
    }

    public int getIdDistrito() { return idDistrito; }
    public void setIdDistrito(int idDistrito) { this.idDistrito = idDistrito; }
    public String getNombre_Distrito() { return nombre_Distrito; }
    public void setNombre_Distrito(String nombre_Distrito) { this.nombre_Distrito = nombre_Distrito; }
    public Ciudad getCiudad() { return ciudad; }
    public void setCiudad(Ciudad ciudad) {
        this.ciudad = ciudad;
    }
}