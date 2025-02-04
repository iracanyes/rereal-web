import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateReportsComponentComponent } from './create-report-page.component';

describe('CreateReportsComponentComponent', () => {
  let component: CreateReportsComponentComponent;
  let fixture: ComponentFixture<CreateReportsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateReportsComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateReportsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
