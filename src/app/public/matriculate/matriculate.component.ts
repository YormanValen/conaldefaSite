import { Component, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InfoMatriculaDialogComponent } from '../../public/info-matricula-dialog/info-matricula-dialog.component';



@Component({
  selector: 'app-matriculate',
  templateUrl: './matriculate.component.html',
  styleUrls: ['./matriculate.component.css'],
  encapsulation: ViewEncapsulation.None,

})
export class MatriculateComponent {
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    
 }

 openDialog(): void {
   this.dialog.open(InfoMatriculaDialogComponent, {
     disableClose: true, // Esto evita que el usuario cierre el diálogo haciendo clic fuera del mismo
   });
 }

}
