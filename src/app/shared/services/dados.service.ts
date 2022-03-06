import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Dados as DadosModel } from '../models/dados.model';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DadosService {
  constructor(private http: HttpClient) {}

  listarDados(): Observable<any> {
    return this.http.get(environment.API_URL);
  }

  cadastrarDado(dado: DadosModel): Observable<any> {
    return this.http.post(environment.API_URL, dado);
  }

  atualizarDado(id: any, dado: DadosModel): Observable<any> {
    return this.http.put(environment.API_URL.concat(id), dado);
  }

  removerAluno(id: any) {
    return this.http.delete(environment.API_URL.concat(id));
  }
}
