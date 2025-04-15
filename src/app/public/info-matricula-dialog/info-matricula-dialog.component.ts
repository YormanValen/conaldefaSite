import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-info-matricula-dialog',
  templateUrl: './info-matricula-dialog.component.html',
  styleUrls: ['./info-matricula-dialog.component.css']
})
export class InfoMatriculaDialogComponent {
  constructor(public dialogRef: MatDialogRef<InfoMatriculaDialogComponent>) {}

  closeDialog(): void {
    this.dialogRef.close();
  }
}
