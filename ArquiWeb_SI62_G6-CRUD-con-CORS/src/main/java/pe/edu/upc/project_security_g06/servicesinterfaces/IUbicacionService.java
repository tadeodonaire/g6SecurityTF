package pe.edu.upc.project_security_g06.servicesinterfaces;

import pe.edu.upc.project_security_g06.entities.Distrito;
import pe.edu.upc.project_security_g06.entities.Ubicacion;

import java.util.List;

public interface IUbicacionService {

    //Create
    public void insert(Ubicacion ubicacion);
    //Read
    public List<Ubicacion> list();
    //Update
    public void update(Ubicacion ubicacion);
    //Delete
    public void delete(int id);
}