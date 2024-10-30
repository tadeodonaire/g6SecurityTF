import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Contacto_Emergencia } from '../../../models/Contacto_Emergencia';
import { ContactoEmergenciaService } from '../../../services/Contacto_Emergencia.service';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-listarcontacto-emergencia',
  standalone: true,
  imports: [MatTableModule, MatIconModule, RouterModule],
  templateUrl: './listarcontacto-emergencia.component.html',
  styleUrls: ['./listarcontacto-emergencia.component.css'],
})
export class ListarContactoEmergenciaComponent implements OnInit {
  dataSource: MatTableDataSource<Contacto_Emergencia> = new MatTableDataSource();
  displayedColumns: string[] = ['idContacto', 'nombre_contacto', 'relacion_contacto', 'num_telefono_contacto', 'accion01', 'accion02'];

  constructor(private cES: ContactoEmergenciaService) {}

  ngOnInit(): void {
    this.cES.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
    this.cES.getList().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
  }

  eliminar(id: number) {
    this.cES.delete(id).subscribe((data) => {
      this.cES.list().subscribe((data) => {
        this.cES.setList(data);
      });
    });
  }
}
