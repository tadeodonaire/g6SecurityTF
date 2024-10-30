package pe.edu.upc.project_security_g06.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pe.edu.upc.project_security_g06.entities.Ciudad;
@Repository
public interface ICiudadRepository extends JpaRepository<Ciudad,Integer>{

}