package pe.edu.upc.project_security_g06.controllers;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pe.edu.upc.project_security_g06.dtos.EnfermedadesDTO;
import pe.edu.upc.project_security_g06.entities.Enfermedades;
import pe.edu.upc.project_security_g06.servicesinterfaces.IdEnfermedadService;

import java.util.List;
import java.util.stream.Collectors;


@RestController
@RequestMapping("/enfermedades")
public class EnfermedadesController {
    @Autowired
    private IdEnfermedadService eS;

    @PostMapping
    public void registrar(@RequestBody EnfermedadesDTO dto) {
        ModelMapper m = new ModelMapper();
        Enfermedades d = m.map(dto, Enfermedades.class);
        eS.insert(d);
    }

    @GetMapping
    public List<EnfermedadesDTO> listar(){
        return eS.list().stream().map(x->{
            ModelMapper m=new ModelMapper();
            return m.map(x,EnfermedadesDTO.class);
        }).collect(Collectors.toList());
    }
    @PutMapping
    public void modificar(@RequestBody EnfermedadesDTO dto){
        ModelMapper m=new ModelMapper();
        Enfermedades d=m.map(dto,Enfermedades.class);
        eS.update(d);
    }
    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable("id") Integer id){
        eS.delete(id);
    }
}
