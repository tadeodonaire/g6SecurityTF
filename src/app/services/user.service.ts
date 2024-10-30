import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from '../models/Users';
import { environment } from '../../environments/environment';
import { Subject } from 'rxjs';

const base_url=environment.base
@Injectable({
  providedIn: 'root'
})
export class UserService {
private url=`${base_url}/usuarios`
private listaCambio=new Subject<Users[]>();

  constructor(private http:HttpClient) { }

  list(){
    return this.http.get<Users[]>(this.url)
  }

  insert(us:Users){
    return this.http.post(this.url, us);
  }

  //get y set

  getList(){
    return this.listaCambio.asObservable();
  }

  setList(listaNueva: Users[]){
    this.listaCambio.next(listaNueva);
  }
}

