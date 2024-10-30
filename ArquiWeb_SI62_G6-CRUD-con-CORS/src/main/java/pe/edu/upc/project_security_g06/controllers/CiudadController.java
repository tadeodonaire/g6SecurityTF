package pe.edu.upc.project_security_g06.controllers;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pe.edu.upc.project_security_g06.dtos.CiudadDTO;
import pe.edu.upc.project_security_g06.dtos.UserDTO;
import pe.edu.upc.project_security_g06.entities.Ciudad;
import pe.edu.upc.project_security_g06.servicesinterfaces.ICiudadService;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/Ciudades")
public class CiudadController {
    @Autowired
    private ICiudadService cS;

    @PostMapping
    private void registrar(@RequestBody CiudadDTO dto) {
        ModelMapper m = new ModelMapper();
        Ciudad c = m.map(dto, Ciudad.class);
        cS.insert(c);
    }

    @GetMapping
    public List<CiudadDTO> listar() {
        return cS.list().stream().map(x -> {
            ModelMapper m = new ModelMapper();
            return m.map(x, CiudadDTO.class);
        }).collect(Collectors.toList());
    }

  @GetMapping("/{id}")
  public CiudadDTO listarId(@PathVariable("id") Integer id) {
    ModelMapper m = new ModelMapper();
    CiudadDTO dto = m.map(cS.listarId(id), CiudadDTO.class);
    return dto;
  }

    @PutMapping
    public void modificar(@RequestBody CiudadDTO dto){
        ModelMapper m=new ModelMapper();
        Ciudad d=m.map(dto,Ciudad.class);
        cS.update(d);
    }

    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable("id") Integer id){
        cS.delete(id);
    }
}
