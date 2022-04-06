import { environment } from './../../../environments/environment';
import { NovoUsuario } from './novo-usuario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class NovoUsuarioService {

  constructor(private http: HttpClient) { }


  cadatraNovoUsuario(novoUsuario: NovoUsuario): Observable<any> {
    return this.http.post(`${API}/user/signup`, novoUsuario);
  }

  verificaUsuarioExitente(nomeUsuario: string) {
    if(nomeUsuario.trim() != ''){
      return this.http.get(`${API}/user/exists/${nomeUsuario}`)
    }
    return '';
  }
}
