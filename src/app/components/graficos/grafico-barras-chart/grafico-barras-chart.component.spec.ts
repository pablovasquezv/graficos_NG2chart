import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoBarrasChartComponent } from './grafico-barras-chart.component';

describe('GraficoBarrasChartComponent', () => {
  let component: GraficoBarrasChartComponent;
  let fixture: ComponentFixture<GraficoBarrasChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficoBarrasChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficoBarrasChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
