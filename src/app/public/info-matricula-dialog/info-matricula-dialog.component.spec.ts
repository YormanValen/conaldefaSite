import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoMatriculaDialogComponent } from './info-matricula-dialog.component';

describe('InfoMatriculaDialogComponent', () => {
  let component: InfoMatriculaDialogComponent;
  let fixture: ComponentFixture<InfoMatriculaDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfoMatriculaDialogComponent]
    });
    fixture = TestBed.createComponent(InfoMatriculaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
