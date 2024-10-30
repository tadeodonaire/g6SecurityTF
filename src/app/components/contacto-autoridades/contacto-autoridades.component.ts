import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { ListarContactoAutoridadesComponent } from './listarcontacto-autoridades/listarcontacto-autoridades.component';

@Component({
  selector: 'app-contacto-autoridades',
  standalone: true,
  imports: [RouterOutlet, ListarContactoAutoridadesComponent],
  templateUrl: './contacto-autoridades.component.html',
  styleUrl: './contacto-autoridades.component.css'
})
export class ContactoAutoridadesComponent {
  constructor(public route:ActivatedRoute) {}
}
