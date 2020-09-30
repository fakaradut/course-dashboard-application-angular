import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  person = {
    name: 'HOANG NGUYEN', pic: '../assets/images/header-person-pic.fw.png'
  }
  annotationValue  = '2';
  constructor() { }

  ngOnInit(): void {
  }

}
