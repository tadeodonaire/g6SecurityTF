import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { UserComponent } from "./components/user/user.component";
import { ContactoAutoridadesComponent } from './components/contacto-autoridades/contacto-autoridades.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { ContactoEmergenciaComponent } from './components/contacto-emergencia/contacto-emergencia.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserComponent, ContactoAutoridadesComponent,ContactoEmergenciaComponent, MatToolbarModule, MatIconModule, MatMenuModule, MatButtonModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'g6CRUDSI62';
}
