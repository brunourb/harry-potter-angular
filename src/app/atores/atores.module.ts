import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtoresListComponent } from './atores-list/atores-list.component';
import { AtoresDetailComponent } from './atores-detail/atores-detail.component';



@NgModule({
  declarations: [
    AtoresListComponent,
    AtoresDetailComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [AtoresListComponent]
})
export class AtoresModule { }
