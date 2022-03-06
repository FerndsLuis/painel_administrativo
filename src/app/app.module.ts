import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { DadosService } from './shared/services/dados.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatDialogModule } from '@angular/material/dialog';
import { ModalComponent } from './shared/modals/modal/modal.component';

@NgModule({
  declarations: [AppComponent, DashboardComponent, ModalComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
  ],
  providers: [HttpClientModule, DadosService],
  bootstrap: [AppComponent],
})
export class AppModule {}
