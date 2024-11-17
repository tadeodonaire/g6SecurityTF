import { Component, OnInit, ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTableDataSource } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { Contactoemergencias } from '../../../models/contactoemergencias';
import { ContactoautoridadesService } from '../../../services/contactoautoridades.service';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { ContactoemergenciasService } from '../../../services/contactoemergencias.service';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-listacontactoemergencias',
  standalone: true,
  imports: [MatTableModule, MatIconModule, RouterModule, CommonModule, MatPaginator],
  templateUrl: './listacontactoemergencias.component.html',
  styleUrl: './listacontactoemergencias.component.css'
})
export class ListacontactoemergenciasComponent implements OnInit{
  dataSource: MatTableDataSource<Contactoemergencias> = new MatTableDataSource();
  displayedColumns: string[] = ['idContacto', 'nombre_contacto', 'relacion_contacto', 'num_telefono_contacto', 'accion01', 'accion02'];

  constructor(private cES: ContactoemergenciasService) {}

  ngOnInit(): void {
    this.cES.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
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

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
