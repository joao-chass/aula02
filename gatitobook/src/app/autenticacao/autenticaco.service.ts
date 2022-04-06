import { UsuarioService } from './usuario/usuario.service';
import { Injectable } from '@angular/core';
import {  HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticacoService {

  constructor(private httpClient: HttpClient, private usuarioSevice : UsuarioService) { }
  url = 'http://localhost:3000/user'

  autenticar(usuario: string, senha: string): Observable<HttpResponse<any>>{
    return this.httpClient.post(`${this.url}/login`, {
      userName: usuario,
      password: senha
    },
    {observe: 'response'}
    ).pipe(
      tap((res) => {
        const authToken = res.headers.get('x-access-token') ?? '';
        this.usuarioSevice.salvaToken(authToken);
      })
    )
  }
}
