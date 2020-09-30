import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  person = {
    name: 'HOANG NGUYEN',
    occupation: 'Student',
    score : '8,782'
  }

  ngOnInit(): void {
  }

}
