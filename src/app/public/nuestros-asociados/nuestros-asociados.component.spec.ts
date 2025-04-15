import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuestrosAsociadosComponent } from './nuestros-asociados.component';

describe('NuestrosAsociadosComponent', () => {
  let component: NuestrosAsociadosComponent;
  let fixture: ComponentFixture<NuestrosAsociadosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NuestrosAsociadosComponent]
    });
    fixture = TestBed.createComponent(NuestrosAsociadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
