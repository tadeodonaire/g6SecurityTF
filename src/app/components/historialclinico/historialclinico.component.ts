import { Component } from '@angular/core';
import { ListarhistorialclinicoComponent } from './listarhistorialclinico/listarhistorialclinico.component';
import { ActivatedRoute, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-historialclinico',
  standalone: true,
  imports: [ListarhistorialclinicoComponent, RouterOutlet],
  templateUrl: './historialclinico.component.html',
  styleUrl: './historialclinico.component.css'
})
export class HistorialclinicoComponent {
  constructor(public route: ActivatedRoute){}
}
