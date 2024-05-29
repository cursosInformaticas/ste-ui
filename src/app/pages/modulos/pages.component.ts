import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
})
export class PagesComponent implements OnInit {



  constructor( private readonly router: Router) {

  }

  ngOnInit(): void {

  }

}
