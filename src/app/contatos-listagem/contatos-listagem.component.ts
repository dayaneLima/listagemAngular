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
