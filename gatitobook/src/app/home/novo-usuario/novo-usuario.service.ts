import { NovoUsuario } from './novo-usuario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NovoUsuarioService {

  url = 'http://localhost:3000/user'

  constructor(private http: HttpClient) { }


  cadatraNovoUsuario(novoUsuario: NovoUsuario): Observable<any> {
    return this.http.post(`${this.url}/signup`, novoUsuario);
  }

  verificaUsuarioExitente(nomeUsuario: string) {
    if(nomeUsuario.trim() != ''){
      return this.http.get(`${this.url}/exists/${nomeUsuario}`)
    }
    return '';
  }
}
