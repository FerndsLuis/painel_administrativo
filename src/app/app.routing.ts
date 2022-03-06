import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardGraficosComponent } from './dashboard-graficos/dashboard-graficos.component';
import { ModuleWithProviders } from '@angular/core';
import { DashboardGraficosPizzaComponent } from './dashboard-graficos-pizza/dashboard-graficos-pizza.component';

declare module '@angular/core' {
  interface ModuleWithProviders<T = any> {
    ngModule: Type<T>;
    providers?: Provider[];
  }
}

const APP_ROUTES: Routes = [
  { path: '', component: DashboardComponent, pathMatch: 'full' },
  { path: 'grafico-coluna', component: DashboardGraficosComponent },
  { path: 'grafico-pizza', component: DashboardGraficosPizzaComponent },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
