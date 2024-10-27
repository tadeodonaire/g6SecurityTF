import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { ListaruserComponent } from './listaruser/listaruser.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [RouterOutlet,ListaruserComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  constructor(public route:ActivatedRoute) {}
}
