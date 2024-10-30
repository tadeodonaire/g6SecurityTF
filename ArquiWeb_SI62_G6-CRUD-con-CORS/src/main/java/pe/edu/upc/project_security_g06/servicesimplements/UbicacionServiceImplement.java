
package pe.edu.upc.project_security_g06.servicesimplements;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pe.edu.upc.project_security_g06.entities.Ubicacion;
import pe.edu.upc.project_security_g06.repositories.IdUbicacionRepository;
import pe.edu.upc.project_security_g06.servicesinterfaces.IUbicacionService;

import java.util.List;

@Service
public class UbicacionServiceImplement implements IUbicacionService {
    @Autowired
    private  IdUbicacionRepository uR;

    @Override
    public List<Ubicacion> list() {
        return uR.findAll();
    }

    @Override
    public void insert(Ubicacion ubi) {
        uR.save(ubi);
    }

    @Override
    public void update(Ubicacion ubicacion) {
        uR.save(ubicacion);
    }

    @Override
    public void delete(int id) {
        uR.deleteById(id);
    }
}
