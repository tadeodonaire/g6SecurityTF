package pe.edu.upc.project_security_g06.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import pe.edu.upc.project_security_g06.entities.Ubicacion;

import java.util.List;

@Repository
public interface IdUbicacionRepository extends JpaRepository<Ubicacion, Integer> {

}