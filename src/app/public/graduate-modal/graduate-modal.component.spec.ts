import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraduateModalComponent } from './graduate-modal.component';

describe('GraduateModalComponent', () => {
  let component: GraduateModalComponent;
  let fixture: ComponentFixture<GraduateModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GraduateModalComponent]
    });
    fixture = TestBed.createComponent(GraduateModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
