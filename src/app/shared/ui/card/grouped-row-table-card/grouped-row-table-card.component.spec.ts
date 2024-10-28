import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupedRowTableCardComponent } from './grouped-row-table-card.component';

describe('GroupedRowTableCardComponent', () => {
  let component: GroupedRowTableCardComponent;
  let fixture: ComponentFixture<GroupedRowTableCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GroupedRowTableCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupedRowTableCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
