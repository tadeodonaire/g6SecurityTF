package pe.edu.upc.project_security_g06.entities;

import jakarta.persistence.*;

@Entity
@Table(name = "Dispositivo")
public class Dispositivo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int Idispositivo;
    @Column(name = "nombre_dispositivo",nullable = false,length = 30)
    private String nombre_dispositivo;

    @ManyToOne
    @JoinColumn(name = "IdContacAuto")
    private Contacto_Autoridades contactoAutoridades;
    @ManyToOne
    @JoinColumn(name = "IdUsario")
    private Users us;
    @ManyToOne
    @JoinColumn(name = "IdContactoEmergencia")
    private Contacto_Emergencia contactoEmergencia;

    public Dispositivo() {
    }

    public Dispositivo(int Idispositivo, String nombre_dispositivo, Contacto_Autoridades contactoAutoridades, Users us, Contacto_Emergencia contactoEmergencia) {
        this.Idispositivo = Idispositivo;
        this.nombre_dispositivo = nombre_dispositivo;
        this.contactoAutoridades = contactoAutoridades;
        this.us = us;
        this.contactoEmergencia = contactoEmergencia;
    }

    public int getIdispositivo() {
        return Idispositivo;
    }
    public void setIdispositivo(int Idispositivo) {
        this.Idispositivo = Idispositivo;
    }
    public String getNombre_dispositivo() {
        return nombre_dispositivo;
    }
    public void setNombre_dispositivo(String nombre_dispositivo) {
        this.nombre_dispositivo = nombre_dispositivo;
    }
    public Contacto_Autoridades getContactoAutoridades() {
        return contactoAutoridades;
    }
    public void setContactoAutoridades(Contacto_Autoridades contactoAutoridades) {
        this.contactoAutoridades = contactoAutoridades;
    }

    public Users getUs() {
        return us;
    }
    public void setUs(Users us) {
        this.us = us;
    }

    public Contacto_Emergencia getContactoEmergencia() {
        return contactoEmergencia;
    }

    public void setContactoEmergencia(Contacto_Emergencia contactoEmergencia) {
        this.contactoEmergencia = contactoEmergencia;
    }
}
