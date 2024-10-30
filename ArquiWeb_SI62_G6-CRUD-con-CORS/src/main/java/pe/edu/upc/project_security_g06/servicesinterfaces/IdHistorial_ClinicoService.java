package pe.edu.upc.project_security_g06.servicesinterfaces;

import pe.edu.upc.project_security_g06.entities.Historial_Clinico;

import java.util.List;

public interface IdHistorial_ClinicoService {
    //Create
    public void insert (Historial_Clinico histclinico);
    //Read
    public List<Historial_Clinico> list();
    //Update
    public void update (Historial_Clinico histclinico);
    //Delete
    public void delete (int id);
}
