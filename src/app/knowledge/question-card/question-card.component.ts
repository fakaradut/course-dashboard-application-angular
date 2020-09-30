import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question-card',
  templateUrl: './question-card.component.html',
  styleUrls: ['./question-card.component.css']
})
export class QuestionCardComponent implements OnInit {

  cardInfo = {
    titleDoneValue: '27'
    , titleUndoneValue: '7'
  }

  cardContent = [
    { value: '12', content: 'How to make good logo?' },
    { value: '3', content: 'What are the best mobile apps for...' },
    { value: '67', content: "What's the difference between UI and ..." },
    { value: '0', content: 'What logos include hidden messages ...' }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
