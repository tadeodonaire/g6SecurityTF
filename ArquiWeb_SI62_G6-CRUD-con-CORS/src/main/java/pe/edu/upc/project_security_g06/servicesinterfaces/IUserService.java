package pe.edu.upc.project_security_g06.servicesinterfaces;

import pe.edu.upc.project_security_g06.entities.Ubicacion;
import pe.edu.upc.project_security_g06.entities.Users;

import java.util.List;

public interface IUserService {
    public void insert(Users usuario);

    public List<Users> list();

    public void delete(int id);

    public void update(Users usuario);

    public Users listarId(int idUsario);

    public List<String[]> obtenerUsuariosConDispositivosYRoles();

    public List<String[]> findConteoAlergiaYtipoEnfermedadXusuario(String nombre);

    public List<String[]> obtenerInformacionClinicaPorUsuario(int idUsario);

    public List<String[]> obtenerCantidadDispositivosPorUsuario();

    public List<String[]> obtenerHistorialUbicacionPorUsuario(int idUsario);

    public List<String[]> obtenerEnfermedadesPorUsuario(int idUsario);

    public List<String[]> obtenerAlergiasPorUsuario(int idUsario);

    public List<String[]> ObtenerContactosEmergenciaPersonalesDeUsuario(String nombre);


}
