import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResolutionDetailComponent } from './resolution-detail.component';

describe('ResolutionDetailComponent', () => {
  let component: ResolutionDetailComponent;
  let fixture: ComponentFixture<ResolutionDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResolutionDetailComponent]
    });
    fixture = TestBed.createComponent(ResolutionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
