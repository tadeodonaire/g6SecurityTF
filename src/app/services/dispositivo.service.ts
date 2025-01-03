import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { dispositivo } from '../models/dispositivo';
import { Subject } from 'rxjs';


const base_url = environment.base;

@Injectable({
  providedIn: 'root',
})

export class DispositivoService{
    private url=`${base_url}/dispositivos`
  private listaCambio = new Subject<dispositivo[]>();

  constructor(private http: HttpClient) {}

  list() {
    return this.http.get<dispositivo[]>(this.url);
  }
  insert(dis: dispositivo) {
    return this.http.post(this.url, dis);
  }
  //get y set
  
  getList() {
    return this.listaCambio.asObservable();
  }
  setList(listaNueva: dispositivo[]) {
    this.listaCambio.next(listaNueva);
  }
  
}

