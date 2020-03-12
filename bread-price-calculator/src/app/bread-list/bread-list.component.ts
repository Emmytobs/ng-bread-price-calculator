import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bread-list',
  templateUrl: './bread-list.component.html',
  styleUrls: ['./bread-list.component.css']
})
export class BreadListComponent implements OnInit {

  breadNames: string[];

  constructor() { }

  ngOnInit() {
  }

}
