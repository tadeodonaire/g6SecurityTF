import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Subject } from 'rxjs';
import { Historialclinico } from '../models/historialclinico';
import { HttpClient } from '@angular/common/http';

const base_url = environment.base;

@Injectable({
  providedIn: 'root'
})
export class HistorialclinicoService {
    private url=`${base_url}/historialClinico`
    private listaCambio = new Subject<Historialclinico[]>();

    constructor(private http: HttpClient) {}
  list() {
    return this.http.get<Historialclinico[]>(this.url);
  }
  insert(de: Historialclinico) {
    return this.http.post(this.url, de);
  }
  //get y set
  
  getList() {
    return this.listaCambio.asObservable();
  }
  setList(listaNueva: Historialclinico[]) {
    this.listaCambio.next(listaNueva);
  }

}
