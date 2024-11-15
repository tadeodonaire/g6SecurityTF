import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Subject } from 'rxjs';
import { Historialubicacion } from '../models/Historialubicacion';
import { HttpClient } from '@angular/common/http';


const base_url = environment.base;
@Injectable({
  providedIn: 'root'
})
export class HistorialubicacionService {

  private url = `${base_url}/historialUbicaciones`;
  private listaCambio = new Subject<Historialubicacion[]>();

  constructor( private http:HttpClient) { }

  list() {
    return this.http.get<Historialubicacion[]>(this.url);
  }
  insert(de: Historialubicacion) {
    return this.http.post(this.url, de);
  }
  //get y set
  
  getList() {
    return this.listaCambio.asObservable();
  }
  setList(listaNueva: Historialubicacion[]) {
    this.listaCambio.next(listaNueva);
  }

}
