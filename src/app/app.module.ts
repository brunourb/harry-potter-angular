import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AtoresModule } from './atores/atores.module';
import { EstudioModule } from './estudio/estudio.module';
import { FilmesModule } from './filmes/filmes.module';
import { ProducaoModule } from './producao/producao.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AtoresModule,
    FilmesModule,
    ProducaoModule,
    EstudioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
