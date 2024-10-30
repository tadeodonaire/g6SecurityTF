package pe.edu.upc.project_security_g06.servicesimplements;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pe.edu.upc.project_security_g06.entities.Historial_Clinico;
import pe.edu.upc.project_security_g06.repositories.IHistorial_ClinicoRepository;
import pe.edu.upc.project_security_g06.servicesinterfaces.IdHistorial_ClinicoService;

import java.util.List;

@Service
public class Historial_ClinicoServiceImplement implements IdHistorial_ClinicoService {
    @Autowired
    private IHistorial_ClinicoRepository hcR;

    @Override
    public void insert(Historial_Clinico histclinico) {
        hcR.save(histclinico);
    }

    @Override
    public List<Historial_Clinico> list() {
        return hcR.findAll();
    }

    @Override
    public void update(Historial_Clinico histclinico) {
        hcR.save(histclinico);
    }

    @Override
    public void delete(int id) {
        hcR.deleteById(id);
    }

}
