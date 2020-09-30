import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-status-card',
  templateUrl: './status-card.component.html',
  styleUrls: ['./status-card.component.css']
})
export class StatusCardComponent implements OnInit {

  bar = [
    { value: 'height: 80%;', label: 'COURSE' },
    { value: 'height: 20%;', label: 'QUESTION' },
    { value: 'height: 50%;', label: 'EXAM' }
  ];
  score = {
    score: '142'
    , date: 'LAST MONTH'
  }

  content = [
    { pic: '../../../assets/images/friend-picture.fw.png', name: 'SHAWN PETERSON', title: 'Finished the course: ', info: 'Basic for UX Designer', date: '9:30 PM' },
    { pic: '../../../assets/images/friend-picture.fw.png', name: 'MARY V. ROBINSON', title: 'Asked question: ', info: 'What is best grid for dekstop web?', date: '9:20 PM' },
    { pic: '../../../assets/images/friend-picture.fw.png', name: 'JOE RAMOS', title: 'Finished the exam: ', info: 'Junior web designer', date: '7:45 PM' },
    { pic: '../../../assets/images/friend-picture.fw.png', name: 'SEAN WALKER', title: 'Answered question: ', info: 'How to make good logo?', date: '11:15 AM' }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
