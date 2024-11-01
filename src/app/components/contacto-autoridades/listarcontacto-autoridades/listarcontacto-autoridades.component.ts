import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Contacto_Autoridades } from '../../../models/Contacto_Autoridades';
import { ContactoAutoridadesService } from '../../../services/Contacto_Autoridades.service';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-listarcontacto-autoridades',
  standalone: true,
  imports: [MatTableModule, MatIconModule, RouterModule],
  templateUrl: './listarcontacto-autoridades.component.html',
  styleUrls: ['./listarcontacto-autoridades.component.css'],
})
export class ListarContactoAutoridadesComponent implements OnInit {
  dataSource: MatTableDataSource<Contacto_Autoridades> = new MatTableDataSource();
  displayedColumns: string[] = ['IdContacAuto', 'nombre_contac_Auto', 'numeTelefono_contac_Auto', 'accion01', 'accion02'];

  constructor(private cAS: ContactoAutoridadesService) {}

  ngOnInit(): void {
    this.cAS.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
    this.cAS.getList().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
  }

  eliminar(id: number) {
    this.cAS.delete(id).subscribe(() => {
      this.cAS.list().subscribe((data) => {
        this.cAS.setList(data);
      });
    });
  }
}
