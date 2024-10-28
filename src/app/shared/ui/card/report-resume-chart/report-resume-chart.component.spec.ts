import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportResumeChartComponent } from './report-resume-chart.component';

describe('ReportResumeChartComponent', () => {
  let component: ReportResumeChartComponent;
  let fixture: ComponentFixture<ReportResumeChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportResumeChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportResumeChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
