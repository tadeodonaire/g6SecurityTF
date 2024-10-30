package pe.edu.upc.project_security_g06.servicesinterfaces;

import pe.edu.upc.project_security_g06.entities.Ciudad;
import pe.edu.upc.project_security_g06.entities.Distrito;

import java.util.List;

public interface IDistritoService {
    //Create
    public void insert(Distrito distrito);
    //Read
    List<Distrito> list();
    //Update
    public void update(Distrito distrito);
    //Delete
    public void delete(int id);
}