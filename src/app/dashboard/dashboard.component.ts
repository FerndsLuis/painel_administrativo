import { Component, OnInit } from '@angular/core';
import { DadosService } from '../shared/services/dados.service';
import { Dados as DadosModel } from '../shared/models/dados.model';

import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { ModalComponent } from '../shared/modals/modal/modal.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  dado: DadosModel = new DadosModel();
  dados: Array<DadosModel> = new Array();
  dadosFiltrado: Array<DadosModel> = new Array();
  idUsuarios: Array<DadosModel> = new Array();
  idBusca?: number;

  constructor(private dadosService: DadosService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.listarDados();
  }

  listarDados() {
    this.dadosService.listarDados().subscribe(
      (dados) => {
        this.dados = dados;
        this.idUsuarios = Array.from(
          this.dados.reduce((m, t) => m.set(t.userId, t), new Map()).values()
        );
      },
      (err) => {
        console.log('Erro ao listar', err);
      }
    );
  }

  buscarUsuario(id?: number) {
    this.listarDados();
    if (id != null) {
      this.idBusca = id;
      this.dadosFiltrado = this.dados.filter((x) => x.userId == this.idBusca);
      //console.log(this.dadosFiltrado);
    }
  }

  cadastrar() {
    console.log(this.dado);
    this.dadosService.cadastrarDado(this.dado).subscribe(
      (dado) => {
        this.dado = new DadosModel();
        this.listarDados();
      },
      (err) => {
        console.log('Erro ao cadastrar dado: ', err);
      }
    );
  }

  removerDados(id: any) {
    this.dadosService.removerAluno(id).subscribe(
      (dado) => {
        this.dado = new DadosModel();
        this.listarDados();
      },
      (err) => {
        console.log('Erro ao remover dado: ', err);
      }
    );
  }

  listarDado(id: any) {
    this.dadosService.listarDadoId(id).subscribe(
      (dado) => {
        this.dado = dado;
        this.abrirModel();
        console.log(this.dado);
      },
      (err) => {
        console.log('Erro ao listar dado', err);
      }
    );
  }

  abrirModel(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '250px',
      data: this.dado,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('closed', this.dado.id);
      this.dados = [];
      this.dado = new DadosModel();
      Array();
      this.listarDados();
    });
  }
}
