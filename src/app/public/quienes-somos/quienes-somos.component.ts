import { Component, OnInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow';
import {  Router } from '@angular/router';



@Component({
  selector: 'app-quienes-somos',
  templateUrl: './quienes-somos.component.html',
  styleUrls: ['./quienes-somos.component.css'],
})
export class QuienesSomosComponent implements OnInit{

  constructor(private wowService: NgwWowService) {
  }

  ngOnInit() {
  }

  reset(){
  }




 
}
