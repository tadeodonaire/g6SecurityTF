import { Component } from "@angular/core";
import { RouterModule, RouterOutlet } from "@angular/router";
import { UserComponent } from "./components/user/user.component";
import { AlergiasComponent } from "./components/alergias/alergias.component";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import { MatButtonModule } from "@angular/material/button";
import { EnfermedadesComponent } from "./components/enfermedades/enfermedades.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    RouterOutlet,
    UserComponent,
    AlergiasComponent,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    RouterModule,
    EnfermedadesComponent,
  ],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  title = "g6CRUDSI62";
}
