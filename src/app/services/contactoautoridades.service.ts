import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Contacto_Autoridades } from '../models/contactoautoridades';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const base_url=environment.base;
@Injectable({
  providedIn: 'root'
})

export class ContactoautoridadesService {
  private url = `${base_url}/contactosAutoridades`;
  private listaCambio = new Subject<Contacto_Autoridades[]>();

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Contacto_Autoridades[]>(this.url);
  }

  insert(de: Contacto_Autoridades) {
    return this.http.post(this.url, de);
  }

  //get y set
  getList() {
    return this.listaCambio.asObservable();
  }
  setList(listaNueva: Contacto_Autoridades[]) {
    this.listaCambio.next(listaNueva);
  }

  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`); //busca el del id
  }

  listId(id: number) {
    return this.http.get<Contacto_Autoridades>(`${this.url}/${id}`);
  }

  update(d: Contacto_Autoridades) {
    return this.http.put(this.url, d);
  }
}