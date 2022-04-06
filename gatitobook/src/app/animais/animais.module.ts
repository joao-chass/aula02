import { CartaoModule } from './../components/cartao/cartao.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimaisRoutingModule } from './animais-routing.module';
import { ListaAniamisComponent } from './lista-aniamis/lista-aniamis.component';
import { AnimalComponent } from './animal/animal.component';
import { GradeFotosAnimaisComponent } from './grade-fotos-animais/grade-fotos-animais.component';


@NgModule({
  declarations: [
    ListaAniamisComponent,
    AnimalComponent,
    GradeFotosAnimaisComponent,

  ],
  imports: [
    CommonModule,
    AnimaisRoutingModule,
    CartaoModule
  ]
})
export class AnimaisModule { }
