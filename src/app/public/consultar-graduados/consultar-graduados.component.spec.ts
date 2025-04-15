import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarGraduadosComponent } from './consultar-graduados.component';

describe('ConsultarGraduadosComponent', () => {
  let component: ConsultarGraduadosComponent;
  let fixture: ComponentFixture<ConsultarGraduadosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultarGraduadosComponent]
    });
    fixture = TestBed.createComponent(ConsultarGraduadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
