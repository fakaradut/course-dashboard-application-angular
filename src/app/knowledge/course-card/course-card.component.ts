import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {

  cardInfo = {
    titleDoneValue: '12',
    titleUndoneValue : '3',
  }

  cardListContent = [
    {content: 'Basic for UX designer'},
    {content: '10 steps to improve your wireframe'},
    {content: 'A Better Way To Request App Ratings'},
    {content: 'How To Speed Up Your WordPress Site'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
