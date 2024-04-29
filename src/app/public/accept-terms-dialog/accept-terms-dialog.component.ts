import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-accept-terms-dialog',
  templateUrl: './accept-terms-dialog.component.html',
  styleUrls: ['./accept-terms-dialog.component.css'],
})

export class AcceptTermsDialogComponent {
  constructor(public dialogRef: MatDialogRef<AcceptTermsDialogComponent>) {}

  closeDialog(): void {
    this.dialogRef.close();
  }
}
