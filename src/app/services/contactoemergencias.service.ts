import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Contactoemergencias } from '../models/contactoemergencias';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CantidadrelacioncontactosDTO } from '../models/CantidadrelacioncontactosDTO';
const base_url = environment.base;

@Injectable({
  providedIn: 'root'
})
export class ContactoemergenciasService {
  private url = `${base_url}/contactoEmergencia`;
  private listaCambio = new Subject<Contactoemergencias[]>();

  constructor(private http: HttpClient) {}

  list() {
    return this.http.get<Contactoemergencias[]>(this.url);
  }

  insert(contacto: Contactoemergencias) {
    return this.http.post(this.url, contacto);
  }

  getList() {
    return this.listaCambio.asObservable();
  }

  setList(listaNueva: Contactoemergencias[]) {
    this.listaCambio.next(listaNueva);
  }

  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }

  listId(id: number) {
    return this.http.get<Contactoemergencias>(`${this.url}/${id}`);
  }

  update(c: Contactoemergencias) {
    return this.http.put(this.url, c);
  }

  getCantidadRelacionContacto(relacion_contacto: string): Observable<CantidadrelacioncontactosDTO[]> {
    return this.http.get<CantidadrelacioncontactosDTO[]>(`${this.url}/buscarpornombresdereferencia`, {
    params: { relacion_contacto },
    });
  }


}
