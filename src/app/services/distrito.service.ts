import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Subject } from 'rxjs';
import { Distrito } from '../models/Distrito';
import { HttpClient } from '@angular/common/http';

const base_url = environment.base;

@Injectable({
  providedIn: 'root'
})
export class DistritoService {

  private url = `${base_url}/Distritos`;
  private listaCambio = new Subject<Distrito[]>();

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Distrito[]>(this.url);
  }
  insert(di: Distrito) {
    return this.http.post(this.url, di);
  }

  //get y set

  getList() {
    return this.listaCambio.asObservable();
  }
  setList(listaNueva: Distrito[]) {
    this.listaCambio.next(listaNueva);
  }

}

