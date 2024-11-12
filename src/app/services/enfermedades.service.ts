import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";
import { Enfermedades } from '../models/Enfermedades';

const base_url = environment.base;

@Injectable({
  providedIn: 'root',
})
export class EnfermedadesService {
  private url = `${base_url}/enfermedades`;
  private listaCambio = new Subject<Enfermedades[]>();

  constructor(private http: HttpClient) {}

  list() {
    return this.http.get<Enfermedades[]>(this.url);
  }

  insert(en: Enfermedades) {
    return this.http.post(this.url, en);
  }

  //get y set
  getList() {
    return this.listaCambio.asObservable();
  }
  setList(listaNueva: Enfermedades[]) {
    this.listaCambio.next(listaNueva);
  }

  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`); //busca el del id
  }

  listId(id: number) {
    return this.http.get<Enfermedades>(`${this.url}/${id}`);
  }

  update(e: Enfermedades) {
    return this.http.put(this.url, e);
  }
}