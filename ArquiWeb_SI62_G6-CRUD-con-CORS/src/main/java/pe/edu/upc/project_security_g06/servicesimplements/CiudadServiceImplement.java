package pe.edu.upc.project_security_g06.servicesimplements;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pe.edu.upc.project_security_g06.entities.Alergias;
import pe.edu.upc.project_security_g06.entities.Ciudad;
import pe.edu.upc.project_security_g06.entities.Users;
import pe.edu.upc.project_security_g06.repositories.ICiudadRepository;
import pe.edu.upc.project_security_g06.servicesinterfaces.ICiudadService;

import java.util.List;

@Service
public class CiudadServiceImplement implements ICiudadService {
    @Autowired
    private ICiudadRepository cR;


    @Override
    public void insert(Ciudad ciudad) {
        cR.save(ciudad);
    }

    @Override
    public List<Ciudad> list() {
        return cR.findAll();
    }

    @Override
    public void update(Ciudad ciudad) {
        cR.save(ciudad);
    }

    @Override
    public void delete(int id) {
        cR.deleteById(id);
    }

    @Override
    public Ciudad listarId(int idCiudad) {
    return cR.findById(idCiudad).orElse(new Ciudad());
    }
}
