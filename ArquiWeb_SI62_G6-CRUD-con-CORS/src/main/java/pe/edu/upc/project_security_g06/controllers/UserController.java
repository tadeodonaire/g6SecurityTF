package pe.edu.upc.project_security_g06.controllers;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import pe.edu.upc.project_security_g06.dtos.*;
import pe.edu.upc.project_security_g06.entities.Ubicacion;
import pe.edu.upc.project_security_g06.entities.Users;
import pe.edu.upc.project_security_g06.servicesinterfaces.IUserService;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/usuarios")
public class UserController {

    @Autowired
    private IUserService uS;


    @PostMapping
    public void registrar(@RequestBody UserDTO dto) {
        ModelMapper m = new ModelMapper();
        Users u = m.map(dto, Users.class);
        uS.insert(u);
    }

    @PutMapping
    public void modificar(@RequestBody UserDTO dto) {
        ModelMapper m = new ModelMapper();
        Users u = m.map(dto, Users.class);
        uS.update(u);
    }

    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable("id") Integer id) {
        uS.delete(id);
    }

    @GetMapping("/{id}")
    public UserDTO listarId(@PathVariable("id") Integer id) {
        ModelMapper m = new ModelMapper();
        UserDTO dto = m.map(uS.listarId(id), UserDTO.class);
        return dto;
    }

    @GetMapping
    public List<UserDTO> listar() {
        return uS.list().stream().map(x -> {
            ModelMapper m = new ModelMapper();
            return m.map(x, UserDTO.class);
        }).collect(Collectors.toList());
    }

    @GetMapping("/rolxdispositivodeusuario")
    public List<UsuarioDispositivoRolDTO>obtenerUsuariosConDispositivosYRoles(){
        List<String[]> lista=uS.obtenerUsuariosConDispositivosYRoles();
        List<UsuarioDispositivoRolDTO>listaDTO=new ArrayList<>();
        for(String[] columna:lista){
            UsuarioDispositivoRolDTO dto=new UsuarioDispositivoRolDTO();
            dto.setNombreUsuario(columna[0]);
            dto.setApellidoUsuario(columna[1]);
            dto.setNombreDispositivo(columna[2]);
            dto.setRolUsuario(columna[3]);
            listaDTO.add(dto);
        }
        return listaDTO;
    }
    @GetMapping("/buscarcontactospornombre/{us_nombre}")
    public List<UsuarioContactosDTO> buscar(@RequestParam("us_nombre") String nombre) {
        List<String[]> lista=uS.ObtenerContactosEmergenciaPersonalesDeUsuario(nombre);
        List<UsuarioContactosDTO>listaDTO=new ArrayList<>();
        for(String[] columna:lista){
            UsuarioContactosDTO dto=new UsuarioContactosDTO();
            dto.setIdUsario(Integer.parseInt(columna[0]));
            dto.setUs_nombre(columna[1]);
            dto.setUs_apellido(columna[2]);
            dto.setNombre_dispositivo(columna[3]);
            dto.setNombre_contacto(columna[4]);
            dto.setNum_telefono_contacto(Integer.parseInt(columna[5]));
            dto.setNombre_contacto_auto(columna[6]);
            dto.setNumeTelefono_contac_Auto(Integer.parseInt(columna[7]));
            listaDTO.add(dto);
        }
        return listaDTO;
    }
    @GetMapping("/{idUsuario}/informacion-clinica")
    public List<UsuarioHistorialClinicoDTO> obtenerInformacionClinicaPorUsuario(@PathVariable Integer idUsuario) {
        List<String[]> resultados = uS.obtenerInformacionClinicaPorUsuario(idUsuario);
        List<UsuarioHistorialClinicoDTO> listaDTO = new ArrayList<>();

        for (String[] fila : resultados) {
            UsuarioHistorialClinicoDTO dto = new UsuarioHistorialClinicoDTO();
            dto.setNombreUsuario(fila[0]);
            dto.setApellidoUsuario(fila[1]);
            dto.setNombreAlergia(fila[2]);
            dto.setNombreEnfermedad(fila[3]);
            listaDTO.add(dto);
        }

        return listaDTO;
    }

    @GetMapping("/CantidadAlerEnferXuser/{us_nombre}")
    public List<UsuarioConteoAlerEnferDTO>findConteoAlergiaYtipoEnfermedadXusuario(@RequestParam String name){
        List<String[]> lista=uS.findConteoAlergiaYtipoEnfermedadXusuario(name);
        List<UsuarioConteoAlerEnferDTO>listaDTO=new ArrayList<>();
        for(String[] columna:lista){
            UsuarioConteoAlerEnferDTO dto=new UsuarioConteoAlerEnferDTO();
            dto.setUsuario(columna[0]);
            dto.setCantidad_alergias(Integer.parseInt(columna[1]));
            dto.setCantidad_enfermedades(Integer.parseInt(columna[2]));
            dto.setTipos_enfermedades(columna[3]);
            listaDTO.add(dto);
        }
        return listaDTO;
    }

    @GetMapping("/cantidad-dispositivos")
    public List<UsuarioDispositivoCountDTO> obtenerCantidadDispositivosPorUsuario() {
        List<String[]> resultados = uS.obtenerCantidadDispositivosPorUsuario();
        List<UsuarioDispositivoCountDTO> listaDTO = new ArrayList<>();

        for (String[] fila : resultados) {
            UsuarioDispositivoCountDTO dto = new UsuarioDispositivoCountDTO();
            dto.setNombreUsuario(fila[0]);
            dto.setApellidoUsuario(fila[1]);
            dto.setCantidadDispositivos(Long.parseLong(fila[2]));
            listaDTO.add(dto);
        }

        return listaDTO;
    }

    @GetMapping("/{idUsuario}/historial-ubicaciones")
    public List<UsuarioHistorialUbicacionDTO> obtenerHistorialUbicacionPorUsuario(@PathVariable Integer idUsuario) {
        List<String[]> resultados = uS.obtenerHistorialUbicacionPorUsuario(idUsuario);
        List<UsuarioHistorialUbicacionDTO> listaDTO = new ArrayList<>();

        for (String[] fila : resultados) {
            UsuarioHistorialUbicacionDTO dto = new UsuarioHistorialUbicacionDTO();
            dto.setNombreUsuario(fila[0]);
            dto.setApellidoUsuario(fila[1]);
            dto.setFecha(LocalDate.parse(fila[2]));
            dto.setHora(LocalTime.parse(fila[3]));
            dto.setDistrito(fila[4]);
            listaDTO.add(dto);
        }

        return listaDTO;
    }

    @GetMapping("/{idUsuario}/enfermedades")
    public List<UsuarioEnfermedadDTO> obtenerEnfermedadesPorUsuario(@PathVariable Integer idUsuario) {
        List<String[]> resultados = uS.obtenerEnfermedadesPorUsuario(idUsuario);
        List<UsuarioEnfermedadDTO> listaDTO = new ArrayList<>();

        for (String[] fila : resultados) {
            UsuarioEnfermedadDTO dto = new UsuarioEnfermedadDTO();
            dto.setNombreUsuario(fila[0]);
            dto.setApellidoUsuario(fila[1]);
            dto.setNombreEnfermedad(fila[2]);
            dto.setDescripcionEnfermedad(fila[3]);
            dto.setTipoEnfermedad(fila[4]);
            listaDTO.add(dto);
        }

        return listaDTO;
    }

    @GetMapping("/{idUsuario}/alergias")
    public List<UsuarioAlergiaDTO> obtenerAlergiasPorUsuario(@PathVariable Integer idUsuario) {
        List<String[]> resultados = uS.obtenerAlergiasPorUsuario(idUsuario);
        List<UsuarioAlergiaDTO> listaDTO = new ArrayList<>();

        for (String[] fila : resultados) {
            UsuarioAlergiaDTO dto = new UsuarioAlergiaDTO();
            dto.setNombreUsuario(fila[0]);
            dto.setApellidoUsuario(fila[1]);
            dto.setNombreAlergia(fila[2]);
            dto.setDescripcionAlergia(fila[3]);
            dto.setCausaAlergia(fila[4]);
            listaDTO.add(dto);
        }

        return listaDTO;
    }

}
