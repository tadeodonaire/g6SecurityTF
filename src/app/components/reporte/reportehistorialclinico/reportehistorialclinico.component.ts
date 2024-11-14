import { Component} from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Router, RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reportehistorialclinico',
  standalone: true,
  imports: [MatTableModule,RouterModule, MatFormFieldModule, MatInputModule, FormsModule],
  templateUrl: './reportehistorialclinico.component.html',
  styleUrls: ['./reportehistorialclinico.component.css']
})
export class ReporteHistorialClinicoComponent  {
  idUsuario: number | null = null;

  constructor(private router:Router) {}

  verReporte(): void {
    if (this.idUsuario) {
      this.router.navigate(['/reportes/informacion-clinica', this.idUsuario]);
    }
  }
}
