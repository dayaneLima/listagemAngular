import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';

import { AppComponent } from './app.component';
import { ContatosListagemComponent } from './contatos-listagem/contatos-listagem.component';

import { ContatoService } from './contato.service';

@NgModule({
  declarations: [
    AppComponent,
    ContatosListagemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatListModule
  ],
  providers: [ContatoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
