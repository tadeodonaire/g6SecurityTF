package pe.edu.upc.project_security_g06.servicesimplements;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pe.edu.upc.project_security_g06.entities.Contacto_Autoridades;
import pe.edu.upc.project_security_g06.entities.Contacto_Emergencia;
import pe.edu.upc.project_security_g06.repositories.IContacAutoridadesRepository;
import pe.edu.upc.project_security_g06.repositories.IContacEmergenciaRepository;
import pe.edu.upc.project_security_g06.servicesinterfaces.IContacAutoridadesService;
import pe.edu.upc.project_security_g06.servicesinterfaces.IContacEmergenciaService;

import java.util.List;

@Service
public class ContactoAutoridadesServiceImplements implements IContacAutoridadesService {
    @Autowired
    private IContacAutoridadesRepository caR;

    @Override
    public void insert(Contacto_Autoridades contacto_autoridades) {
        caR.save(contacto_autoridades);
    }

    @Override
    public List<Contacto_Autoridades> list() {
        return caR.findAll();
    }

    @Override
    public void update(Contacto_Autoridades cont_auto) {
        caR.save(cont_auto);
    }

    @Override
    public void delete(int id) {
        caR.deleteById(id);
    }
}
