import { switchMap, Observable } from 'rxjs';
import { AnimaisService } from './../animais.service';
import { UsuarioService } from './../../autenticacao/usuario/usuario.service';
import { Component, OnInit } from '@angular/core';
import { Animais } from '../animais';

@Component({
  selector: 'app-lista-aniamis',
  templateUrl: './lista-aniamis.component.html',
  styleUrls: ['./lista-aniamis.component.css']
})
export class ListaAniamisComponent implements OnInit {

  animais$!: Observable<Animais>;
  carregando: boolean = true;

  constructor(
    private usuarioService: UsuarioService,
    private animaisService: AnimaisService
  ) { }

  ngOnInit(): void {
    this.animais$ = this.usuarioService.retornaUsuario().pipe(
      switchMap((usuario) => {
        const username = usuario.name ?? '';
        return this.animaisService.listaDoUsuario(username);
      })
    );
  }

}
