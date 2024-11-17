import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable, Subject } from 'rxjs';
import { Ubicacion } from '../models/Ubicacion';
import { HttpClient } from '@angular/common/http';

const base_url = environment.base;

@Injectable({
  providedIn: 'root'
})
export class UbicacionService {

  private geocodingAPIURL = 'https://maps.googleapis.com/maps/api/geocode/json';
  private apiKey = 'AIzaSyDXsnJeX-3BQqcOESxwDPZrhUP94pFG3ZI';

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

  getCoordinates(address: string): Observable<any> {
    const url = `${this.geocodingAPIURL}?address=${encodeURIComponent(address)}&key=${this.apiKey}`;
    return this.http.get(url);
  }
}
