package pe.edu.upc.project_security_g06.servicesinterfaces;

import pe.edu.upc.project_security_g06.entities.Historial_Ubicacion;

import java.util.List;
import java.util.Optional;

public interface IHistorial_UbicacionService {
    public void insert (Historial_Ubicacion h);
    public List<Historial_Ubicacion> listar();
    public Historial_Ubicacion listid(int idHistorial);
    public void update (Historial_Ubicacion h);
    public void delete (int IdHistorial_Ubicacion);
}
