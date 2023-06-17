import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesReasonComponent } from './sales-reason.component';

describe('SalesReasonComponent', () => {
  let component: SalesReasonComponent;
  let fixture: ComponentFixture<SalesReasonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SalesReasonComponent]
    });
    fixture = TestBed.createComponent(SalesReasonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
