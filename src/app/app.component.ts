import { Component } from "@angular/core";
import { RouterModule, RouterOutlet } from "@angular/router";
import { UserComponent } from "./components/user/user.component";
import { AlergiasComponent } from "./components/alergias/alergias.component";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import { MatButtonModule } from "@angular/material/button";
import { EnfermedadesComponent } from "./components/enfermedades/enfermedades.component";
import { ContactoautoridadesComponent } from "./components/contactoautoridades/contactoautoridades.component";
import { ContactoemergenciasComponent } from "./components/contactoemergencias/contactoemergencias.component";
import { DispositivoComponent } from "./components/dispositivo/dispositivo.component";
import { RolesComponent } from "./components/roles/roles.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    RouterOutlet,
    UserComponent,
    AlergiasComponent,
    ContactoautoridadesComponent,
    ContactoemergenciasComponent,
    DispositivoComponent,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    RouterModule,
    EnfermedadesComponent,
    RolesComponent
  ],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  title = "g6CRUDSI62";
}
