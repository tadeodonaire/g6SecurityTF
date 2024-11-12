import { Component } from '@angular/core';
import { ListardispositivosComponent } from "./listardispositivos/listardispositivos.component";
import { ActivatedRoute, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dispositivo',
  standalone: true,
  imports: [ListardispositivosComponent, RouterOutlet],
  templateUrl: './dispositivo.component.html',
  styleUrl: './dispositivo.component.css'
})
export class DispositivoComponent {
  constructor(public route: ActivatedRoute){}
}
