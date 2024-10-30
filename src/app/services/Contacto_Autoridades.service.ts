import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Contacto_Autoridades } from '../models/Contacto_Autoridades';
import { Subject } from 'rxjs';

const base_url = environment.base;

@Injectable({
  providedIn: 'root',
})
export class ContactoAutoridadesService {
  private url = `${base_url}/contacto-autoridades`;
  private listaCambio = new Subject<Contacto_Autoridades[]>();

  constructor(private http: HttpClient) {}

  list() {
    return this.http.get<Contacto_Autoridades[]>(this.url);
  }

  insert(contacto: Contacto_Autoridades) {
    return this.http.post(this.url, contacto);
  }

  getList() {
    return this.listaCambio.asObservable();
  }

  setList(listaNueva: Contacto_Autoridades[]) {
    this.listaCambio.next(listaNueva);
  }

  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }

  listId(id: number) {
    return this.http.get<Contacto_Autoridades>(`${this.url}/${id}`);
  }

  update(contacto: Contacto_Autoridades) {
    return this.http.put(this.url, contacto);
  }
}

