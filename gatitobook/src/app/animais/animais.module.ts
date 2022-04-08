import { ReactiveFormsModule } from '@angular/forms';
import { MensagemModule } from './../components/mensagem/mensagem.module';
import { RouterModule } from '@angular/router';
import { CartaoModule } from './../components/cartao/cartao.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimaisRoutingModule } from './animais-routing.module';
import { ListaAniamisComponent } from './lista-aniamis/lista-aniamis.component';
import { AnimalComponent } from './animal/animal.component';
import { GradeFotosAnimaisComponent } from './grade-fotos-animais/grade-fotos-animais.component';
import { DetalheAnimalComponent } from './detalhe-animal/detalhe-animal.component';
import { ComentariosComponent } from './detalhe-animal/comentarios/comentarios.component';


@NgModule({
  declarations: [
    ListaAniamisComponent,
    AnimalComponent,
    GradeFotosAnimaisComponent,
    DetalheAnimalComponent,
    ComentariosComponent
  ],
  imports: [
    CommonModule,
    AnimaisRoutingModule,
    CartaoModule,
    MensagemModule,
    ReactiveFormsModule
  ]
})
export class AnimaisModule { }

