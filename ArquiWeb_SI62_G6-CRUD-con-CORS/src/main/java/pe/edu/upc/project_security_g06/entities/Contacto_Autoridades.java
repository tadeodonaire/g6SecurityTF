package pe.edu.upc.project_security_g06.entities;

import jakarta.persistence.*;

@Entity
@Table(name = "Contacto_Autoridades")
public class Contacto_Autoridades {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int IdContacAuto;
    @Column(name = "nombre_contac_Auto", nullable = false, length = 40)
    private String nombre_contac_Auto;
    @Column(name = "numeTelefono_contac_Auto", nullable = false)
    private int numeTelefono_contac_Auto;

    public Contacto_Autoridades() {}

    public Contacto_Autoridades(int IdContacAuto, String nombre_contac_Auto,int numeTelefono_contac_Auto) {
        this.IdContacAuto = IdContacAuto;
        this.nombre_contac_Auto = nombre_contac_Auto;
        this.numeTelefono_contac_Auto = numeTelefono_contac_Auto;
    }

    public int getIdContacAuto() {return IdContacAuto;}
    public void setIdContacAuto(int IdContacAuto) {this.IdContacAuto = IdContacAuto;}
    public String getNombre_contac_Auto() {return nombre_contac_Auto;}
    public void setNombre_contac_Auto(String nombre_contac_Auto) {this.nombre_contac_Auto = nombre_contac_Auto;}
    public int getNumeTelefono_contac_Auto() {return numeTelefono_contac_Auto;}
    public void setNumeTelefono_contac_Auto(int numeTelefono_contac_Auto){this.numeTelefono_contac_Auto=numeTelefono_contac_Auto;}
}
