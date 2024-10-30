package pe.edu.upc.project_security_g06.servicesinterfaces;

import pe.edu.upc.project_security_g06.entities.Detalle_Medico;

import java.util.List;

public interface IDetalle_MedicoService {
    //Create
    public void insert (Detalle_Medico detmed);
    //Read
    public List<Detalle_Medico> list();
    //Update
    public void update (Detalle_Medico detmed);
    //Delete
    public void delete (int id);
}
