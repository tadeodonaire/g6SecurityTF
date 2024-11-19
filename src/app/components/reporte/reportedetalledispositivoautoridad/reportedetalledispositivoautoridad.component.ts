import { Component, OnInit } from '@angular/core';
import { DispositivoContactoAutoridadDTO } from '../../../models/DispositivocontactoautoridadDTO';
import { DispositivoService } from '../../../services/dispositivo.service';

@Component({
  selector: 'app-reportedetalledispositivoautoridad',
  templateUrl: './reportedetalledispositivoautoridad.component.html',
  styleUrls: ['./reportedetalledispositivoautoridad.component.css']
})
export class ReportedetalledispositivoautoridadComponent implements OnInit {
  detalles: DispositivoContactoAutoridadDTO[] = [];

  constructor(private DispositivoService: DispositivoService) { }

  ngOnInit(): void {
    this.getDetalleDispositivo(1); // Puedes cambiar el ID según sea necesario
  }

  getDetalleDispositivo(idDispositivo: number): void {
    this.DispositivoService.getDetalleDispositivo(idDispositivo).subscribe((data: DispositivoContactoAutoridadDTO[]) => {
      this.detalles = data;
    });
  }
}
