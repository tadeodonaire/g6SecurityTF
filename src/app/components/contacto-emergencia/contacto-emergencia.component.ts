import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { ListarContactoEmergenciaComponent } from './listarcontacto-emergencia/listarcontacto-emergencia.component';

@Component({
  selector: 'app-contacto-emergencia',
  standalone: true,
  imports: [RouterOutlet, ListarContactoEmergenciaComponent],
  templateUrl: './contacto-emergencia.component.html',
  styleUrl: './contacto-emergencia.component.css'
})
export class ContactoEmergenciaComponent {
  constructor(public route:ActivatedRoute) {}

}
