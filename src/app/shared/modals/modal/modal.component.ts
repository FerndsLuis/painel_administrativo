import { Component, OnInit, Inject } from '@angular/core';
import { Dados as DadosModel } from '../../models/dados.model';
import { DadosService } from '../../services/dados.service';

import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  constructor(
    private dadosService: DadosService,
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DadosModel
  ) {}

  dado: DadosModel = this.data;

  atualizarDados(id: any) {
    this.dadosService.atualizarDado(id, this.dado).subscribe(
      (dado) => {
        this.dado = new DadosModel();
        this.cancelar();
      },
      (err) => {
        console.log('Erro ao atualizar dado: ', err);
      }
    );
  }

  ngOnInit(): void {}

  cancelar(): void {
    this.dialogRef.close();
  }
}
