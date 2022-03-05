import { Component, OnInit } from '@angular/core';
import { DadosService } from '../shared/services/dados.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  dados: Array<any> = new Array();

  constructor(private dadosService: DadosService) {}

  ngOnInit(): void {
    this.listarDados();
  }

  listarDados() {}
}
