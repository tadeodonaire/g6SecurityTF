import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { ListacontactoemergenciasComponent } from './listacontactoemergencias/listacontactoemergencias.component';

@Component({
  selector: 'app-contactoemergencias',
  standalone: true,
  imports: [RouterOutlet, ListacontactoemergenciasComponent],
  templateUrl: './contactoemergencias.component.html',
  styleUrl: './contactoemergencias.component.css'
})
export class ContactoemergenciasComponent {
  constructor(public route:ActivatedRoute) {}
}
