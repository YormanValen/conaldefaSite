import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedInstitucionalComponent } from './red-institucional.component';

describe('RedInstitucionalComponent', () => {
  let component: RedInstitucionalComponent;
  let fixture: ComponentFixture<RedInstitucionalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RedInstitucionalComponent]
    });
    fixture = TestBed.createComponent(RedInstitucionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
