package pe.edu.upc.project_security_g06.dtos;

import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import pe.edu.upc.project_security_g06.entities.Contacto_Autoridades;
import pe.edu.upc.project_security_g06.entities.Users;
import pe.edu.upc.project_security_g06.entities.Contacto_Emergencia;

public class DispositivoDTO {
    private int Idispositivo;
    private String nombre_dispositivo;
    private Contacto_Autoridades contactoAutoridades;
    private Users us;
    private Contacto_Emergencia contactoEmergencia;

    public  int getIdispositivo() {
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
    public void setContactoEmergencia(Contacto_Emergencia contactoEmergencia){
        this.contactoEmergencia = contactoEmergencia;
    }

    @ManyToOne
    @JoinColumn(name = "usuario_id")
    private Users users;
}
