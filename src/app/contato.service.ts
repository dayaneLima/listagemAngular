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
