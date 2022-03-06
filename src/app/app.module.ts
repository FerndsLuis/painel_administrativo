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
import { DashboardGraficosComponent } from './dashboard-graficos/dashboard-graficos.component';
import { routing } from './app.routing';
import { NgApexchartsModule } from 'ng-apexcharts';
import { DashboardGraficosPizzaComponent } from './dashboard-graficos-pizza/dashboard-graficos-pizza.component';
import { MatMenuModule } from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ModalComponent,
    DashboardGraficosComponent,
    DashboardGraficosPizzaComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    routing,
    NgApexchartsModule,
    MatMenuModule,
    MatButtonModule
  ],
  providers: [HttpClientModule, DadosService],
  bootstrap: [AppComponent],
})
export class AppModule {}
