package pe.edu.upc.project_security_g06.servicesimplements;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pe.edu.upc.project_security_g06.entities.Users;
import pe.edu.upc.project_security_g06.repositories.IUserRepository;
import pe.edu.upc.project_security_g06.servicesinterfaces.IUserService;

import java.util.List;

@Service
public class UserServiceImplement implements IUserService {
    @Autowired
    private IUserRepository uR;

    @Override
    public void insert(Users usuario) {
        uR.save(usuario);
    }

    @Override
    public List<Users> list() {
        return uR.findAll();
    }

    @Override
    public void delete(int id) {
        uR.deleteById(id);
    }

    @Override
    public void update(Users usuario) {
        uR.save(usuario);
    }


    @Override
    public Users listarId(int idUsario) {
        return uR.findById(idUsario).orElse(new Users());
    }

    @Override
    public List<String[]> obtenerUsuariosConDispositivosYRoles() {
        return uR.findUsuariosWithDevicesAndRoles();
    }


    @Override
    public List<String[]> findConteoAlergiaYtipoEnfermedadXusuario(String nombre) {
        return uR.findConteoAlergiaYtipoEnfermedadXusuario(nombre);
    }


    @Override
    public List<String[]> ObtenerContactosEmergenciaPersonalesDeUsuario(String nombre) {
        return uR.findContactosByUsuario(nombre);
    }

    public List<String[]> obtenerInformacionClinicaPorUsuario(int idUsario) {
        return uR.findInformacionClinicaByUsuarioId(idUsario);
    }

    @Override
    public List<String[]> obtenerCantidadDispositivosPorUsuario() {
        return uR.findCantidadDispositivosPorUsuario();
    }

    @Override
    public List<String[]> obtenerHistorialUbicacionPorUsuario(int idUsario) {
        return uR.findHistorialUbicacionByUsuarioId(idUsario);
    }

    @Override
    public List<String[]> obtenerEnfermedadesPorUsuario(int idUsario) {
        return uR.findEnfermedadesByUsuarioId(idUsario);
    }

    @Override
    public List<String[]> obtenerAlergiasPorUsuario(int idUsario) {
        return uR.findAlergiasByUsuarioId(idUsario);
    }
}
