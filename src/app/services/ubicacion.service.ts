import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Subject } from 'rxjs';
import { Ubicacion } from '../models/Ubicacion';
import { HttpClient } from '@angular/common/http';

const base_url = environment.base;

@Injectable({
  providedIn: 'root'
})
export class UbicacionService {

  private url = `${base_url}/ubicaciones`;
  private listaCambio = new Subject<Ubicacion[]>();

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Ubicacion[]>(this.url);
  }
  insert(ubi: Ubicacion) {
    return this.http.post(this.url, ubi);
  }
  //get y set
  
  getList() {
    return this.listaCambio.asObservable();
  }
  setList(listaNueva: Ubicacion[]) {
    this.listaCambio.next(listaNueva);
  }
}
