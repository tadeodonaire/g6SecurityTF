import { Component, ViewChild } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule, RouterOutlet } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { MatSidenavModule} from '@angular/material/sidenav';
import { CommonModule } from '@angular/common';
import { RolesService } from '../../services/roles.service';



@Component({
  selector: 'app-navegacion',
  standalone: true,
  imports: [MatIcon,MatMenuModule,MatToolbarModule,RouterModule,MatSidenavModule, CommonModule],
  templateUrl: './navegacion.component.html',
  styleUrl: './navegacion.component.css'
})
export class NavegacionComponent {

  roles: any[] = [];
  rol: string = '';
  username: string = ''; // Nuevo: Para almacenar el nombre
 
  constructor(private loginService: LoginService, private rS:RolesService) {}

  ngOnInit() {
    this.rol = this.loginService.showRole();
    this.username = this.loginService.showUser(); // Obtener el nombre
    this.rS.getList().subscribe((data) => {
      this.roles = data;
    });
  }

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
