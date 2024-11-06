import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Detallemedico } from '../models/detallemedico';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
const base_url = environment.base;

@Injectable({
  providedIn: 'root'
})
export class DetallemedicoService {
  private url=`${base_url}/detalleMedico`
  private listaCambio = new Subject<Detallemedico[]>();

  constructor(private http: HttpClient) {}

  list() {
    return this.http.get<Detallemedico[]>(this.url);
  }
  insert(de: Detallemedico) {
    return this.http.post(this.url, de);
  }
  //get y set
  
  getList() {
    return this.listaCambio.asObservable();
  }
  setList(listaNueva: Detallemedico[]) {
    this.listaCambio.next(listaNueva);
}
}
