import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailabilityResumeCardComponent } from './availability-resume-card.component';

describe('AvailabilityResumeCardComponent', () => {
  let component: AvailabilityResumeCardComponent;
  let fixture: ComponentFixture<AvailabilityResumeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvailabilityResumeCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvailabilityResumeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
