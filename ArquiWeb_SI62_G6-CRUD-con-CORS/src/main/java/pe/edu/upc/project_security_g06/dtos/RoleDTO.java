package pe.edu.upc.project_security_g06.dtos;

import pe.edu.upc.project_security_g06.entities.Users;

public class RoleDTO {
    private Long id;
    private String rol;
    private Users user;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getRol() {
        return rol;
    }

    public void setRol(String rol) {
        this.rol = rol;
    }


}
