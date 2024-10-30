package pe.edu.upc.project_security_g06.controllers;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pe.edu.upc.project_security_g06.dtos.DistritoDTO;
import pe.edu.upc.project_security_g06.dtos.UbicacionDTO;
import pe.edu.upc.project_security_g06.entities.Distrito;
import pe.edu.upc.project_security_g06.entities.Ubicacion;
import pe.edu.upc.project_security_g06.servicesinterfaces.IUbicacionService;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/ubicaciones")
public class UbicacionController {
    @Autowired
    private IUbicacionService uS;

    @GetMapping
    public List<UbicacionDTO> listar() {
        return uS.list().stream().map(x->{
            ModelMapper m=new ModelMapper();
            return m.map(x, UbicacionDTO.class);
        }).collect(Collectors.toList());
    }
    @PostMapping
    public void insertar(@RequestBody UbicacionDTO dto){
        ModelMapper m=new ModelMapper();
        Ubicacion d=m.map(dto, Ubicacion.class);
        uS.insert(d);
    }

    @PutMapping
    public void modificar(@RequestBody UbicacionDTO dto){
        ModelMapper m=new ModelMapper();
        Ubicacion d=m.map(dto,Ubicacion.class);
        uS.update(d);
    }
    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable("id") Integer id){
        uS.delete(id);
    }
}