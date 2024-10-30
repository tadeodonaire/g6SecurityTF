package pe.edu.upc.project_security_g06.dtos;
import pe.edu.upc.project_security_g06.entities.Users;

public class Historial_ClinicoDTO {

    private int IdHistorialClinico;
    private String SeguroMed;
    private Users users;


    public  int getIdHistorialClinico() {
        return IdHistorialClinico;
    }
    public void setIdHistorialClinico(int IdHistorialClinico) {
        this.IdHistorialClinico = IdHistorialClinico;
    }
    public String getSeguroMed() {
        return SeguroMed;
    }
    public void setSeguroMed(String SeguroMed) {
        this.SeguroMed = SeguroMed;
    }
    public Users getUsers() {return users; }
    public void setUsers(Users users) {this.users = users;}

}
