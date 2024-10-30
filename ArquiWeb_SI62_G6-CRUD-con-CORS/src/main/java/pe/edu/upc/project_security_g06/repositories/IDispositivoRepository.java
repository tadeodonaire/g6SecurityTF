package pe.edu.upc.project_security_g06.repositories;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import pe.edu.upc.project_security_g06.entities.Dispositivo;

import java.util.List;

@Repository
public interface IDispositivoRepository extends JpaRepository<Dispositivo, Integer> {
    @Query(value = "SELECT d.nombre_dispositivo, ca.nombre_contac_Auto, ca.nume_telefono_contac_Auto" +
            " FROM dispositivo d" +
            " JOIN contacto_autoridades ca ON d.id_contac_auto = ca.id_contac_auto" +
            " WHERE d.idispositivo = :idDispositivo", nativeQuery = true)
    List<String[]> findDetalleDispositivoContactoAutoridad(@Param("idDispositivo") Integer idDispositivo);
}
