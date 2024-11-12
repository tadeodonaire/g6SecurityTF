import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { ListarciudadComponent } from './listarciudad/listarciudad.component';

@Component({
  selector: 'app-ciudad',
  standalone: true,
  imports: [RouterOutlet, ListarciudadComponent],
  templateUrl: './ciudad.component.html',
  styleUrl: './ciudad.component.css'
})
export class CiudadComponent {
  constructor(public route:ActivatedRoute) {}

}