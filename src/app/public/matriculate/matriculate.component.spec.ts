import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatriculateComponent } from './matriculate.component';

describe('MatriculateComponent', () => {
  let component: MatriculateComponent;
  let fixture: ComponentFixture<MatriculateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MatriculateComponent]
    });
    fixture = TestBed.createComponent(MatriculateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
