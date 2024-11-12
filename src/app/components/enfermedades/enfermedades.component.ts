import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { ListarenfermedadesComponent } from './listarenfermedades/listarenfermedades.component';

@Component({
  selector: 'app-enfermedades',
  standalone: true,
  imports: [RouterOutlet, ListarenfermedadesComponent],
  templateUrl: './enfermedades.component.html',
  styleUrl: './enfermedades.component.css'
})
export class EnfermedadesComponent {
  constructor(public route:ActivatedRoute) {}
}
