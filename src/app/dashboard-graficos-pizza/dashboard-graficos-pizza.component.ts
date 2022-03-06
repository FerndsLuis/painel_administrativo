import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartComponent } from 'ng-apexcharts';
import { Dados as DadosModel } from '../shared/models/dados.model';
import { DadosService } from '../shared/services/dados.service';

import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};

@Component({
  selector: 'app-dashboard-graficos-pizza',
  templateUrl: './dashboard-graficos-pizza.component.html',
  styleUrls: ['./dashboard-graficos-pizza.component.css'],
})
export class DashboardGraficosPizzaComponent implements OnInit {
  @ViewChild('chart') chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  dados: Array<DadosModel> = new Array();

  tarefaConcluida: number = 0;
  TarefaNaoConcluida: number = 0;

  constructor(private dadosService: DadosService) {}

  ngOnInit(): void {
    this.gerarDados();
  }
  gerarDados() {
    this.dadosService.listarDados().subscribe(
      (dados) => {
        this.dados = dados;

        this.dados.forEach((x) => {
          if (x.completed == true) {
            this.tarefaConcluida++;
          } else {
            this.TarefaNaoConcluida++;
          }
        });
        this.montarGrafico();
      },
      (err) => {
        console.log('Erro ao listar', err);
      }
    );
  }

  montarGrafico() {
    this.chartOptions = {
      series: [this.tarefaConcluida, this.TarefaNaoConcluida],
      chart: {
        width: 380,
        type: 'pie',
      },
      labels: ['Concluídas', 'Não Concluídas'],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
    };
  }
}
