package pe.edu.upc.project_security_g06.controllers;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pe.edu.upc.project_security_g06.entities.Historial_Ubicacion;
import pe.edu.upc.project_security_g06.dtos.Historial_UbicacionDTO;
import pe.edu.upc.project_security_g06.servicesinterfaces.IHistorial_UbicacionService;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/historialUbicaciones")
public class HistorialUbicacionController {
    @Autowired
    private IHistorial_UbicacionService huS;

    @PostMapping
    public void registrar(@RequestBody Historial_UbicacionDTO dto) {
        ModelMapper m = new ModelMapper();
        Historial_Ubicacion d = m.map(dto, Historial_Ubicacion.class);
        huS.insert(d);
    }

    @GetMapping
    public List<Historial_UbicacionDTO> listar(){
        return huS.listar().stream().map(x->{
            ModelMapper m=new ModelMapper();
            return m.map(x,Historial_UbicacionDTO.class);
        }).collect(Collectors.toList());
    }

    @GetMapping("/{id}")
    public Historial_UbicacionDTO listarId(@PathVariable("id") Integer IdHistorial_Ubicacion) {
        ModelMapper m=new ModelMapper();
        Historial_UbicacionDTO dto=m.map(huS.listid(IdHistorial_Ubicacion),Historial_UbicacionDTO.class);
        return dto;
    }

    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable("id") Integer id) {
        huS.delete(id);
    }

    @PutMapping
    public void modificar(@RequestBody Historial_UbicacionDTO dto) {
        ModelMapper m = new ModelMapper();
        Historial_Ubicacion d = m.map(dto, Historial_Ubicacion.class);
        huS.update(d);
    }
}
