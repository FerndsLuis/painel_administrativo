import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardGraficosComponent } from './dashboard-graficos/dashboard-graficos.component';
import { ModuleWithProviders } from '@angular/core';

declare module '@angular/core' {
  interface ModuleWithProviders<T = any> {
    ngModule: Type<T>;
    providers?: Provider[];
  }
}

const APP_ROUTES: Routes = [
  { path: '', component: DashboardComponent, pathMatch: 'full' },
  { path: 'grafico', component: DashboardGraficosComponent },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
