import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptTermsDialogComponent } from './accept-terms-dialog.component';

describe('AcceptTermsDialogComponent', () => {
  let component: AcceptTermsDialogComponent;
  let fixture: ComponentFixture<AcceptTermsDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AcceptTermsDialogComponent]
    });
    fixture = TestBed.createComponent(AcceptTermsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
