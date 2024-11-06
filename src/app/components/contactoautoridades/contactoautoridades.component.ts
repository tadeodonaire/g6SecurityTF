import { Component } from '@angular/core';
import { ListacontactoautoridadeComponent } from "./listacontactoautoridade/listacontactoautoridade.component";
import { ActivatedRoute, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-contactoautoridades',
  standalone: true,
  imports: [ListacontactoautoridadeComponent, RouterOutlet],
  templateUrl: './contactoautoridades.component.html',
  styleUrl: './contactoautoridades.component.css'
})
export class ContactoautoridadesComponent {
  constructor(public route:ActivatedRoute) {}
}
