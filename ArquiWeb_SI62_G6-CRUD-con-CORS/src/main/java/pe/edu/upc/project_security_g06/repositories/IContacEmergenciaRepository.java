package pe.edu.upc.project_security_g06.repositories;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import pe.edu.upc.project_security_g06.entities.Contacto_Emergencia;

import java.util.List;


@Repository
public interface IContacEmergenciaRepository extends JpaRepository<Contacto_Emergencia, Integer> {

    @Query(value = "SELECT cq.relacion_contacto, COUNT(cq.relacion_contacto) AS cantidad_relaciones_similares " +
            "FROM contacto_emergencia cq " +
            "WHERE cq.relacion_contacto LIKE %:relacion_contacto% " +
            "GROUP BY cq.relacion_contacto", nativeQuery = true)
    public List<String[]> findContacto_EmergenciaByRelacion_contacto(@Param("relacion_contacto") String relacion_contacto);

}

