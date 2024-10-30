package pe.edu.upc.project_security_g06.servicesimplements;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pe.edu.upc.project_security_g06.entities.Distrito;
import pe.edu.upc.project_security_g06.repositories.IDistritoRepository;
import pe.edu.upc.project_security_g06.servicesinterfaces.IDistritoService;

import java.util.List;

@Service
public class DistritoServiceImplement implements IDistritoService {
    @Autowired
    private IDistritoRepository dR;

    @Override
    public void insert(Distrito distrito) {
        dR.save(distrito);
    }

    @Override
    public List<Distrito> list() {
        return dR.findAll();
    }

    @Override
    public void update(Distrito distrito) {
        dR.save(distrito);
    }

    @Override
    public void delete(int id) {
        dR.deleteById(id);
    }
}