import { Injectable } from '@angular/core';
import { JwtRequest } from '../models/jwtRequest';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient) {}
  login(request: JwtRequest) {

    return this.http.post('https://arquitecturaweb.azurewebsites.net/login', request);
    //return this.http.post('http://localhost:8082/login', request);
  }
  verificar() {
    let token = sessionStorage.getItem('token');
    return token != null;
  }
  showRole() {
    let token = sessionStorage.getItem('token');
    if (!token) {
      // Manejar el caso en el que el token es nulo.
      return null; // O cualquier otro valor predeterminado dependiendo del contexto.
    }
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(token);
    return decodedToken?.role;
  }

  getCurrentUser() {
    const user = sessionStorage.getItem('currentUser'); // Ajusta según cómo guardes el usuario
    return user ? JSON.parse(user) : null;
  }

  getNombre(): string {
    let user = this.getCurrentUser();
    return user ? user.nombre : 'Nombre';
  }

  getApellido(): string {
    let user = this.getCurrentUser();
    return user ? user.apellido : 'Apellido';
  }
}
