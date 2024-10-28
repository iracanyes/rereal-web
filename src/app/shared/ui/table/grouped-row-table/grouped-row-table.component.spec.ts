import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupedRowTableComponent } from './grouped-row-table.component';

describe('GroupedRowTableComponent', () => {
  let component: GroupedRowTableComponent;
  let fixture: ComponentFixture<GroupedRowTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GroupedRowTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupedRowTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
