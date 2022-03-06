import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardGraficosComponent } from './dashboard-graficos.component';

describe('DashboardGraficosComponent', () => {
  let component: DashboardGraficosComponent;
  let fixture: ComponentFixture<DashboardGraficosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardGraficosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardGraficosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
