import { MensagemModule } from './../components/mensagem/mensagem.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    CommonModule, MensagemModule, ReactiveFormsModule
  ],
  exports: [MensagemModule, ReactiveFormsModule]
})
export class SharedModule { }
