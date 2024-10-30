package pe.edu.upc.project_security_g06.servicesinterfaces;

import pe.edu.upc.project_security_g06.entities.Ciudad;
import pe.edu.upc.project_security_g06.entities.Contacto_Autoridades;
import pe.edu.upc.project_security_g06.entities.Contacto_Emergencia;

import java.util.List;

public interface IContacAutoridadesService {

    //Create
    public void insert(Contacto_Autoridades contacto_autoridades);
    //Read
    public List<Contacto_Autoridades> list();
    //Update
    public void update(Contacto_Autoridades cont_auto);
    //Delete
    public void delete(int id);
}
