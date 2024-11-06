import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { ListaralergiasComponent } from './listaralergias/listaralergias.component';

@Component({
  selector: 'app-alergias',
  standalone: true,
  imports: [RouterOutlet, ListaralergiasComponent],
  templateUrl: './alergias.component.html',
  styleUrl: './alergias.component.css'
})
export class AlergiasComponent {
    constructor(public route:ActivatedRoute){}
}
