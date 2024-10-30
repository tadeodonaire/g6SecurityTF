package pe.edu.upc.project_security_g06.entities;

import jakarta.persistence.*;
@Entity
@Table(name = "HistorialClinico")
public class Historial_Clinico {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int IdHistorialClinico;

    @Column(name = "SeguroMed",nullable = false,length = 20)
    private String SeguroMed;

    @ManyToOne
    @JoinColumn(name = "IdUsario", nullable = false)
    private Users users;

    public Historial_Clinico() {
    }

    public Historial_Clinico(int IdHistorialClinico, String SeguroMed, Users users) {
        this.IdHistorialClinico = IdHistorialClinico;
        this.SeguroMed = SeguroMed;
        this.users = users;
    }
    public int getIdHistorialClinico() {
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
