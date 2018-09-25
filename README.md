# ListagemAngular

Criação de uma listagem de contatos com Angular 6.

## API Utilizando o Json Server

É utilizado o Json Server para criar uma API "falsa" para o front-end consumir. 

Ele é baseado em um arquivo JSON, no qual é possível realizar um CRUD sobre esses dados.

### Instalação do Json Server

É utilizado o comando abaixo para instalar o JSon Server globalmente:

```javascript
npm install -g json-server
````

### Arquivo Json para consumo

Dentro da pasta api-json-server foi adicionado um Json chamado contatos.json, ele contém os dados para consumo:

```json
{
  "contatos": [
    {
      "id": 1,
      "nome": "dayane",
      "email": "dayane.lima.castro@gmail.com"
    },
    {
      "id": 2,
      "nome": "leonardo",
      "email": "leonardo.carmonio@gmail.com"
    },
    {
      "id": 3,
      "nome": "fulano",
      "email": "fulano.teste@gmail.com"
    }
  ]
}
````

### Iniciar o Json Server

É necessário ir até a pasta do arquivo e execute o comando :

```javascript
json-server contatos.json
````

## Criar um projeto em Angular

É utilizado o [Angular CLI](https://github.com/angular/angular-cli) para criar o projeto, caso não tenha o instale:

```javascript
npm install -g @angular/cli
````
Agora utilize o comando ng new para criar um projeto em Angular:

```javascript
ng new ListagemAngular
````

### Criar componente contatos-listagem

Para criar o componente de listagem é utilizado o comando:

```javascript
ng generate component contatos-listagem
````

### Criar service contato

Para criar o service contato é utilizado o comando:

```javascript
ng generate service contato
````

### Model contato

Dentro da pasta contatos-listagem foi criado uma pasta contato e dentro dela uma model chamada contato.model.ts, contento os atributos de um contato:

```javascript
export interface Contato{
    id: number;
    nome: string;
    email: string;
} 
````
  
### app.component.html

Dentro do html principal foi adicionado a chamada para o componente de listagem , o app-contatos-listagem:

```html
<h1>Listagem de contatos</h1>
<hr>
<app-contatos-listagem></app-contatos-listagem>
````

### contatos-listagem.component.ts

Dentro desse arquivo foi importado a model de Contato, além da criação de um array de contatos, injeção de dependência do contatoService e a chamada ao service para obter os contatos.

```javascript
import { ContatoService } from './../contato.service';
import { Component, OnInit } from '@angular/core';
import { Contato } from './contato/contato.model';

@Component({
  selector: 'app-contatos-listagem',
  templateUrl: './contatos-listagem.component.html',
  styleUrls: ['./contatos-listagem.component.css']
})
export class ContatosListagemComponent implements OnInit {

  contatos: Array<Contato>

  constructor(private contatoService: ContatoService) { }

  ngOnInit() {
    this.listar();
  }

  listar(){
    this.contatoService.listar().subscribe(dados => this.contatos = dados);
  }

}

````

### contatos-listagem.component.html

No html apenas é percorrido a lista de contatos:

```html
<h2>Contatos</h2>

<ul>
  <li *ngFor="let c of contatos" >
    {{c.id}} - {{c.nome}}
  </li>
</ul>
````

### contato.service.ts

No contato service é consumido a API que foi levantada utilizando o Json Server:

```javascript
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contato } from './contatos-listagem/contato/contato.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  private contatosUrl: String = " http://localhost:3000/contatos";

  constructor(private http: HttpClient) { }

  listar(): Observable<Contato[]>{
    return this.http.get<Contato[]>(`${this.contatosUrl}`);
  }
}

````
### Impostação do contatoService

No arquivo app.module.ts foi importado o contato.service e adicionado no array de providers:

```javascript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

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
    BrowserAnimationsModule
  ],
  providers: [ContatoService],
  bootstrap: [AppComponent]
})
export class AppModule { }

````

## Angular Material

### Instalação do Angular Material

 [Angular Material](https://material.angular.io/) é uma biblioteca contendo um conjunto de componentes do Material Design para Angular.
 
 ```javascript
 npm install --save @angular/material @angular/cdk @angular/animations
 ````

### Importação da Animação

No app.module.ts foi importado o animations


```javascript
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
````

E adicionado no array de Imports:

```javascript
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
````

### Inclusão de um tema

No arquivo styles.css foi importado o css de um tema no Angular Material:

```css
@import "~@angular/material/prebuilt-themes/indigo-pink.css";
````

### Instalação do hammerjs

O hammerjs é utilizado para os componentes mat-slide-toggle, mat-slider e matTooltip. Execute o seguinte comando:

```javascript
npm install --save hammerjs
````

E importe no src/main.ts:

```javascript
import 'hammerjs';
````

### Utilização do Icon do Material

Na index.html adicione o css:

```html
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
````

No app.module.ts foi adicionado o seguinte trecho de código:

```javascript
import {MatIconModule} from '@angular/material/icon';
````

E adicionado no array de imports:

```javascript
imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  ````

Para utilizar o ícone:

```html
      <mat-icon>nome_icone</mat-icon>
````

### Utilização do MatNavList

No app.module.ts foi adicionado o seguinte trecho de código:

```javascript
import {MatListModule} from '@angular/material/list';
````

E adicionado no array de imports:

```javascript
imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatListModule
  ],
  ````
  
  Alteração do contatos-listagem.component.html:
  
```html
<h2>Contatos</h2>

<mat-list>
  <mat-list-item *ngFor="let c of contatos" >
      <mat-icon mat-list-icon>assignment_ind</mat-icon>
      <h4 mat-line>Identificado {{c.id}}</h4>
      <p mat-line>Nome {{c.nome}}</p>
  </mat-list-item>
</mat-list>
````
