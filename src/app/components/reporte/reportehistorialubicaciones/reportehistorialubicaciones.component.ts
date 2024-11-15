import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-reportehistorialubicaciones',
  standalone: true,
  imports: [MatTableModule, RouterModule, MatFormFieldModule, MatInputModule, FormsModule],
  templateUrl: './reportehistorialubicaciones.component.html',
  styleUrl: './reportehistorialubicaciones.component.css'
})
export class ReportehistorialubicacionesComponent {

  idUsuario: number | null = null;

  constructor(private router: Router) {}

  verReporte(): void {
    if (this.idUsuario) {
      this.router.navigate(['/reportes/historial-ubicaciones', this.idUsuario]);
    }
  }
}
