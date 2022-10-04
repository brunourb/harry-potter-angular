import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmesListComponent } from './filmes-list/filmes-list.component';
import { FilmesDetailComponent } from './filmes-detail/filmes-detail.component';



@NgModule({
  declarations: [
    FilmesListComponent,
    FilmesDetailComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FilmesModule { }
