import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimaisRoutingModule } from './animais-routing.module';
import { ListaAniamisComponent } from './lista-aniamis/lista-aniamis.component';


@NgModule({
  declarations: [
    ListaAniamisComponent
  ],
  imports: [
    CommonModule,
    AnimaisRoutingModule
  ]
})
export class AnimaisModule { }
