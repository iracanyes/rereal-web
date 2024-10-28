import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StackedBarLineChartComponent } from './stacked-bar-line-chart.component';

describe('StackedBarLineChartComponent', () => {
  let component: StackedBarLineChartComponent;
  let fixture: ComponentFixture<StackedBarLineChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StackedBarLineChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StackedBarLineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
