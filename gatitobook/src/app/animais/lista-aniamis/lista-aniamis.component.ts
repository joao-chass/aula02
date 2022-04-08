import { ActivatedRoute } from '@angular/router';
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

  animais!: Animais;
  carregando: boolean = true;

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(param=> {
      this.animais = this.activatedRoute.snapshot.data['animais'];
    })
  }

}
