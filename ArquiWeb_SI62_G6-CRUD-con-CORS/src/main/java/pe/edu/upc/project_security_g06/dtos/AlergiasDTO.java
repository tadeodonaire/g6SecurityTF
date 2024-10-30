package pe.edu.upc.project_security_g06.dtos;

public class AlergiasDTO {
    private int idAlergias;
    private String nombre_alergias;
    private String descripcion_alergias;
    private String causa_alergias;

    public int getIdAlergias() {
        return idAlergias;
    }
    public void setIdAlergias(int idAlergias) {
        this.idAlergias = idAlergias;
    }
    public String getNombre_alergias() {
        return nombre_alergias;
    }
    public void setNombre_alergias(String nombre_alergias) {
        this.nombre_alergias = nombre_alergias;
    }
    public String getDescripcion_alergias() {
        return descripcion_alergias;
    }
    public void setDescripcion_alergias(String descripcion_alergias) {
        this.descripcion_alergias = descripcion_alergias;
    }
    public String getCausa_alergias() {
        return causa_alergias;
    }
    public void setCausa_alergias(String causa_alergias) {
        this.causa_alergias = causa_alergias;
    }
}
