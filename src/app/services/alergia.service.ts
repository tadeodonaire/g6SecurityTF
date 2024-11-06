import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";
import { Alergias } from "../models/Alergias";

const base_url = environment.base;

@Injectable({
  providedIn: "root",
})
export class AlergiasService {
  private url = `${base_url}/alergias`;
  private listaCambio = new Subject<Alergias[]>();

  constructor(private http: HttpClient) {}

  list() {
    return this.http.get<Alergias[]>(this.url);
  }

  insert(al: Alergias) {
    return this.http.post(this.url, al);
  }

  //get y set
  getList() {
    return this.listaCambio.asObservable();
  }
  setList(listaNueva: Alergias[]) {
    this.listaCambio.next(listaNueva);
  }

  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`); //busca el del id
  }

  listId(id: number) {
    return this.http.get<Alergias>(`${this.url}/${id}`);
  }

  update(a: Alergias) {
    return this.http.put(this.url, a);
  }
}
