package pe.edu.upc.project_security_g06.dtos;



public class Contacto_EmergenciaDTO {
    private int IdContacto;
    private String nombre_contacto;
    private String relacion_contacto;
    private int num_telefono_contacto;

    public int getIdContacto() {return IdContacto;}
    public void setIdContacto(int idContacto) { this.IdContacto = idContacto;}
    public String getNombre_contacto() {return nombre_contacto;}
    public void setNombre_contacto(String nombre_contacto) {this.nombre_contacto = nombre_contacto;}
    public String getRelacion_contacto() {return relacion_contacto;}
    public void setRelacion_contacto(String relacion_contacto){this.relacion_contacto = relacion_contacto;}
    public int getNum_telefono_contacto() {return num_telefono_contacto;}
    public void setNum_telefono_contacto(int num_telefono_contacto){this.num_telefono_contacto=num_telefono_contacto;}
}
