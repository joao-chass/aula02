import { ListaAniamisComponent } from './lista-aniamis/lista-aniamis.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalheAnimalComponent } from './detalhe-animal/detalhe-animal.component';
import { ListaAnimaisResolver } from './lista-aniamis/lista-animais.resolver';

const routes: Routes = [
  {
    path: '',
    component: ListaAniamisComponent,
    resolve: {
      animais: ListaAnimaisResolver,
    }
  },
  {
    path: ':animalId',
    component: DetalheAnimalComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimaisRoutingModule { }
