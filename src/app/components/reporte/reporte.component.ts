import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { ReportecantidadrelacioncontactosComponent } from './reportecantidadrelacioncontactos/reportecantidadrelacioncontactos.component';
import { ReporteHistorialClinicoComponent } from './reportehistorialclinico/reportehistorialclinico.component';

@Component({
  selector: 'app-reporte',
  standalone: true,
  imports: [RouterOutlet,ReportecantidadrelacioncontactosComponent],
  templateUrl: './reporte.component.html',
  styleUrl: './reporte.component.css'
})
export class ReporteComponent {
  constructor(public route: ActivatedRoute) {}
}
