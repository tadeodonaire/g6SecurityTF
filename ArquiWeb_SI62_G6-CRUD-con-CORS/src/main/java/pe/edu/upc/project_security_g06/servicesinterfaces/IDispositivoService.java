package pe.edu.upc.project_security_g06.servicesinterfaces;

import pe.edu.upc.project_security_g06.entities.Dispositivo;

import java.util.List;

public interface IDispositivoService {
    //Create
    public void insert(Dispositivo dispositivo);
    //Read
    List<Dispositivo> list();
    //Update
    public  void update(Dispositivo dispositivo);
    //Delete
    public void delete(int id);

    public Dispositivo list(int Idispositivo);

    public List<String[]> obtenerdetalledispositivoycontactoautoridad (Integer idDispositivo);
}
