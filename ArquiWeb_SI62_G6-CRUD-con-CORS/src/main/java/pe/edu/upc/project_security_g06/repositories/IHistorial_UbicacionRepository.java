package pe.edu.upc.project_security_g06.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import pe.edu.upc.project_security_g06.entities.Historial_Ubicacion;

@Repository
public interface IHistorial_UbicacionRepository extends JpaRepository<Historial_Ubicacion, Integer> {
}
