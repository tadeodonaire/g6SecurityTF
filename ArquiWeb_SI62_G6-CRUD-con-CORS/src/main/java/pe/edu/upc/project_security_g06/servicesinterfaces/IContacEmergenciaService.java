package pe.edu.upc.project_security_g06.servicesinterfaces;

import pe.edu.upc.project_security_g06.entities.Ciudad;
import pe.edu.upc.project_security_g06.entities.Contacto_Emergencia;

import java.util.List;

public interface IContacEmergenciaService {
    //Create
    public void insert(Contacto_Emergencia contactoEmergencia);
    //Read
    public List<Contacto_Emergencia> list();
    public List<String[]> listaCantidadRelacionesContacto(String relacion_contacto);
    //Update
    public void update(Contacto_Emergencia contactoEmergencia);
    //Delete
    public void delete(int id);
}
