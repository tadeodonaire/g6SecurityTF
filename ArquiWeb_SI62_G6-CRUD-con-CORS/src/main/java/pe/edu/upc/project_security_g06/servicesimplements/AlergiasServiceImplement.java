package pe.edu.upc.project_security_g06.servicesimplements;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pe.edu.upc.project_security_g06.entities.Alergias;
import pe.edu.upc.project_security_g06.repositories.IAlergiasRepository;
import pe.edu.upc.project_security_g06.servicesinterfaces.IdAlergiasService;

import java.util.List;

@Service
public class AlergiasServiceImplement implements IdAlergiasService {
    @Autowired
    private IAlergiasRepository aR;

    @Override
    public void insert(Alergias ale) {
        aR.save(ale);
    }

    @Override
    public List<Alergias> list() {
        return aR.findAll();
    }

    @Override
    public void update(Alergias alergias) {
        aR.save(alergias);
    }

    @Override
    public void delete(int id) {
        aR.deleteById(id);
    }
}
