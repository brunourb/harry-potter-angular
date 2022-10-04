import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstudioListComponent } from './estudio-list/estudio-list.component';
import { EstudioDetailComponent } from './estudio-detail/estudio-detail.component';



@NgModule({
  declarations: [
    EstudioListComponent,
    EstudioDetailComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [EstudioDetailComponent]
})
export class EstudioModule { }
