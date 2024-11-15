import { Component, ViewChild } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule, RouterOutlet } from '@angular/router';
import { LoginService } from '../../services/login.service';
import {MatSidenav, MatSidenavModule} from '@angular/material/sidenav';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navegacion',
  standalone: true,
  imports: [RouterOutlet,MatIcon,MatMenuModule,MatToolbarModule,RouterModule,MatSidenavModule, CommonModule],
  templateUrl: './navegacion.component.html',
  styleUrl: './navegacion.component.css'
})
export class NavegacionComponent {

  rol: string = '';
  constructor(private loginService: LoginService) {}
  cerrar() {
    sessionStorage.clear();
  }

  verificar() {
    this.rol = this.loginService.showRole();
    return this.loginService.verificar();
  }
  isAdministrador() {
    return this.rol === 'ADMINISTRADOR';
  }

  isPersonal() {
    return this.rol === 'PERSONALEMERGENCIA';
  }

  isUsuario() {
    return this.rol === 'USUARIO';
  }

}
