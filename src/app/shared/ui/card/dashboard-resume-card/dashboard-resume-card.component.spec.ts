import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardResumeCardComponent } from './dashboard-resume-card.component';

describe('DashboardResumeCardComponent', () => {
  let component: DashboardResumeCardComponent;
  let fixture: ComponentFixture<DashboardResumeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardResumeCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardResumeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
