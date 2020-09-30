import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exam-card',
  templateUrl: './exam-card.component.html',
  styleUrls: ['./exam-card.component.css']
})
export class ExamCardComponent implements OnInit {

  cardInfo = {
    titleDoneValue: '19'
    , titleUndoneValue: '88'
  }

  cardContent = [
    {value : '70',css:'height: 70%' ,content: 'Junior web designer'},
    {value : '20',css:'height: 20%' , content: 'Which is the best way to pass the PMP ...'},
    {value : '35',css:'height: 35%' , content: 'What are great examples of viral UX/UI...'},
    {value : '90',css:'height: 90%' , content: 'Why is consistency important in design?'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
