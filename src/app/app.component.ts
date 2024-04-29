import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { AcceptTermsDialogComponent } from './public/accept-terms-dialog/accept-terms-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit() {
    // this.openDialog();
  }

  // openDialog(): void {
  //   this.dialog.open(AcceptTermsDialogComponent, {
  //     disableClose: true, // Esto evita que el usuario cierre el diálogo haciendo clic fuera del mismo
  //   });
  // }
}
