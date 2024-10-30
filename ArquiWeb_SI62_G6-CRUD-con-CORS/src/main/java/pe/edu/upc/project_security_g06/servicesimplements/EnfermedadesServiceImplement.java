package pe.edu.upc.project_security_g06.servicesimplements;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pe.edu.upc.project_security_g06.entities.Enfermedades;
import pe.edu.upc.project_security_g06.repositories.IEnfermedadesRepository;
import pe.edu.upc.project_security_g06.servicesinterfaces.IdEnfermedadService;

import java.util.List;

@Service
public class EnfermedadesServiceImplement implements IdEnfermedadService{
    @Autowired
    private IEnfermedadesRepository eR;

    @Override
    public void insert(Enfermedades enfermedades) {
        eR.save(enfermedades);
    }

    @Override
    public List<Enfermedades> list() {
        return eR.findAll();
    }

    @Override
    public void update(Enfermedades enfermedades) {
        eR.save(enfermedades);
    }

    @Override
    public void delete(int id) {
        eR.deleteById(id);
    }
}
