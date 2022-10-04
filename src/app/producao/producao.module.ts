import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProducaoListComponent } from './producao-list/producao-list.component';
import { ProducaoDetailComponent } from './producao-detail/producao-detail.component';



@NgModule({
  declarations: [
    ProducaoListComponent,
    ProducaoDetailComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProducaoModule { }
