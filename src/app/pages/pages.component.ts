import { Component, OnInit } from '@angular/core';
declare function iniciarSidebar(): any
declare function iniciarphonenyx():any
declare function iniciarconfig():any
@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  ngOnInit(): void {

    iniciarSidebar()
    iniciarphonenyx(),
    iniciarconfig()
  }

}
