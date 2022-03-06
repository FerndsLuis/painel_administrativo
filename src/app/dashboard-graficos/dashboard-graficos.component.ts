import { Component, ViewChild, OnInit } from '@angular/core';
import { Dados as DadosModel } from '../shared/models/dados.model';
import { DadosService } from '../shared/services/dados.service';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle,
} from 'ng-apexcharts';

export type ChartOptions = {
  series?: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
};
@Component({
  selector: 'app-dashboard-graficos',
  templateUrl: './dashboard-graficos.component.html',
  styleUrls: ['./dashboard-graficos.component.css'],
})
export class DashboardGraficosComponent implements OnInit {
  @ViewChild('chart') chart?: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  dados: Array<DadosModel> = new Array();

  tarefaConcluida: number = 10;
  TarefaNaoConcluida: number = 15;

  constructor(private dadosService: DadosService) {}

  ngOnInit(): void {
    this.gerarDados();
  }

  gerarDados() {
    this.dadosService.listarDados().subscribe(
      (dados) => {
        this.dados = dados;

        this.tarefaConcluida = this.dados.filter(
          (x) => x.completed == true
        ).length;

        this.TarefaNaoConcluida = this.dados.filter(
          (x) => x.completed == false
        ).length;

        this.montarGrafico();
      },
      (err) => {
        console.log('Erro ao listar', err);
      }
    );
  }

  montarGrafico() {
    this.chartOptions = {
      series: [
        {
          name: 'Tarefas',
          data: [this.tarefaConcluida, this.TarefaNaoConcluida],
        },
      ],
      chart: {
        height: 350,
        width: 450,
        type: 'bar',
      },
      title: {
        text: 'Meu primeiro Gráfico =D',
      },
      xaxis: {
        categories: ['Concluídas', 'Não Concluídas'],
      },
    };
  }
}
