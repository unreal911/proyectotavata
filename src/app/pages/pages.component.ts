import { Component, OnInit } from '@angular/core';
declare function inciarMenu(): any
declare function initMain(): any
@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  ngOnInit(): void {
    inciarMenu();
    initMain();
  }
}
