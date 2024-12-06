import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodigoDeEticaComponent } from './codigo-de-etica.component';

describe('CodigoDeEticaComponent', () => {
  let component: CodigoDeEticaComponent;
  let fixture: ComponentFixture<CodigoDeEticaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CodigoDeEticaComponent]
    });
    fixture = TestBed.createComponent(CodigoDeEticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
