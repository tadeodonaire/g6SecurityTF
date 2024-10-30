package pe.edu.upc.project_security_g06.controllers;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pe.edu.upc.project_security_g06.dtos.DistritoDTO;
import pe.edu.upc.project_security_g06.entities.Distrito;
import pe.edu.upc.project_security_g06.servicesinterfaces.IDistritoService;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/Distritos")
public class DistritoController {
    @Autowired
    private IDistritoService dS;

    @PostMapping
    public void insertar(@RequestBody DistritoDTO dto){
        ModelMapper m=new ModelMapper();
        Distrito mn=m.map(dto,Distrito.class);
        dS.insert(mn);
    }

    @GetMapping
    public List<DistritoDTO> listar(){
        return dS.list().stream().map(x->{
            ModelMapper m=new ModelMapper();
            return m.map(x,DistritoDTO.class);
        }).collect(Collectors.toList());
    }

    @PutMapping
    public void modificar(@RequestBody DistritoDTO dto){
        ModelMapper m=new ModelMapper();
        Distrito d=m.map(dto,Distrito.class);
        dS.update(d);
    }
    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable("id") Integer id){
        dS.delete(id);
    }
}