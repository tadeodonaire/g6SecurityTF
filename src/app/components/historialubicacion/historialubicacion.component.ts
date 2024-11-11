import { Component } from '@angular/core';
import { ListarhistorialubicacionComponent } from './listarhistorialubicacion/listarhistorialubicacion.component';
import { ActivatedRoute, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-historialubicacion',
  standalone: true,
  imports: [ListarhistorialubicacionComponent,RouterOutlet],
  templateUrl: './historialubicacion.component.html',
  styleUrl: './historialubicacion.component.css'
})
export class HistorialubicacionComponent {
  constructor (public route: ActivatedRoute) {}
}
