package pe.edu.upc.project_security_g06.controllers;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pe.edu.upc.project_security_g06.dtos.DispositivoContactoAutoridadDTO;
import pe.edu.upc.project_security_g06.dtos.DistritoDTO;
import pe.edu.upc.project_security_g06.entities.Dispositivo;
import pe.edu.upc.project_security_g06.dtos.DispositivoDTO;
import pe.edu.upc.project_security_g06.entities.Distrito;
import pe.edu.upc.project_security_g06.servicesinterfaces.IDispositivoService;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;


@RestController
@RequestMapping("/dispositivos")
public class DispositivoController {
    @Autowired
    private IDispositivoService dS;

    @PostMapping
    public void insertar(@RequestBody DispositivoDTO dto) {
        ModelMapper m = new ModelMapper();
        Dispositivo dis = m.map(dto, Dispositivo.class);
        dS.insert(dis);
    }

    @GetMapping
    public List<DispositivoDTO> listar(){
        return dS.list().stream().map(x->{
            ModelMapper m=new ModelMapper();
            return m.map(x,DispositivoDTO.class);
        }).collect(Collectors.toList());
    }

    @PutMapping
    public void modificar(@RequestBody DispositivoDTO dto){
        ModelMapper m=new ModelMapper();
        Dispositivo d=m.map(dto,Dispositivo.class);
        dS.update(d);
    }
    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable("id") Integer id){
        dS.delete(id);
    }


    @GetMapping("/{id}")
    public DispositivoDTO listarId(@PathVariable("id") Integer id) {
        ModelMapper m = new ModelMapper();
        DispositivoDTO dto = m.map(dS.list(id), DispositivoDTO.class);
        return dto;
    }

    @GetMapping("/contacAuto/{id}")
    public List<DispositivoContactoAutoridadDTO> obtenerdetalledispositivoycontactoautoridad(@PathVariable("id") Integer id) {
        List<String[]> resultados = dS.obtenerdetalledispositivoycontactoautoridad(id);
        List<DispositivoContactoAutoridadDTO> listaDTO = new ArrayList<>();

        for (String[] fila : resultados) {
            DispositivoContactoAutoridadDTO dto = new DispositivoContactoAutoridadDTO();
            dto.setNombreDispositivo(fila[0]);
            dto.setNombreAutoridad(fila[1]);
            dto.setTelefonoAutoridad(Integer.parseInt(fila[2]));
            listaDTO.add(dto);
        }

        return listaDTO;
    }
}
