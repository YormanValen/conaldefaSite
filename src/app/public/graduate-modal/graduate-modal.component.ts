import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-graduate-modal',
  templateUrl: './graduate-modal.component.html',
  styleUrls: ['./graduate-modal.component.css']
})
export class GraduateModalComponent {
  constructor(
    public dialogRef: MatDialogRef<GraduateModalComponent>,
    @Inject(MAT_DIALOG_DATA) public graduate: any) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
