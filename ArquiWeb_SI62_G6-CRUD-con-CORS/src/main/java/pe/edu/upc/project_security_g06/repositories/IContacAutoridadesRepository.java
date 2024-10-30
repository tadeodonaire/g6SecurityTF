package pe.edu.upc.project_security_g06.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pe.edu.upc.project_security_g06.entities.Contacto_Autoridades;
import pe.edu.upc.project_security_g06.entities.Contacto_Emergencia;

@Repository
public interface IContacAutoridadesRepository extends JpaRepository<Contacto_Autoridades, Integer> {
}
