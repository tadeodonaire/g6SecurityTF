import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from '../models/Users';
import { environment } from '../../environments/environment';
import { Observable, Subject } from 'rxjs';
import { UsuarioDispositivoRolDTO } from '../models/usuariodispositivorolDTO';
import { UsuarioHistorialClinicoDTO } from '../models/UsuarioHistorialClinicoDTO';
import { UsuarioHistorialUbicacionDTO } from '../models/UsuarioHistorialUbicacionDTO';
import { UsuarioConteoAlerEnferDTO } from '../models/UsuarioConteoAlerEnferDTO';

const base_url=environment.base
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url=`${base_url}/usuarios`
  private listaCambio=new Subject<Users[]>();

  constructor(private http:HttpClient) { }

  list(){
    return this.http.get<Users[]>(this.url)
  }

  insert(us:Users){
    return this.http.post(this.url, us);
  }

  //get y set

  getList(){
    return this.listaCambio.asObservable();
  }
  setList(listaNueva: Users[]){
    this.listaCambio.next(listaNueva);
  }
  delete(id:number){
    return this.http.delete(`${this.url}/${id}`);
  }
  listId(id:number){
    return this.http.get<Users>(`${this.url}/${id}`);
  }
  update(u:Users){
    return this.http.put(this.url, u)
  }
  getRolxDispositivo(): Observable<UsuarioDispositivoRolDTO[]> {
    return this.http.get<UsuarioDispositivoRolDTO[]>(`${this.url}/rolxdispositivodeusuario`);
  }
  getHistorialClinicoxUsuario(idUsuario: number): Observable<UsuarioHistorialClinicoDTO[]> {
    return this.http.get<UsuarioHistorialClinicoDTO[]>(`${this.url}/${idUsuario}/informacion-clinica`);
  }
  getHistorialUbicacionesxUsuario(idUsuario: number): Observable<UsuarioHistorialUbicacionDTO[]> {
    return this.http.get<UsuarioHistorialUbicacionDTO[]>(`${this.url}/${idUsuario}/historial-ubicaciones`);
  }
  getCantidadAlergiaEnfermedadxNomUsuario(name: string): Observable<UsuarioConteoAlerEnferDTO[]> {
    return this.http.get<UsuarioConteoAlerEnferDTO[]>(`${this.url}/CantidadAlerEnferXuser`, {
    params: { name },
  });
  }
}
