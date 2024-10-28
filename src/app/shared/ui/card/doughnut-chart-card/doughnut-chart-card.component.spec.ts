import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoughnutChartCardComponent } from './doughnut-chart-card.component';

describe('DoughnutChartCardComponent', () => {
  let component: DoughnutChartCardComponent;
  let fixture: ComponentFixture<DoughnutChartCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoughnutChartCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoughnutChartCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
