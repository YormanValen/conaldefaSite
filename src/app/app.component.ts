import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { MatDialog } from '@angular/material/dialog';
import { AcceptTermsDialogComponent } from './public/accept-terms-dialog/accept-terms-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(public dialog: MatDialog, private titleService: Title) {}
  ngOnInit() {
    this.titleService.setTitle('Conaldefa | Colegio Nacional de Profesionales de Desarrolo Familiar');
  }

  
}
