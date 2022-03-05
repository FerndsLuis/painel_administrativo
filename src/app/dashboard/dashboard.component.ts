import { Component, OnInit } from '@angular/core';
import { DadosService } from '../shared/services/dados.service';
import { Dados as DadosModel } from '../shared/models/dados.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  dados: Array<DadosModel> = new Array();

  constructor(private dadosService: DadosService) {}

  ngOnInit(): void {
    this.listarDados();
  }

  listarDados() {
    this.dadosService.listarDados().subscribe(
      (dados) => {
        this.dados = dados;
      },
      (err) => {
        console.log('Erro ao listar os alunos', err);
      }
    );
  }
}
