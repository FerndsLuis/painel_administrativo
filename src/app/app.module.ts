import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { DadosService } from './shared/services/dados.service';

@NgModule({
  declarations: [AppComponent, DashboardComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [HttpClientModule, DadosService],
  bootstrap: [AppComponent],
})
export class AppModule {}
