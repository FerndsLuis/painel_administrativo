import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardGraficosPizzaComponent } from './dashboard-graficos-pizza.component';

describe('DashboardGraficosPizzaComponent', () => {
  let component: DashboardGraficosPizzaComponent;
  let fixture: ComponentFixture<DashboardGraficosPizzaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardGraficosPizzaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardGraficosPizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
