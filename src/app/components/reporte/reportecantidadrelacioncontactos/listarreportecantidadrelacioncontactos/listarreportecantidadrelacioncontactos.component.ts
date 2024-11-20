import { Component, OnInit } from '@angular/core';
import { ContactoemergenciasService } from '../../../../services/contactoemergencias.service';
import { ActivatedRoute } from '@angular/router';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { CantidadrelacioncontactosDTO } from '../../../../models/CantidadrelacioncontactosDTO';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listarreportecantidadrelacioncontactos',
  standalone: true,
  imports: [MatTableModule,CommonModule], // Asegúrate de incluir MatTableModule aquí
  templateUrl: './listarreportecantidadrelacioncontactos.component.html',
  styleUrls: ['./listarreportecantidadrelacioncontactos.component.css']
})
export class ListarreportecantidadrelacioncontactosComponent implements OnInit {
  displayedColumns: string[] = ['relacion_contacto', 'cantidad_relaciones_similares'];
  dataSource: MatTableDataSource<CantidadrelacioncontactosDTO> = new MatTableDataSource();

  constructor(
    private ceS: ContactoemergenciasService, 
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const relacionContacto = params['relacion_contacto'];
      if (relacionContacto) {
        console.log('Parámetro recibido:', relacionContacto); // Log para depuración
        this.ceS.getCantidadRelacionContacto(relacionContacto).subscribe({
          next: (data) => {
            console.log('Datos recibidos:', data); // Log para verificar datos de la API
            if (Array.isArray(data) && data.length > 0) {
              this.dataSource = new MatTableDataSource(data);
            } else {
              console.warn('No se encontraron resultados para:', relacionContacto);
            }
          },
          error: (err) => {
            console.error('Error al obtener los datos:', err);
          }
        });
      } else {
        console.error('No se proporcionó el parámetro "relacion_contacto".');
      }
    });
  }
  
}
