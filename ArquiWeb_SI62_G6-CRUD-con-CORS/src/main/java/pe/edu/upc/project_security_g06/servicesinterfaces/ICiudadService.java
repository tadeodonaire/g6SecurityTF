package pe.edu.upc.project_security_g06.servicesinterfaces;

import pe.edu.upc.project_security_g06.entities.Ciudad;
import pe.edu.upc.project_security_g06.entities.Users;

import java.util.List;

public interface ICiudadService {

    //Create
    public void insert(Ciudad ciudad);
    //Read
    public List<Ciudad> list();
    //Update
    public void update(Ciudad ciudad);
    //Delete
    public void delete(int id);

    public Ciudad listarId(int id);
}
