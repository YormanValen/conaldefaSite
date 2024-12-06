import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteDeCasosComponent } from './reporte-de-casos.component';

describe('ReporteDeCasosComponent', () => {
  let component: ReporteDeCasosComponent;
  let fixture: ComponentFixture<ReporteDeCasosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReporteDeCasosComponent]
    });
    fixture = TestBed.createComponent(ReporteDeCasosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
