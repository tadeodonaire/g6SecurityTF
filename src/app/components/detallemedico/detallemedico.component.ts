import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { ListardetallemedicoComponent } from "./listardetallemedico/listardetallemedico.component";

@Component({
  selector: 'app-detallemedico',
  standalone: true,
  imports: [ListardetallemedicoComponent,RouterOutlet],
  templateUrl: './detallemedico.component.html',
  styleUrl: './detallemedico.component.css'
})
export class DetallemedicoComponent {
  constructor(public route: ActivatedRoute){}
}
