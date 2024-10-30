package pe.edu.upc.project_security_g06.dtos;

import jakarta.persistence.Column;

import java.time.LocalDate;

public class UserDTO {
    private int idUsario;

    private String us_nombre;
    private String us_apellido;
    private int us_dni;
    private int us_telefono;
    private LocalDate us_fechanacimiento;
    private String us_email;
    private String username;
    private String password;
    private Boolean enabled;

    public int getIdUsario() {
        return idUsario;
    }

    public void setIdUsario(int IdUsario) {
        this.idUsario = IdUsario;
    }

    public String getUs_nombre() {
        return us_nombre;
    }
    public void setUs_nombre(String us_nombre) {
        this.us_nombre = us_nombre;
    }
    public String getUs_apellido() {
        return us_apellido;
    }
    public void setUs_apellido(String us_apellido) {
        this.us_apellido = us_apellido;
    }
    public int getUs_dni() {
        return us_dni;
    }
    public void setUs_dni(int us_dni) {
        this.us_dni = us_dni;
    }
    public int getUs_telefono() {
        return us_telefono;
    }
    public void setUs_telefono(int us_telefono) {
        this.us_telefono = us_telefono;
    }
    public LocalDate getUs_fechanacimiento() {
        return us_fechanacimiento;
    }
    public void setUs_fechanacimiento(LocalDate us_fechanacimiento) {
        this.us_fechanacimiento = us_fechanacimiento;
    }
    public String getUs_email() {
        return us_email;
    }
    public void setUs_email(String us_email) {
        this.us_email = us_email;
    }
    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Boolean getEnabled() {
        return enabled;
    }

    public void setEnabled(Boolean enabled) {
        this.enabled = enabled;
    }
}
