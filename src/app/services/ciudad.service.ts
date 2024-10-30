import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Subject } from 'rxjs';
import { Ciudad } from '../models/Ciudad';
import { HttpClient } from '@angular/common/http';

const base_url=environment.base
@Injectable({
  providedIn: 'root'
})
export class CiudadService {
  private url=`${base_url}/Ciudades`
  private listaCambio = new Subject<Ciudad[]>();

  constructor(private http:HttpClient) { }

  list(){
    return this.http.get<Ciudad[]>(this.url);
  }

  insert(ci:Ciudad){
    return this.http.post(this.url,ci);
  }

  getList(){
    return this.listaCambio.asObservable();
  }

  setList(listaNueva:Ciudad[]){
    this.listaCambio.next(listaNueva);
  }

  delete(id:number){
    return this.http.delete(`${this.url}/${id}`);
  }
  listId(id:number){
    return this.http.get<Ciudad>(`${this.url}/${id}`);
  }
  update(c:Ciudad){
    return this.http.put(this.url,c)
  }
  
}
