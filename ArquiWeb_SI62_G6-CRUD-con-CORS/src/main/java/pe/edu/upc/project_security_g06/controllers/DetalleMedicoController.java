package pe.edu.upc.project_security_g06.controllers;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pe.edu.upc.project_security_g06.dtos.AlergiasDTO;
import pe.edu.upc.project_security_g06.dtos.Detalle_MedicoDTO;
import pe.edu.upc.project_security_g06.dtos.DistritoDTO;
import pe.edu.upc.project_security_g06.entities.Detalle_Medico;
import pe.edu.upc.project_security_g06.entities.Distrito;
import pe.edu.upc.project_security_g06.servicesinterfaces.IDetalle_MedicoService;

import java.util.List;
import java.util.stream.Collectors;


@RestController
@RequestMapping("/detalleMedico")
public class DetalleMedicoController {
    @Autowired
    private IDetalle_MedicoService dmS;

    @PostMapping
    public void insertar(@RequestBody Detalle_Medico dto) {
        ModelMapper m = new ModelMapper();
        Detalle_Medico d = m.map(dto, Detalle_Medico.class);
        dmS.insert(d);
    }
    @GetMapping
    public List<Detalle_MedicoDTO> listar() {
        return dmS.list().stream().map(x->{
            ModelMapper m=new ModelMapper();
            return m.map(x,Detalle_MedicoDTO.class);
        }).collect(Collectors.toList());
    }

    @PutMapping
    public void modificar(@RequestBody Detalle_MedicoDTO dto){
        ModelMapper m=new ModelMapper();
        Detalle_Medico d=m.map(dto,Detalle_Medico.class);
        dmS.update(d);
    }
    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable("id") Integer id){
        dmS.delete(id);
    }
}
