import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Contacto_Emergencia } from '../models/Contacto_Emergencia';
import { Subject } from 'rxjs';

const base_url = environment.base;

@Injectable({
  providedIn: 'root',
})
export class ContactoEmergenciaService {
  private url = `${base_url}/contacto-emergencia`;
  private listaCambio = new Subject<Contacto_Emergencia[]>();

  constructor(private http: HttpClient) {}

  list() {
    return this.http.get<Contacto_Emergencia[]>(this.url);
  }

  insert(contacto: Contacto_Emergencia) {
    return this.http.post(this.url, contacto);
  }

  getList() {
    return this.listaCambio.asObservable();
  }

  setList(listaNueva: Contacto_Emergencia[]) {
    this.listaCambio.next(listaNueva);
  }

  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }

  listId(id: number) {
    return this.http.get<Contacto_Emergencia>(`${this.url}/${id}`);
  }

  update(c: Contacto_Emergencia) {
    return this.http.put(this.url, c);
  }
}
