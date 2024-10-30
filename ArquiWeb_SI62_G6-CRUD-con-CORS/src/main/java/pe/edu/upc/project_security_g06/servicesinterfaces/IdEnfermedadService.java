package pe.edu.upc.project_security_g06.servicesinterfaces;

import pe.edu.upc.project_security_g06.entities.Enfermedades;

import java.util.List;

public interface IdEnfermedadService {
    //Create
    public void insert (Enfermedades enfermedades);
    //Read
    public List<Enfermedades> list();
    //Update
    public void update(Enfermedades enfermedades);
    //Delete
    public void delete(int id);
}
