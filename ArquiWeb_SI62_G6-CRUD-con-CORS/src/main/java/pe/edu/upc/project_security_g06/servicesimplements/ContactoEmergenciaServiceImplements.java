package pe.edu.upc.project_security_g06.servicesimplements;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pe.edu.upc.project_security_g06.entities.Contacto_Emergencia;
import pe.edu.upc.project_security_g06.repositories.IContacEmergenciaRepository;
import pe.edu.upc.project_security_g06.servicesinterfaces.IContacEmergenciaService;

import java.util.List;

@Service
public class ContactoEmergenciaServiceImplements implements IContacEmergenciaService {
    @Autowired
    private IContacEmergenciaRepository ceR;

    @Override
    public void insert(Contacto_Emergencia contactoEmergencia) {
        ceR.save(contactoEmergencia);
    }

    @Override
    public List<Contacto_Emergencia> list() {
        return ceR.findAll();
    }

    @Override
    public List<String[]> listaCantidadRelacionesContacto(String relacion_contacto) {
        return ceR.findContacto_EmergenciaByRelacion_contacto(relacion_contacto);
    }

    @Override
    public void update(Contacto_Emergencia contactoEmergencia) {
      ceR.save(contactoEmergencia);
    }

    @Override
    public void delete(int id) {
        ceR.deleteById(id);
    }

}
